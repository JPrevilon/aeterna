import { BookingBuilder } from "@/components/BookingBuilder";
import { PageHero } from "@/components/PageHero";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Consultation",
  description: "Begin with an Aeterna consultation for provider-guided medical wellness, spa planning, body sculpting, IV therapy, hormone wellness, or weight-loss support.",
  path: "/consultation"
});

const steps = [
  ["Share", "Tell Aeterna what you are seeking: relaxation, skin care, energy support, weight-loss support, hormone wellness, body sculpting, or longevity planning."],
  ["Review", "Medical wellness requests are reviewed through intake and provider-guided protocols when clinically appropriate."],
  ["Plan", "Leave with a recommended next step, whether that is a spa ritual, a consultation-required wellness service, or a longer-term care plan."]
] as const;

export default function ConsultationPage() {
  return <>
    <PageHero
      eyebrow="Consultation"
      title="Begin with a private wellness conversation."
      copy="Aeterna consultations help match your goals to spa rituals or provider-guided medical wellness options. Consultation required for GLP-1, hormone therapy, IV therapy, injections, and body sculpting. Results vary."
      image="/assets/photos/aeterna-storefront-door.jpeg"
    />
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {steps.map(([title,copy], index) => <div key={title} className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-champagne/40 hover:shadow-luxury md:p-7">
          <p className="text-xs uppercase tracking-luxury text-sage">Consult</p>
          <div className="mt-4 flex items-end justify-between gap-4 border-t border-champagne/30 pt-5">
            <h2 className="font-display text-4xl text-espresso">{title}</h2>
            <span className="font-display text-5xl leading-none text-sage/35">0{index + 1}</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-cocoa/70">{copy}</p>
        </div>)}
      </div>
    </section>
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <BookingBuilder intent="consultation" />
      </div>
    </section>
  </>
}
