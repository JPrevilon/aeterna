# Aeterna Luxe Wellness Website

A premium Next.js build starter for **Aeterna Luxe Wellness & Beauty** — a luxury spa, medical wellness, anti-aging, weight-loss, IV therapy, hormone-balance, and body-sculpting brand.

This bundle is built to be handed to Codex/AI coding agents or a developer and finished into a production website.

## What is included

- Next.js App Router + TypeScript project
- Tailwind CSS luxury visual system
- Motion React animation-ready components
- Service menu database
- Product/wellness program database
- Membership tier database
- Journal/newsletter pages
- Booking request flow
- Stripe Checkout starter route
- Supabase schema starter
- Resend email starter routes
- SEO metadata, robots, and sitemap files
- Uploaded brand assets and storefront/interior photos
- Codex prompts in build order

## Brand assets included

```txt
public/assets/logos/aeterna-full-logo.png
public/assets/logos/aeterna-wordmark-logo.png
public/assets/logos/aeterna-symbol.png
public/assets/logos/aeterna-original-dark.jpeg
public/assets/photos/aeterna-interior-wide.jpeg
public/assets/photos/aeterna-treatment-room.jpeg
public/assets/photos/aeterna-storefront-door.jpeg
```

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open:

```txt
http://localhost:3000
```

If port `3000` is already in use, start the dev server on another port:

```bash
npm run dev -- --port 3001
```

Then open:

```txt
http://localhost:3001
```

## Production setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Add Supabase and admin env vars in Vercel.
4. Visit `/admin`, authenticate with Basic Auth, and use **Sync Catalog** to upsert services, products, and memberships into Supabase.
5. Create a Stripe account and add optional Stripe Price ID env vars for pre-created membership/product prices.
6. Create a Resend API key for contact, newsletter, and booking emails.
7. Deploy on Vercel.

## Environment variables

See `.env.example`.

Useful booking/payment variables:

```txt
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_SPLINE_SCENE_URL=
ADMIN_BASIC_USER=
ADMIN_BASIC_PASSWORD=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

Set `NEXT_PUBLIC_BOOKING_URL` to a Square, Fresha, GlossGenius, or other external booking link to show a “Book Instantly” CTA for non-medical services. Leave it blank to use the built-in booking request form.

Set `NEXT_PUBLIC_SPLINE_SCENE_URL` only if you want to show the optional lazy-loaded ambient Spline scene on the homepage. Leave it blank to keep the page fully image-led.

## Supabase setup

Run the starter schema in the Supabase SQL editor:

```sql
-- Open Supabase > SQL Editor > New query
-- Paste and run:
-- supabase/schema.sql
```

The schema enables Row Level Security. Anonymous visitors can insert contact leads, newsletter subscribers, booking requests, consultation requests, and gift-card purchase records, but they cannot read private lead or booking data. Public catalog tables allow reads for active services, products, and memberships.

The `/admin` route is protected with Basic Auth when `ADMIN_BASIC_USER` and `ADMIN_BASIC_PASSWORD` are set. Private admin reads use `SUPABASE_SERVICE_ROLE_KEY` on the server only; never expose this key in browser code.

## Launch security and spam notes

Public contact, newsletter, booking, and checkout endpoints validate payloads with Zod and include lightweight IP-based throttling. For production launch, pair this with a durable provider-level control such as Vercel WAF/rate limiting, Cloudflare Turnstile, hCaptcha, or a Supabase Edge Function limit if spam volume increases.

Security headers are configured in `next.config.ts`. Keep `.env.local`, Supabase service-role keys, Stripe secrets, Resend keys, and admin credentials out of git; `.gitignore` excludes local env files.

## Stripe Checkout setup

The checkout API is catalog-backed. Gift cards accept a bounded custom amount, while products, deposits, and memberships resolve title, amount, and purchase mode from local data on the server.

- Gift cards and consultation deposits use one-time `payment` mode.
- Memberships use `subscription` mode with monthly `price_data` by default.
- If you set `STRIPE_PRICE_MEMBERSHIP_AETERNA_GLOW`, `STRIPE_PRICE_MEMBERSHIP_AETERNA_RESTORE`, or `STRIPE_PRICE_MEMBERSHIP_AETERNA_LONGEVITY`, use recurring Stripe Prices to create subscriptions from pre-created Stripe products.
- Optional fixed product/deposit price vars follow `STRIPE_PRICE_PRODUCT_<SLUG>` or `STRIPE_PRICE_DEPOSIT_<SLUG>` with uppercase slug names and dashes changed to underscores.
- Consult-required medical products, injections, GLP-1 programs, IV therapy, and hormone care remain consultation-first and are blocked from direct purchase unless the catalog item is explicitly marked as a consultation deposit.

Configure the webhook endpoint in Stripe:

```txt
https://your-domain.com/api/stripe/webhook
```

Listen for `checkout.session.completed` and `payment_intent.succeeded`.

## Build check

```bash
npm run lint
npm run typecheck
npm run build
```

## Medical copy note

Aeterna includes wellness and medical-adjacent services. Keep all public copy consult-first and avoid guaranteed claims. Use language like “designed to support,” “when clinically appropriate,” “provider-guided,” “results vary,” and “consultation required.”
