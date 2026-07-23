import { CalendarCheck, HeartPulse, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/Buttons";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { WeightLossResults } from "@/components/WeightLossResults";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Weight Loss Results",
  description: "Explore real Aeterna client weight-loss transformations and learn about personalized, provider-guided weight-loss support in Hollywood, Florida. Individual results vary.",
  path: "/weight-loss",
  image: "/assets/photos/weightloss-woman-after.jpeg",
});

const support = [
  {
    title: "Personalized planning",
    body: "Your goals, health history, and clinical eligibility shape the plan. There is no one-size-fits-all protocol.",
    icon: SlidersHorizontal,
  },
  {
    title: "Provider-guided care",
    body: "Prescription pathways, including GLP-1 options, are considered only when clinically appropriate after a private consultation.",
    icon: HeartPulse,
  },
  {
    title: "Ongoing check-ins",
    body: "Regular follow-ups give your provider an opportunity to review progress, answer questions, and adjust your plan when appropriate.",
    icon: CalendarCheck,
  },
];

export default function WeightLossPage() {
  return (
    <>
      <PageHero
        eyebrow="Weight Loss at Aeterna"
        title="Real progress. A plan built around you."
        copy="Explore client transformations, then learn how Aeterna approaches weight loss with private consultations, personalized planning, and ongoing provider support."
        image="/assets/photos/weightloss-woman-after.jpeg"
      />

      <WeightLossResults />

      <section className="bg-cream px-6 py-16 md:px-8 lg:py-24" aria-labelledby="support-title">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Beyond the Before &amp; After</p>
            <h2 id="support-title" className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">
              The support behind the journey.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/70">
              Meaningful change is personal. Aeterna begins with a conversation and builds a care path around the individual—not the photograph.
            </p>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
            {support.map(({ title, body, icon: Icon }) => (
              <RevealItem key={title}>
                <article className="h-full rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-7 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sage/20 bg-sage/10 text-emerald">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-3xl text-espresso">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cocoa/70">{body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-5xl border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:flex md:items-center md:justify-between md:gap-10 md:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Your Next Step</p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Begin with a private consultation.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-cream/70">Meet with a provider to discuss your goals, review available pathways, and decide whether an Aeterna program is right for you.</p>
              </div>
              <div className="mt-7 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0 md:flex-col">
                <Button href="/consultation" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Free Consultation</Button>
                <Button href="/services/medical-weight-loss" variant="ghost" className="border-cream/15 text-cream hover:bg-cream/10">View Program Details</Button>
              </div>
            </div>
          </Reveal>

          <MedicalDisclaimer className="mx-auto mt-8 max-w-4xl" compact />
        </div>
      </section>
    </>
  );
}
