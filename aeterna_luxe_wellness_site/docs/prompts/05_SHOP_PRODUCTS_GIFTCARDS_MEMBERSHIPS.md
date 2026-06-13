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
