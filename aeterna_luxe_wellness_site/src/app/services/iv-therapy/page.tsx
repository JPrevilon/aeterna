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
  title: "IV Therapy",
  description: "Provider-guided IV therapy in Hollywood, Florida — hydration, vitamin support, immune wellness, and NAD+ IV options for recovery, energy, and longevity. Results vary.",
  path: "/services/iv-therapy"
});

const ivOptions = [
  { title: "Hydration Boost IV + B12", price: "From $159", time: "45–60 min", desc: "Great entry IV for hydration, recovery, and B12 support." },
  { title: "Immune Support IV", price: "From $189", time: "45–60 min", desc: "Vitamin-rich blend designed for immune wellness and seasonal recovery." },
  { title: "Performance & Recovery IV", price: "From $219", time: "45–60 min", desc: "Designed for active lifestyles, travel recovery, and fatigue support." },
  { title: "Energy Support + NAD IV", price: "From $299", time: "60–90 min", desc: "Premium NAD+ IV for energy, longevity, and recovery. Consultation required." }
];

const benefits = [
  { title: "Direct Delivery", body: "IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system for efficient absorption." },
  { title: "Relaxing Experience", body: "Each IV session is administered in a private, comfortable treatment room at a calm, unhurried pace." },
  { title: "Range of Formulas", body: "From entry hydration to premium NAD+ options — choose the protocol that fits your wellness goals." },
  { title: "Provider-Guided", body: "All IV protocols are reviewed through intake before treatment. NAD+ IV requires prior consultation." }
];

const faqs = [
  { q: "How long does an IV session take?", a: "Most IV therapy sessions take 45–60 minutes depending on the formula. The Energy Support + NAD IV option may take 60–90 minutes due to the complexity of the protocol." },
  { q: "Do I need a consultation before IV therapy?", a: "Most IV options are available after a brief intake review. The NAD+ IV option requires a prior consultation. Your intake will confirm the right protocol for you." },
  { q: "What should I expect during an IV session?", a: "You'll relax in a comfortable private treatment room while your IV is administered. Most clients find IV sessions calm and restorative. Mild discomfort at the IV site is occasionally reported." },
  { q: "Are there any contraindications?", a: "Yes. Certain health conditions, medications, or allergies may make some IV formulations inappropriate. Your intake screening will identify any contraindications before any IV is administered." }
];

export default function IvTherapyPage() {
  const services = byCategory("IV Therapy");
  const related = featured.filter(s => s.category !== "IV Therapy").slice(0, 3);

  return <>
    <PageHero
      eyebrow="IV Therapy"
      title="Restore, recover, and recharge."
      copy="Provider-guided IV therapy designed to support hydration, recovery, immune wellness, and longevity. Choose from entry hydration drips to premium NAD+ protocols in Aeterna's private treatment rooms."
      image="/assets/photos/aeterna-treatment-room.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Duration", value: "45–60 min" },
      { label: "Consult", value: "Most not required", highlight: true },
      { label: "Sessions", value: "Single or series" },
      { label: "From", value: "$159" }
    ]} />

    {/* Options overview */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxury text-sage">IV Menu</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Four protocols. One treatment room.</h2>
        <RevealStagger className="mt-10 grid gap-5 md:grid-cols-2">
          {ivOptions.map(opt => (
            <RevealItem key={opt.title}>
              <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-2xl leading-tight text-espresso">{opt.title}</p>
                  <span className="rounded-full border border-champagne/30 bg-cream/80 px-4 py-1.5 text-xs font-semibold text-sage shadow-inset whitespace-nowrap">{opt.price}</span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[.14em] text-cocoa/50">{opt.time}</p>
                <p className="mt-3 text-sm leading-7 text-cocoa/70">{opt.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </Reveal>

    {/* Benefits */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Why IV Therapy</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">The Aeterna IV experience.</h2>
        <RevealStagger className="mt-10 grid gap-5 md:grid-cols-2">
          {benefits.map(b => (
            <RevealItem key={b.title}>
              <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
                <p className="font-display text-2xl text-espresso">{b.title}</p>
                <p className="mt-3 text-sm leading-7 text-cocoa/70">{b.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>

    {/* Service cards */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Book IV Therapy</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Choose your IV.</h2>
        </div>
        <RevealStagger className="grid gap-6 md:grid-cols-2">
          {services.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
        </RevealStagger>
      </div>
    </Reveal>

    {/* FAQ */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Questions & Answers</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Frequently asked.</h2>
        <div className="mt-8"><Accordion items={faqs}/></div>
      </div>
    </section>

    {/* Disclaimer + CTA */}
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <MedicalDisclaimer/>
        <div className="mt-10 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Reserve Your IV</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Arrive. Relax. Recharge.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Most IV sessions begin with a brief intake. Book your preferred IV or start with a consultation for NAD+ and premium protocols.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book" variant="outline" className="border-cream/20 bg-cream text-espresso">Book IV Therapy</Button>
            <Button href="/consultation" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10">Start Consultation</Button>
          </div>
        </div>
      </div>
    </section>

    {related.length > 0 && (
      <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 border-b border-champagne/30 pb-6">
            <p className="text-xs uppercase tracking-luxury text-sage">Continue Exploring</p>
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Related services.</h2>
          </div>
          <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
          </RevealStagger>
        </div>
      </section>
    )}
    <div className="h-24 md:hidden" aria-hidden="true" />
    <StickyMobileCTA href="/book" label="Book IV Therapy" />
  </>;
}
