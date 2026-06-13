import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/Card";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { Button } from "@/components/Buttons";
import { Accordion } from "@/components/Accordion";
import { byCategory, featured } from "@/data/services";
import { meta } from "@/lib/seo";
import { ServiceQuickStats } from "@/components/ServiceQuickStats";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata = meta({
  title: "Emsculpt Neo",
  description: "Non-invasive Emsculpt Neo body sculpting in Hollywood, Florida — designed to support muscle building and fat reduction in targeted areas. No surgery, no downtime. Results vary.",
  path: "/services/emsculpt-neo"
});

const treatmentAreas = ["Abdomen", "Arms", "Legs", "Buttocks", "Thighs", "Calves"];

const benefits = [
  { title: "Non-Invasive", body: "Emsculpt Neo is designed to support muscle building and fat reduction without surgery, injections, or significant downtime." },
  { title: "Dual Technology", body: "Emsculpt Neo combines HIFEM and radiofrequency energy to simultaneously target muscle tone and fat in the same session." },
  { title: "30-Minute Sessions", body: "Each treatment session is approximately 30 minutes, making it easy to fit into a busy schedule." },
  { title: "Multiple Areas", body: "Treatment can be applied to the abdomen, arms, legs, and buttocks based on your goals and consultation plan." }
];

const packages = [
  { title: "Single Session", price: "From $750", time: "30 min", note: "Ideal for first-timers exploring body sculpting." },
  { title: "4-Session Package", price: "From $2,800", time: "4 × 30 min", note: "Recommended series for best sculpting results.", recommended: true },
  { title: "Emsculpt Classic", price: "From $600", time: "30 min", note: "Classic body contouring for targeted muscle goals." }
];

const faqs = [
  { q: "How many sessions do I need?", a: "A series of 4 sessions is typically recommended for optimal results. Single sessions are available; however, most clients see their best outcomes through a complete treatment plan designed during consultation." },
  { q: "Is there downtime after Emsculpt Neo?", a: "No. Emsculpt Neo is non-invasive with no required recovery time. Most clients return to normal activities immediately after treatment." },
  { q: "What areas can be treated?", a: "Emsculpt Neo can be applied to the abdomen, arms, legs, and buttocks. Your provider will recommend the most appropriate treatment areas based on your goals and eligibility during consultation." },
  { q: "When will I see results?", a: "Results vary by individual. Some clients notice changes after the first few sessions; full results typically develop over several weeks following the final treatment. Results are not guaranteed." }
];

export default function EmsculptNeoPage() {
  const services = byCategory("Body Sculpting");
  const related = featured.filter(s => ["Skin Tightening & Cellulite", "Pelvic Floor Wellness", "Anti-Aging & Longevity"].includes(s.category)).slice(0, 3);

  return <>
    <PageHero
      eyebrow="Emsculpt Neo"
      title="Non-invasive muscle and fat technology."
      copy="Emsculpt Neo is designed to support muscle building and fat reduction in targeted body areas — without surgery, without needles, and without downtime. Consultation required. Results vary."
      image="/assets/photos/aeterna-treatment-room.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Sessions", value: "4 recommended" },
      { label: "Time", value: "30 min" },
      { label: "Downtime", value: "None", highlight: true },
      { label: "From", value: "$750/session" }
    ]} />

    {/* Treatment areas */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Treatment Areas</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">Targeted where it matters.</h2>
            <p className="mt-6 text-base leading-8 text-cocoa/70">Emsculpt Neo is designed for targeted body areas. Your provider will confirm appropriate treatment zones based on your goals and clinical evaluation during consultation.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {treatmentAreas.map(area => (
                <span key={area} className="rounded-full border border-champagne/30 bg-cream/80 px-5 py-2.5 text-sm font-medium text-cocoa/75 shadow-inset">{area}</span>
              ))}
            </div>
          </div>
          <RevealStagger className="grid gap-4">
            {benefits.map(b => (
              <RevealItem key={b.title}>
                <div className="rounded-4xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-5 shadow-soft">
                  <p className="font-semibold text-espresso">{b.title}</p>
                  <p className="mt-2 text-sm leading-6 text-cocoa/70">{b.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </Reveal>

    {/* Packages */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Pricing & Packages</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Choose your plan.</h2>
        <RevealStagger className="mt-10 grid gap-5 md:grid-cols-3">
          {packages.map(pkg => (
            <RevealItem key={pkg.title}>
              <div className={`relative rounded-5xl border p-6 shadow-soft ${pkg.recommended ? "border-sage bg-gradient-to-b from-sage/10 to-olive/5" : "border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75"}`}>
                {pkg.recommended && <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-sage">Recommended</p>}
                <p className="font-display text-2xl text-espresso">{pkg.title}</p>
                <p className="mt-1 text-2xl font-semibold text-espresso">{pkg.price}</p>
                <p className="mt-1 text-xs uppercase tracking-[.14em] text-cocoa/50">{pkg.time}</p>
                <p className="mt-3 text-sm leading-6 text-cocoa/70">{pkg.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <div className="mt-10 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Book Body Sculpting</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">All Emsculpt options.</h2>
        </div>
        <RevealStagger className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
        </RevealStagger>
      </div>
    </section>

    {/* FAQ */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Questions & Answers</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Frequently asked.</h2>
        <div className="mt-8"><Accordion items={faqs}/></div>
      </div>
    </Reveal>

    {/* Disclaimer + CTA */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <MedicalDisclaimer/>
        <div className="mt-10 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Begin Your Body Sculpting Journey</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Start with a free consultation.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Your provider will review your goals, confirm eligible treatment areas, and design a package plan. No commitment required at consultation.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Free Consultation</Button>
            <Button href="/book" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10">Request Appointment</Button>
          </div>
        </div>
      </div>
    </section>

    {related.length > 0 && (
      <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 border-b border-champagne/30 pb-6">
            <p className="text-xs uppercase tracking-luxury text-sage">Continue Exploring</p>
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Related treatments.</h2>
          </div>
          <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
          </RevealStagger>
        </div>
      </section>
    )}
    <div className="h-24 md:hidden" aria-hidden="true" />
    <StickyMobileCTA href="/consultation" label="Book Free Consultation" subtext="Consultation Required" />
  </>;
}
