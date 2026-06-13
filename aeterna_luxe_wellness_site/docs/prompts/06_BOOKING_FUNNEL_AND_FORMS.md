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
