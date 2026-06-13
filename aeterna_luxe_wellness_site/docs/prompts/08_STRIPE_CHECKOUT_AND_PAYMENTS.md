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
