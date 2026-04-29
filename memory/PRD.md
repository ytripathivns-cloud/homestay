# Varanasi Paradise Homestay — PRD

## Original Problem Statement
> "I want to create a website for my homestay listed on airbnb"
> Listing: https://airbnb.co.in/h/varanasiparadise

## Architecture
- **Backend**: FastAPI + MongoDB (motor). Routes prefixed with /api.
- **Frontend**: React (CRA) + Tailwind + shadcn/ui. Single page (`/`) marketing site.
- **Design**: Bone-white + terracotta/saffron palette. Cormorant Garamond (headings) + Outfit (body).

## User Personas
- **Traveller** browsing the site → views property, gallery, location, reviews; sends inquiry or clicks to Airbnb.
- **Host (Yogendra)** → reviews inquiries (currently via DB; admin UI deferred).

## Core Requirements
- Beautiful, on-brand single-page site representing the homestay.
- Photo gallery, amenities, location, reviews, host bio.
- Direct booking link to Airbnb.
- Inquiry form storing leads in MongoDB.

## Implemented (2026-04)
- Sticky navbar with smooth-scroll anchors and mobile menu.
- Hero (asymmetric split, hero image, dual CTAs).
- Marquee strip of guest-mention highlights.
- About section with overlapping image and stats (guests/bedrooms/baths).
- Gallery (6-image bento grid).
- Bedrooms (3 cards).
- Amenities (12-tile icon grid).
- Location (parallax background, nearby attractions list).
- Reviews (carousel + rating breakdown).
- Host (Yogendra Superhost section).
- Booking inquiry form (shadcn Calendar range picker, Select, Sonner toasts).
- Footer with Airbnb link.
- Backend: POST/GET /api/inquiries, GET /api/property, GET /api/health.
- Tested end-to-end (backend 100%, frontend 94%).

## Backlog
**P1**
- Admin dashboard at /admin to view inquiries (with simple password).
- Email notification on new inquiry (Resend or SendGrid integration).
- SEO meta tags & OG image for social sharing.

**P2**
- Multilingual (English/Hindi) toggle.
- Blog / "Things to do in Varanasi" content.
- Live availability fetched from Airbnb (iCal sync).
- WhatsApp click-to-chat button.
- Photo lightbox on gallery click.
