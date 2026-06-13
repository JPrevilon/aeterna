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

## Production setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Create a Stripe account and add product/price IDs to the services/products data files.
4. Create a Resend API key for contact, newsletter, and booking emails.
5. Add env vars in Vercel.
6. Deploy on Vercel.

## Environment variables

See `.env.example`.

## Build check

```bash
npm run typecheck
npm run build
```

## Medical copy note

Aeterna includes wellness and medical-adjacent services. Keep all public copy consult-first and avoid guaranteed claims. Use language like “designed to support,” “when clinically appropriate,” “provider-guided,” “results vary,” and “consultation required.”
