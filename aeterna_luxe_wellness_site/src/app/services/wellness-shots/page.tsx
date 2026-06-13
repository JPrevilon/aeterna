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
  title: "Wellness Shots",
  description: "Quick injectable wellness support in Hollywood, Florida — B12, B-Complex, Lipo-C, Glutathione, Amino Acid, and Vitamin D3 shots for energy, recovery, and metabolic support.",
  path: "/services/wellness-shots"
});

const shotHighlights = [
  { label: "B12", price: "$35", summary: "Energy, focus, and general wellness support." },
  { label: "B-Complex", price: "$45", summary: "Vitamin support for energy and metabolism." },
  { label: "Lipo-C", price: "$55", summary: "Metabolic support — popular weight-loss pairing." },
  { label: "Amino Acid", price: "$55", summary: "Recovery and active lifestyle support." },
  { label: "Glutathione", price: "$65", summary: "Antioxidant and beauty wellness support." },
  { label: "Vitamin D3", price: "$55", summary: "Vitamin D level and wellness support." }
];

const bestFor = ["Energy support", "Quick wellness boost", "Program add-ons", "Recovery", "Weight-loss pairings", "Active lifestyles"];

const faqs = [
  { q: "Do I need an appointment or consultation?", a: "Most wellness shots are available as walk-in or quick-appointment visits. Some protocols may require a brief provider review depending on your health history and individual factors." },
  { q: "How quickly do injectable shots work?", a: "Injectable support is generally fast-acting since it bypasses the digestive system. Individual responses vary. Shots are not a substitute for a balanced diet or medical treatment." },
  { q: "Can I combine multiple shots in one visit?", a: "Some shots pair well together. Your provider can guide you on appropriate combinations based on your wellness goals during your visit." },
  { q: "How often should I receive wellness shots?", a: "Frequency depends on your goals and the specific shot type. Your provider can recommend an appropriate schedule based on your wellness routine and history." }
];

export default function WellnessShotsPage() {
  const services = byCategory("Wellness Shots");
  const related = featured.filter(s => s.category !== "Wellness Shots").slice(0, 3);

  return <>
    <PageHero
      eyebrow="Wellness Shots"
      title="Quick, targeted injectable wellness support."
      copy="Fast, focused injectable options for energy, recovery, metabolism, and beauty wellness — available as quick visits or added to any Aeterna program. No long appointment needed."
      image="/assets/photos/aeterna-treatment-room.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Time", value: "~10 minutes" },
      { label: "Consult", value: "Not required", highlight: true },
      { label: "Frequency", value: "Weekly or as needed" },
      { label: "From", value: "$35" }
    ]} />

    {/* Shot reference */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Quick Reference</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">All available shots.</h2>
        <RevealStagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shotHighlights.map(shot => (
            <RevealItem key={shot.label}>
              <div className="flex items-start gap-5 rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/30 bg-cream shadow-inset">
                  <span className="text-xs font-bold uppercase tracking-wider text-sage">{shot.label[0]}</span>
                </div>
                <div>
                  <p className="font-display text-2xl text-espresso">{shot.label} Shot</p>
                  <p className="mt-1 text-sm font-semibold text-sage">{shot.price}</p>
                  <p className="mt-2 text-sm leading-6 text-cocoa/70">{shot.summary}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-8">
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-luxury text-sage">Best For</p>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-champagne/25 pt-4">
              {bestFor.map(tag => (
                <span key={tag} className="rounded-full border border-cocoa/10 bg-cream/85 px-4 py-2 text-sm text-cocoa/75 shadow-inset">{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Reveal>

    {/* Service cards */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Book a Shot</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">All wellness shots.</h2>
          <p className="mt-3 max-w-2xl text-cocoa/70">10-minute visits. No major commitment. Add to any program or book as a standalone wellness visit.</p>
        </div>
        <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
        </RevealStagger>
      </div>
    </section>

    {/* FAQ */}
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Questions & Answers</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Frequently asked.</h2>
        <div className="mt-8"><Accordion items={faqs}/></div>
      </div>
    </section>

    {/* Disclaimer + CTA */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <MedicalDisclaimer/>
        <div className="mt-10 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Book Your Shot</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">A quick visit. A real wellness boost.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Most wellness shots require no prior consultation. Book a quick visit or add a shot to any Aeterna appointment.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Now</Button>
            <Button href="/consultation" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10">Start Consultation</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Related */}
    {related.length > 0 && (
      <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 border-b border-champagne/30 pb-6">
            <p className="text-xs uppercase tracking-luxury text-sage">Continue Exploring</p>
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Pairs well with.</h2>
          </div>
          <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
          </RevealStagger>
        </div>
      </section>
    )}
    <div className="h-24 md:hidden" aria-hidden="true" />
    <StickyMobileCTA href="/book" label="Book a Wellness Shot" />
  </>;
}
