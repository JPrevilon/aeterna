# Aeterna Build Order

Use this order exactly.

## Phase 0 — Setup

1. Unzip the full bundle.
2. Open the `aeterna_luxe_wellness_site` folder in your editor or Codex workspace.
3. Run:

```bash
npm install
cp .env.example .env.local
npm run typecheck
npm run build
```

Fix any dependency/version issues before adding new features.

## Phase 1 — Brand polish

Use prompts:

```txt
00_MASTER_PROMPT.md
01_PROJECT_AUDIT_AND_SETUP.md
02_BRAND_SYSTEM_AND_LAYOUT_POLISH.md
```

Goal: make the homepage feel like an elite spa/longevity brand.

## Phase 2 — Core content

Use prompts:

```txt
03_SERVICE_DATABASE_AND_SERVICE_PAGES.md
04_MEDICAL_WELLNESS_COPY_AND_COMPLIANCE.md
05_SHOP_PRODUCTS_GIFTCARDS_MEMBERSHIPS.md
```

Goal: finish content, service cards, product cards, consultation language, and membership pages.

## Phase 3 — Booking and conversion

Use prompts:

```txt
06_BOOKING_FUNNEL_AND_FORMS.md
07_SUPABASE_BACKEND_SCHEMA_AND_ADMIN.md
08_STRIPE_CHECKOUT_AND_PAYMENTS.md
```

Goal: make bookings, consult requests, gift cards, deposits, and Stripe checkout work.

## Phase 4 — Luxury motion and SEO

Use prompts:

```txt
09_ANIMATION_AND_3D_LUXURY.md
10_SEO_LOCAL_SEARCH_AND_JOURNAL.md
```

Goal: add motion, visual polish, local SEO, Google-ready pages, and journal content.

## Phase 5 — Deploy

Use prompts:

```txt
11_ACCESSIBILITY_PERFORMANCE_SECURITY.md
12_FINAL_QA_DEPLOY.md
```

Goal: validate, build, test, and deploy.

## Minimum launch checklist

- Homepage finished
- Services page finished
- Medical wellness page finished
- Contact form sends email
- Booking request form sends email
- Stripe Checkout works in test mode
- Mobile nav works
- All images load
- Metadata, sitemap, robots working
- Medical disclaimers visible on consult pages
- Phone/email/social links confirmed
