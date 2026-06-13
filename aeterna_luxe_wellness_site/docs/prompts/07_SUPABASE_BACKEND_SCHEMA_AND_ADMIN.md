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
