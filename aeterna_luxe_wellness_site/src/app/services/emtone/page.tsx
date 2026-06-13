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
  title: "Emtone — Skin Tightening & Cellulite",
  description: "Emtone non-invasive skin tightening and cellulite reduction in Hollywood, Florida. Single sessions and packages. Consultation required. Results vary.",
  path: "/services/emtone"
});

const treatmentAreas = ["Thighs", "Buttocks", "Abdomen", "Arms", "Love Handles"];

const benefits = [
  { title: "Dual-Energy Technology", body: "Emtone combines thermal and mechanical energy to simultaneously address skin laxity and cellulite in targeted areas." },
  { title: "No Downtime", body: "Sessions are non-invasive with no recovery time required. Most clients return to their day immediately after treatment." },
  { title: "Comfortable Experience", body: "Most clients describe the sensation as warm with a gentle massage-like feel. No anesthesia is required." },
  { title: "Package-Friendly", body: "Single sessions and 4 or 6-session packages are available to match your goals and commitment level." }
];

const packages = [
  { title: "Single Session", price: "From $399", time: "20–30 min/session", note: "Great for exploring treatment." },
  { title: "4-Session Package", price: "From $1,400", time: "4 sessions", note: "Recommended for most clients.", recommended: true },
  { title: "6-Session Package", price: "From $1,950", time: "6 sessions", note: "Best value for advanced goals." }
];

const faqs = [
  { q: "How many Emtone sessions are recommended?", a: "Most clients benefit most from a series of 4–6 sessions. Individual response varies. Your provider will design a treatment plan based on your goals and the specific treatment areas." },
  { q: "What does Emtone feel like?", a: "Most clients describe Emtone as a warm, comfortable sensation with a gentle massage-like quality. No anesthesia or numbing is required and there is no downtime." },
  { q: "Which areas can Emtone treat?", a: "Emtone can be applied to the thighs, buttocks, abdomen, and arms. Your provider will confirm appropriate areas during your consultation." },
  { q: "When will I see results?", a: "Results vary by individual and are typically visible after a series of treatments. Some clients notice improvement during their treatment course; full results typically develop over several weeks after the final session. Results are not guaranteed." }
];

export default function EmtonePage() {
  const services = byCategory("Skin Tightening & Cellulite");
  const related = featured.filter(s => ["Body Sculpting", "Anti-Aging & Longevity", "Pelvic Floor Wellness"].includes(s.category)).slice(0, 3);

  return <>
    <PageHero
      eyebrow="Emtone"
      title="Smoother, tighter-looking skin — designed for real life."
      copy="Emtone is a non-invasive treatment designed to support smoother-looking skin, tighter tone, and reduced cellulite appearance — without surgery, anesthesia, or downtime. Consultation required. Results vary."
      image="/assets/photos/aeterna-treatment-room.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Sessions", value: "4–6 recommended" },
      { label: "Time", value: "20–30 min" },
      { label: "Downtime", value: "None", highlight: true },
      { label: "From", value: "$399/session" }
    ]} />

    {/* Treatment areas + benefits */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Treatment Areas</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso">Targeted where you want it.</h2>
            <p className="mt-6 text-base leading-8 text-cocoa/70">Emtone is designed for targeted body areas where cellulite and skin laxity are most noticeable. Your provider will confirm appropriate areas during consultation.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {treatmentAreas.map(area => (
                <span key={area} className="rounded-full border border-champagne/30 bg-cream/80 px-5 py-2.5 text-sm font-medium text-cocoa/75 shadow-inset">{area}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation">Book Consultation</Button>
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

    {/* Packages + services */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Pricing & Packages</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Choose your plan.</h2>
        <RevealStagger className="mt-10 grid gap-5 md:grid-cols-3">
          {packages.map(pkg => (
            <RevealItem key={pkg.title}>
              <div className={`rounded-5xl border p-6 shadow-soft ${pkg.recommended ? "border-sage bg-gradient-to-b from-sage/10 to-olive/5" : "border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75"}`}>
                {pkg.recommended && <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-sage">Recommended</p>}
                <p className="font-display text-2xl text-espresso">{pkg.title}</p>
                <p className="mt-1 text-2xl font-semibold text-espresso">{pkg.price}</p>
                <p className="mt-1 text-xs uppercase tracking-[.14em] text-cocoa/50">{pkg.time}</p>
                <p className="mt-3 text-sm leading-6 text-cocoa/70">{pkg.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <div className="mb-8 mt-12 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Book Emtone</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">All Emtone options.</h2>
        </div>
        <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Begin Your Emtone Journey</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Consultation first. Results guided.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Your consultation confirms eligibility, treatment areas, and the right package for your goals. Results vary. Contraindications may apply.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Consultation</Button>
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
