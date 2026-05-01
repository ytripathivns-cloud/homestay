from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
HOST_EMAIL = os.environ.get('HOST_EMAIL', '')

app = FastAPI(title="Varanasi Paradise Homestay API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    check_in: Optional[str] = None  # ISO date string YYYY-MM-DD
    check_out: Optional[str] = None
    guests: int = Field(default=1, ge=1, le=6)
    message: Optional[str] = Field(default=None, max_length=2000)


class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    check_in: Optional[str] = None
    check_out: Optional[str] = None
    guests: int = 1
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Varanasi Paradise Homestay API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    inquiry = Inquiry(**payload.model_dump())
    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.inquiries.insert_one(doc)

    # Fire-and-forget email notification to host
    if resend.api_key and HOST_EMAIL:
        asyncio.create_task(_send_inquiry_email(inquiry))

    return inquiry


async def _send_inquiry_email(inquiry: "Inquiry") -> None:
    """Send a formatted HTML email to the host about a new inquiry."""
    try:
        def esc(v):
            return (v or "—")
        html = f"""
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9F6F0;padding:40px 0;font-family:Georgia,serif;color:#23211F;">
          <tr><td align="center">
            <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e3ddcf;">
              <tr><td style="padding:32px 36px 12px;border-bottom:1px solid #efebe4;">
                <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#AF4F3B;font-family:Arial,sans-serif;">New Inquiry · Varanasi Paradise</p>
                <h1 style="margin:8px 0 0;font-size:28px;line-height:1.2;color:#23211F;">A guest just reached out.</h1>
              </td></tr>
              <tr><td style="padding:24px 36px;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#23211F;">
                <p style="margin:0 0 16px;color:#68665E;">Details below — reply within an hour to keep the Superhost streak going.</p>
                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                  <tr><td style="color:#68665E;width:140px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Name</td><td style="color:#23211F;font-weight:600;">{esc(inquiry.name)}</td></tr>
                  <tr><td style="color:#68665E;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Email</td><td><a href="mailto:{esc(inquiry.email)}" style="color:#AF4F3B;text-decoration:none;">{esc(inquiry.email)}</a></td></tr>
                  <tr><td style="color:#68665E;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Phone</td><td style="color:#23211F;">{esc(inquiry.phone)}</td></tr>
                  <tr><td style="color:#68665E;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Check-in</td><td style="color:#23211F;">{esc(inquiry.check_in)}</td></tr>
                  <tr><td style="color:#68665E;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Check-out</td><td style="color:#23211F;">{esc(inquiry.check_out)}</td></tr>
                  <tr><td style="color:#68665E;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Guests</td><td style="color:#23211F;">{inquiry.guests}</td></tr>
                </table>
                <div style="margin-top:20px;padding:18px 20px;background:#F9F6F0;border-left:3px solid #AF4F3B;">
                  <p style="margin:0 0 8px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#68665E;font-family:Arial,sans-serif;">Message</p>
                  <p style="margin:0;color:#23211F;white-space:pre-wrap;">{esc(inquiry.message)}</p>
                </div>
              </td></tr>
              <tr><td style="padding:18px 36px 28px;border-top:1px solid #efebe4;font-family:Arial,sans-serif;font-size:12px;color:#68665E;">
                Inquiry ID: {inquiry.id}<br/>
                Received: {inquiry.created_at.strftime('%d %b %Y, %H:%M UTC')}
              </td></tr>
            </table>
          </td></tr>
        </table>
        """
        params = {
            "from": SENDER_EMAIL,
            "to": [HOST_EMAIL],
            "reply_to": inquiry.email,
            "subject": f"New inquiry from {inquiry.name} · Varanasi Paradise",
            "html": html,
        }
        await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Inquiry email sent to {HOST_EMAIL} for inquiry {inquiry.id}")
    except Exception as e:
        logger.error(f"Failed to send inquiry email: {e}")


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries():
    items = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except Exception:
                it['created_at'] = datetime.now(timezone.utc)
    return items


# ---------- Property Info (static, for frontend convenience) ----------
@api_router.get("/property")
async def get_property():
    return {
        "name": "Varanasi Paradise Homestay",
        "tagline": "Near Temple and Ghat",
        "city": "Varanasi, Uttar Pradesh, India",
        "host": "Yogendra",
        "rating": 4.89,
        "reviews_count": 219,
        "bedrooms": 3,
        "bathrooms": 2,
        "max_guests": 6,
        "airbnb_url": "https://www.airbnb.co.in/h/varanasiparadise",
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
