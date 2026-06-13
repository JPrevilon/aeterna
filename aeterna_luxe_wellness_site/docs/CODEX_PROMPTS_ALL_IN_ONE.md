# Aeterna Codex Prompts — All In One

Use prompts in order. Do not skip the audit/build prompt.


---

# 00_MASTER_PROMPT.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Mission

Build a production-ready luxury wellness website for **Aeterna Luxe Wellness & Beauty**.

The site must support:

- Luxury spa brand presentation
- Services pages
- Medical wellness / longevity pages
- Booking request flow
- Consultation flow
- Shop/products preview
- Gift cards
- Memberships
- Newsletter
- Contact forms
- SEO pages
- Admin/content-ready structure
- Smooth motion without looking gimmicky

## Stack

Use the existing stack unless there is a strong reason to change it:

```txt
Next.js App Router
TypeScript
Tailwind CSS
Motion React
Supabase
Stripe Checkout
Resend
Vercel
```

## Non-negotiable design requirements

- Desktop and mobile must both look premium.
- Header must be elegant and never feel crowded.
- Sticky mobile “Book Now” behavior is preferred.
- Photos should use rounded luxury cards, soft shadows, and warm overlays.
- Buttons should feel high-end: understated, tactile, smooth.
- Animations must be slow and calm.
- Use the Aeterna symbol as a watermark / luxury detail in a few places.
- Maintain accessibility: semantic HTML, alt text, contrast, focus states.

## Medical copy rules

For GLP-1, hormone therapy, IV therapy, body sculpting, and injections:

- Use “consultation required” language.
- Use “when clinically appropriate.”
- Use “provider-guided.”
- Use “results vary.”
- Do not claim guaranteed outcomes, cures, disease prevention, or no-risk care.

## Assets

Use assets in:

```txt
public/assets/logos
public/assets/photos
```

## Work style

Make small, complete commits/changes. After every major change run:

```bash
npm run typecheck
npm run build
```

If something fails, fix it before moving to the next prompt.


---

# 01_PROJECT_AUDIT_AND_SETUP.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Audit the project and make it fully runnable.

## Tasks

1. Run `npm install`.
2. Run `npm run typecheck` and `npm run build`.
3. Fix any TypeScript, import, route, or package issues.
4. Confirm all image paths work.
5. Confirm all pages render.
6. Confirm env-variable fallbacks do not crash the site.
7. Confirm API routes return safe errors when env vars are missing.
8. Update README setup instructions if any commands change.

## Required output

- A clean local dev server
- A passing production build
- A short summary of any files changed

## Do not

- Replace the brand direction
- Delete service/product data
- Remove medical disclaimers


---

# 02_BRAND_SYSTEM_AND_LAYOUT_POLISH.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Polish the visual system until it feels like a high-end luxury wellness / longevity brand.

## Tasks

1. Review `tailwind.config.ts`, `globals.css`, and shared components.
2. Make sure colors are consistently used:
   - Vanilla / cream backgrounds
   - Cocoa / espresso typography
   - Sage/olive accents
   - Champagne details
3. Improve header and footer polish.
4. Make cards, buttons, image frames, form controls, and section spacing consistent.
5. Use subtle background texture or radial light gradients without making it busy.
6. Ensure homepage above-the-fold has a strong luxury impression.
7. Use the Aeterna symbol as a watermark only where tasteful.
8. Make all mobile spacing excellent.

## Acceptance criteria

- Header looks premium on desktop and mobile.
- Hero feels like a luxury spa site, not a template.
- Buttons and cards feel tactile and elegant.
- Images are cropped properly.
- Footer contains contact, social, newsletter, and legal links.


---

# 03_SERVICE_DATABASE_AND_SERVICE_PAGES.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Turn the service data into a polished service browsing experience.

## Tasks

1. Review `src/data/services.ts`.
2. Add any missing common spa services that fit Aeterna:
   - Aromatherapy massage
   - Prenatal comfort massage
   - Deep pore facial
   - Back facial
   - Detox body wrap
   - Scalp/neck/shoulder ritual
3. Keep advanced treatments consult-first.
4. Make `/services` filterable by category or section anchors.
5. Improve `/services/[slug]` with:
   - Hero image
   - Benefits
   - Best-for tags
   - Duration/pricing
   - Add-ons
   - Related services
   - Consultation disclaimer where needed
6. Add a strong CTA to `/book` and `/consultation`.

## Copy rules

Spa rituals can use warmer luxury copy. Medical wellness services must remain professional and cautious.

## Acceptance criteria

- Every service has a detail page.
- No broken slugs.
- All prices and “Call for consult” labels display cleanly.
- The service page is beautiful on mobile.


---

# 04_MEDICAL_WELLNESS_COPY_AND_COMPLIANCE.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Make the medical wellness section credible, premium, and legally safer.

## Tasks

1. Review `/medical-wellness`, medical service detail pages, product pages, policies, and booking forms.
2. Add clear categories:
   - Medical Weight Loss
   - GLP-1 Programs
   - IV Therapy
   - Wellness Shots
   - Hormone Balance
   - Body Sculpting
   - Anti-Aging / Longevity
3. Use consult-first language everywhere medical care is implied.
4. Add medical disclaimer component and reuse it.
5. Add a required checkbox to consult/booking forms:
   - “I understand consultation is required and results vary.”
6. Remove or rewrite any risky medical claims.
7. Add an FAQ section explaining consultation, eligibility, payments, and results variability.

## Acceptance criteria

- No page claims guaranteed weight loss.
- No page claims to cure/prevent diseases.
- All prescription/injection/hormone services mention provider evaluation.
- Medical pages feel high-end, not scary or aggressive.


---

# 05_SHOP_PRODUCTS_GIFTCARDS_MEMBERSHIPS.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Build conversion-focused shop, gift card, and membership experiences.

## Tasks

1. Review `src/data/products.ts` and `src/data/memberships.ts`.
2. Improve `/shop` with categories, product cards, and consult-required badges.
3. Improve `/shop/[slug]` with:
   - Product/program description
   - Benefits/support copy
   - Pricing label
   - Pairing recommendations
   - CTA to checkout or consultation
4. Improve `/gift-cards` with preset amounts and occasions:
   - Birthday Ritual
   - Couples Experience
   - Mother’s Day Ritual
   - Custom Amount
5. Improve `/memberships` with comparison cards and value breakdowns.
6. Add Stripe-ready buttons using existing checkout API.
7. Keep consult-required items from being sold directly unless set as consultation deposit.

## Acceptance criteria

- Gift cards route to Stripe Checkout.
- Membership cards are beautiful and clear.
- Consult-required products route to consultation instead of direct purchase.
- Product pages have strong conversion copy.


---

# 06_BOOKING_FUNNEL_AND_FORMS.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Make the booking funnel elegant, simple, and lead-generating.

## Tasks

1. Improve `BookingBuilder` UX.
2. Booking flow should support:
   - Choose service
   - Choose preferred duration
   - Choose preferred date/time
   - Add notes
   - Submit request
3. Add consult-first path for medical wellness.
4. Add optional “I want the earliest available appointment” checkbox.
5. Add support for Square/Fresha/GlossGenius external booking link via env var.
6. If `NEXT_PUBLIC_BOOKING_URL` exists, show “Book Instantly” button.
7. If no external booking URL exists, use the booking request form.
8. Ensure form validates with Zod and sends through `/api/booking-request`.
9. Add thank-you/success state.

## Acceptance criteria

- Spa guests can request a normal service.
- Medical guests are routed into consultation.
- Forms do not crash if email env vars are missing.
- Mobile form feels easy.


---

# 07_SUPABASE_BACKEND_SCHEMA_AND_ADMIN.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Add Supabase persistence and admin readiness.

## Tasks

1. Review `supabase/schema.sql`.
2. Run it in Supabase SQL editor.
3. Create typed helpers if needed.
4. Store these records:
   - Contact leads
   - Newsletter subscribers
   - Booking requests
   - Consultation requests
   - Products
   - Services
   - Memberships
   - Gift card purchases, if used
5. Build a basic protected admin dashboard or admin preview flow:
   - Recent leads
   - Recent bookings
   - Newsletter count
   - Service/product preview
6. Add Row Level Security policies appropriate for public inserts and private admin reads.
7. Use environment variables only; never hard-code Supabase secrets.

## Acceptance criteria

- Public users can submit forms.
- Anonymous public users cannot read private lead data.
- Admin route does not expose sensitive data publicly.
- README explains how to run schema.


---

# 08_STRIPE_CHECKOUT_AND_PAYMENTS.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Make Stripe Checkout work for gift cards, deposits, memberships, and approved products.

## Tasks

1. Review `/api/checkout/route.ts`.
2. Use Stripe Checkout Sessions.
3. Support modes:
   - payment for one-time gift cards/products/deposits
   - subscription for memberships if Stripe price is recurring
4. Add safe line items based on product/service data.
5. Do not allow consult-required medical prescriptions to be purchased directly.
6. Add metadata:
   - itemSlug
   - itemType
   - customerName if available
7. Add success and cancel URLs.
8. Add webhook route if time allows:
   - checkout.session.completed
   - payment_intent.succeeded
9. Add `.env.example` notes.

## Acceptance criteria

- Test mode Checkout opens successfully.
- Gift cards can be purchased.
- Deposit item can be purchased.
- Membership subscription can be created if recurring price ID exists.
- Consult-required routes stay consultation-first.


---

# 09_ANIMATION_AND_3D_LUXURY.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Add luxury motion and optional 3D without hurting performance.

## Tasks

1. Use Motion React for subtle page reveals, hover transitions, and section entrance animations.
2. Add a reusable `LuxuryReveal` or improve existing `Reveal`.
3. Add a hero logo reveal animation.
4. Add soft parallax to hero and image cards.
5. Add a slow floating symbol watermark using `aeterna-symbol.png`.
6. Add service card hover animations:
   - lift
   - subtle border glow
   - image zoom
   - CTA reveal
7. Optional: add Spline embed slot controlled by env/config, but do not make page depend on it.
8. Honor `prefers-reduced-motion`.

## Acceptance criteria

- Animations are smooth and calm.
- No flashy, gaming-style movement.
- Site remains fast.
- Reduced-motion users still get a clean experience.


---

# 10_SEO_LOCAL_SEARCH_AND_JOURNAL.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Make the site strong for local search and content marketing.

## Tasks

1. Review metadata in `src/lib/seo.ts` and each page.
2. Confirm `sitemap.ts` and `robots.ts` are valid.
3. Add local SEO copy for Hollywood / South Florida if the owner confirms location.
4. Add schema.org JSON-LD for LocalBusiness / Spa where safe.
5. Add service-specific metadata:
   - Luxury massage
   - Medical weight loss
   - IV therapy
   - Hormone balance
   - Body sculpting
   - Anti-aging care
6. Improve journal posts and add 3 more:
   - How to prepare for your first IV therapy consultation
   - What to expect from a medical weight-loss consultation
   - How to build a monthly wellness ritual
7. Ensure all images have alt text.
8. Add OG image fallback using brand logo.

## Acceptance criteria

- Every public page has title and description.
- Sitemap includes dynamic service/product/journal pages.
- Robots file references the sitemap.
- Journal content sounds premium and not generic.


---

# 11_ACCESSIBILITY_PERFORMANCE_SECURITY.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Make the site polished enough for real launch.

## Tasks

1. Run Lighthouse or equivalent checks.
2. Improve image sizes and `next/image` usage.
3. Confirm keyboard navigation and focus states.
4. Ensure form labels are accessible.
5. Confirm color contrast.
6. Add rate limiting or spam protection notes for forms.
7. Never expose service-role Supabase keys in client code.
8. Validate all API payloads with Zod.
9. Add security headers in `next.config.ts` if appropriate.
10. Confirm no medical private data is logged to console.

## Acceptance criteria

- Strong mobile performance.
- No obvious accessibility blockers.
- API routes validate input.
- No secrets in git.
- Production build passes.


---

# 12_FINAL_QA_DEPLOY.md

# Aeterna Codex Prompt

You are working inside the `aeterna_luxe_wellness_site` Next.js project. Preserve the luxury wellness brand direction: cream/vanilla background, cocoa brown, earth sage, champagne gold, calm motion, editorial spacing, and premium spa energy. Keep medical-wellness copy consult-first and avoid guaranteed health claims.

## Goal

Final QA and Vercel deployment.

## Tasks

1. Run:

```bash
npm run typecheck
npm run build
```

2. Manually test:

```txt
/
/services
/services/aeterna-signature-massage
/medical-wellness
/book
/shop
/gift-cards
/memberships
/the-experience
/wellness-quiz
/about
/contact
/journal
/faq
/policies
```

3. Confirm these forms:

```txt
Contact form
Newsletter form
Booking request form
Stripe Checkout button
```

4. Add production env vars in Vercel.
5. Deploy.
6. Confirm live domain.
7. Submit sitemap in Google Search Console after launch.
8. Add Google Analytics / Meta Pixel only if owner approves.

## Acceptance criteria

- No broken routes.
- No broken images.
- All important buttons work.
- Mobile looks premium.
- Site deploys successfully.
- Owner can review service/pricing details before launch.
