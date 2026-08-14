# Aeterna 2.0 — Luxe Wellness & Beauty

Static implementation of **`Aeterna 2.0 Site.dc.html`** from the Claude Design project
[Aeterna 2.0 Luxury Redesign](https://claude.ai/design/p/89b4c0c8-8c03-411a-adcb-56878f0ccc90).

No build step, no dependencies. Plain HTML, CSS and JavaScript.

## Running it

It needs to be served over HTTP (the tour prefetches its clips with `fetch`, which
`file://` blocks):

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Layout

```
index.html              markup for every section
assets/css/styles.css   design tokens + all styling
assets/js/main.js       tour scrubbing, nav, reveals, tabs, carousel, sliders
assets/brand/           the Aeterna symbol
assets/scenes/          room stills
assets/tour/            six tour clips
assets/treatments/      category stills
assets/photos/          client photography + before/after
```

## Sections

| Section | Behaviour |
| --- | --- |
| Tour | 560vh scroll track with a pinned stage. Scroll position scrubs six clips across seven chapters; captions, the chapter rail, and the opening/closing cards are driven off the same eased progress value. Clips are prefetched one at a time and swapped to fully-buffered blobs so seeking never stalls. |
| Our Story | Split image / copy, oversized symbol watermark, fade-up on entry. |
| Treatments | Nine categories, 32 items. Tabs swap the price panel and crossfade the category still. Footer treatment links open the matching category. |
| Results | Auto-advancing testimonial carousel (pauses on hover and focus) plus drag-to-compare before/after sliders. |
| Booking | CTA over imagery, leading into Contact. |
| Contact | Practice details plus an enquiry form (name, email, phone, treatment interest, message, list opt-in). |
| Footer | Address, phone, email, treatment nav, social links, mailing-list field. |

## Where the assets came from

- **Treatment stills and client photography** come from the project repo,
  [JPrevilon/aeterna](https://github.com/JPrevilon/aeterna)
  (`aeterna_luxe_wellness_site/public/assets/`). The six treatment tiles were
  re-encoded from 900x900 PNG to JPEG (~880 KB → ~85 KB each) and the two largest
  client photos were resized to 1800px on the long edge.
- **Room stills and tour clips** came from the CDN the design references for its
  video (`d8j0ntlcm91z4.cloudfront.net`); the design project's own copies exceed the
  design API's 256 KiB per-file read limit. The stills were converted from PNG to
  JPEG (quality 82), taking the seven of them from ~11 MB to ~1.5 MB.
- **The brand symbol** (`assets/brand/aeterna-symbol.png`) is the repo's
  `assets/logos/aeterna-symbol.png` — the two figures and olive tree. The original is
  brown linework on opaque cream, which cannot sit over the tour footage or the green
  footer, so the cream is keyed out to alpha (anti-aliasing preserved) and the artwork
  trimmed to its bounding box. It is recoloured in CSS with
  `filter: brightness(0) invert(1)` wherever it needs to read as cream.
- **Three of the design's stills** are edited variants (`…-c21eed7f`, `…-b933cff5`,
  `…-4474c7e0`) not present on that CDN. The unedited originals are used instead; they
  differ only in crop/retouch.

## Services and pricing

The menu is the 32 services in the repo's `src/data/services.ts`, across its nine
`categories` in that file's order — titles, price labels and durations match it exactly.
Note that `docs/content/SERVICE_MENU.md` in the same repo is a **different, older draft**
(massage/facial/body rituals, ranged prices, and its own note that pricing is unapproved).
`services.ts` was used because it is what the design was built from and what the app renders.

Two judgement calls worth reviewing:

- **The ℞ badge** marks the 10 items that involve a prescription or medication
  (GLP-1 programs, NAD+, TRT, hormone support). `services.ts` sets `consultRequired: true`
  on 25 items, but that flag also covers device treatments like Emsculpt and Emsella,
  where a prescription symbol would over-claim. Widen it if you want ℞ to mean
  "consultation required" instead.
- **Testimonials have no source.** The three quotes in the Results carousel, and the
  names and weight figures attached to them, were authored in the design — there is no
  testimonial data anywhere in the repo. `docs/content/LEGAL_COPY_RULES.md` warns against
  unsubstantiated outcome claims, so replace these with real, documented reviews before
  launch.

The four before/after photos are **cropped to 4:7 around each subject**, and the frame
uses that same ratio, so `object-fit: cover` never crops further. The originals vary from
0.46 to 0.71 in aspect: in a 3:4 frame the woman's seated "before" filled with the empty
wall above her and showed little more than her head. Crops are derived from the repo
originals, not from an already-processed copy.

The before/after captions **were** corrected: the design labelled them
"Maria — 27 lbs · 4 months" and "Daniel — 52 lbs · 9 months", but the repo's
`WeightLossResults.tsx` names these same photos only "Women's transformation" and
"Men's transformation", with no figures. The repo wording and its disclaimer are used here.

## Contact details and forms

Address and phone came from the owner directly; the rest from the repo's
`src/lib/constants.ts`:

| | |
| --- | --- |
| Address | 2132 Hollywood Blvd, Hollywood, FL 33020 |
| Phone | (305) 206-2630 |
| Email | Aeternawellnesshollywood@gmail.com |
| Social | [Instagram](https://instagram.com/AeternaHollywood), [TikTok](https://www.tiktok.com/@AeternaWellness), [YouTube](https://www.youtube.com/@AeternaWellness) |

Two things to confirm:

- **The phone number differs from the repo.** `constants.ts` has `954-232-7238`;
  the owner sent `305-206-2630`, which is what the site uses. Confirm which is the
  public business line, and update `constants.ts` if the 954 number is stale.
- **The ZIP implies the city/state.** She sent "2132 Hollywood Blvd 33020"; 33020 is
  Hollywood, FL, which matches `constants.ts` (`location: "Hollywood, Florida"`), so
  the address is written out in full. There is no suite number — add one if needed.

Both forms post JSON to the routes that already exist in the repo, using exactly the
field names their validators expect:

| Form | Endpoint | Payload |
| --- | --- | --- |
| Contact | `POST /api/contact` | `{name, email, phone?, interest?, message}` (`leadSchema`) |
| List opt-in and footer sign-up | `POST /api/newsletter` | `{email, name?}` (`newsletterSchema`) |

Because this is a static site, those endpoints are only reachable when it is served
from the same origin as the Next.js app. If it is hosted separately, set `API_BASE` at
the top of `assets/js/main.js` to the app's origin (and allow that origin in CORS).
Until an endpoint answers, the form validates, then shows a fallback message pointing
people at the phone number and email. Contact submissions land in the `leads` table and
send mail via Resend; sign-ups upsert into `newsletter_subscribers` — all configured on
the app side, not here.

A `HealthAndBeautyBusiness` JSON-LD block in `index.html` carries the same address,
phone, hours and social profiles for local search.

## Still to fill in

- Booking links (`#book`) — point at the real booking system. The final CTA currently
  routes to the contact form.
- Privacy and Terms links.
- Suite number, if the address has one.

## Notes on the conversion

The source is a Claude Design `.dc.html` — a React-runtime template using `<x-dc>`,
`sc-for`/`sc-if`, `ref="{{ }}"` bindings and inline styles. That was converted to
static markup plus a stylesheet. Deliberate departures from a literal port:

- **The treatment menu is real markup**, not JS-rendered. All nine panels are in the
  DOM (eight `hidden`), so the pricing is present without JavaScript and indexable.
- **Tabs, carousel arrows and rail markers are `<button>`s** with `role="tab"` /
  `aria-selected` and arrow-key support, rather than `div`s with click handlers.
- **The before/after slider clips from the right** (`clip-path: inset(…)`) instead of
  narrowing the overlay box. In the original, constraining the box also constrained the
  image inside it, so the two photos drifted out of register as the handle moved.
- **Rail visibility is a media query**, not a JS width check.
- `prefers-reduced-motion` disables the carousel autoplay, reveal animations and
  scroll smoothing.
