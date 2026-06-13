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
  title: "Exilis Ultra — Anti-Aging & Longevity",
  description: "Exilis Ultra radiofrequency skin tightening and body contouring in Hollywood, Florida. Face, neck, and body options. Non-invasive. Consultation required. Results vary.",
  path: "/services/exilis-ultra"
});

const treatmentAreas = ["Face", "Neck", "Décolleté", "Arms", "Abdomen", "Thighs", "Knees"];

const benefits = [
  { title: "Radiofrequency Technology", body: "Exilis Ultra uses controlled radiofrequency energy to heat the deeper layers of skin, designed to support collagen production and tissue tightening." },
  { title: "Face, Neck & Body", body: "Treatment areas include the face, neck, décolleté, and various body areas — all customized based on your consultation goals." },
  { title: "No Surgery", body: "Exilis Ultra is a non-invasive treatment. No incisions, no general anesthesia, and minimal to no downtime." },
  { title: "Collagen Support", body: "The thermal energy delivered by Exilis Ultra is designed to stimulate natural collagen production for gradual, progressive skin improvement." }
];

const packages = [
  { title: "Face & Neck — Single", price: "From $350", time: "30–45 min", note: "Targeted RF for facial tightening and refinement." },
  { title: "Body — Single", price: "From $500", time: "30–60 min", note: "RF body contouring for targeted skin tightening." },
  { title: "4-Session Package", price: "From $1,600", time: "4 sessions", note: "Best for structured anti-aging goals.", recommended: true }
];

const faqs = [
  { q: "What is radiofrequency and how does Exilis Ultra use it?", a: "Radiofrequency (RF) energy heats the deeper layers of the skin to stimulate collagen production and support tissue tightening. Exilis Ultra uses controlled, focused RF energy to target specific areas with precision and comfort." },
  { q: "Is Exilis Ultra safe for facial treatment?", a: "Yes. Exilis Ultra has specific treatment applicators designed for safe facial use. Your provider will confirm appropriate settings, treatment areas, and depth during your consultation." },
  { q: "How many sessions are recommended?", a: "Results vary, but most clients benefit most from a series of 4 sessions. Individual response, goals, and targeted areas will determine the right plan for you. Your provider will design a personalized protocol." },
  { q: "Is there downtime after Exilis Ultra?", a: "There is minimal to no downtime with Exilis Ultra. Some clients may experience mild redness or warmth in the treated area immediately following treatment, which typically resolves within a few hours." }
];

export default function ExilisUltraPage() {
  const services = byCategory("Anti-Aging & Longevity");
  const related = featured.filter(s => ["Skin Tightening & Cellulite", "Body Sculpting", "Pelvic Floor Wellness"].includes(s.category)).slice(0, 3);

  return <>
    <PageHero
      eyebrow="Exilis Ultra"
      title="Radiofrequency skin tightening without surgery."
      copy="Exilis Ultra is a non-invasive radiofrequency treatment designed to support skin tightening, collagen stimulation, and body contouring on the face, neck, and body — with no surgery and minimal downtime. Results vary."
      image="/assets/photos/aeterna-interior-wide.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Sessions", value: "4 recommended" },
      { label: "Areas", value: "Face, Neck & Body" },
      { label: "Downtime", value: "Minimal", highlight: true },
      { label: "From", value: "$350" }
    ]} />

    {/* Treatment areas + benefits */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Treatment Areas</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso">Face, neck, and beyond.</h2>
            <p className="mt-6 text-base leading-8 text-cocoa/70">Exilis Ultra can be applied to a range of treatment areas. Your provider will confirm the most appropriate zones based on your goals and clinical evaluation during consultation.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {treatmentAreas.map(area => (
                <span key={area} className="rounded-full border border-champagne/30 bg-cream/80 px-5 py-2.5 text-sm font-medium text-cocoa/75 shadow-inset">{area}</span>
              ))}
            </div>
            <div className="mt-8">
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
          <p className="text-xs uppercase tracking-luxury text-sage">Book Exilis Ultra</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">All Exilis Ultra and longevity options.</h2>
        </div>
        <RevealStagger className="grid gap-6 md:grid-cols-2">
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
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Begin Your Anti-Aging Journey</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Consultation first. Refinement guided.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Your consultation confirms eligible treatment areas, package options, and what to realistically expect. Results vary. Contraindications may apply.</p>
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
    <StickyMobileCTA href="/consultation" label="Book Consultation" subtext="Consultation Required" />
  </>;
}
