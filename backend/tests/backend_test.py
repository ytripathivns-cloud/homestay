"""Backend API tests for Varanasi Paradise Homestay."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback to reading frontend/.env
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break
BASE_URL = (BASE_URL or "").rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        assert r.json() == {"status": "ok"}


# ---------- Property ----------
class TestProperty:
    def test_get_property(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/property", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "Varanasi Paradise Homestay"
        assert data["host"] == "Yogendra"
        assert data["rating"] == 4.89
        assert data["airbnb_url"] == "https://www.airbnb.co.in/h/varanasiparadise"
        assert data["max_guests"] == 6


# ---------- Inquiries ----------
class TestInquiries:
    created_id = None

    def test_create_inquiry_valid(self, api_client):
        payload = {
            "name": "TEST_John",
            "email": "test_john@example.com",
            "phone": "+919999900000",
            "check_in": "2026-02-01",
            "check_out": "2026-02-05",
            "guests": 2,
            "message": "TEST inquiry",
        }
        r = api_client.post(f"{BASE_URL}/api/inquiries", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "_id" not in data, "_id should NOT be exposed"
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["guests"] == 2
        TestInquiries.created_id = data["id"]

    def test_create_inquiry_invalid_email(self, api_client):
        r = api_client.post(
            f"{BASE_URL}/api/inquiries",
            json={"name": "Bad", "email": "not-an-email", "guests": 1},
            timeout=15,
        )
        assert r.status_code == 422

    def test_create_inquiry_too_many_guests(self, api_client):
        r = api_client.post(
            f"{BASE_URL}/api/inquiries",
            json={"name": "Big", "email": "big@example.com", "guests": 7},
            timeout=15,
        )
        assert r.status_code == 422

    def test_create_inquiry_missing_name(self, api_client):
        r = api_client.post(
            f"{BASE_URL}/api/inquiries",
            json={"email": "x@example.com", "guests": 1},
            timeout=15,
        )
        assert r.status_code == 422

    def test_list_inquiries(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/inquiries", timeout=15)
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        # Verify _id excluded and our created inquiry exists
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "created_at" in it
        if TestInquiries.created_id:
            ids = [it["id"] for it in items]
            assert TestInquiries.created_id in ids
        # Verify sorted desc by created_at
        if len(items) >= 2:
            assert items[0]["created_at"] >= items[1]["created_at"]
