import Image from "next/image";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { Button } from "@/components/Buttons";

const transformations = [
  {
    name: "Men's transformation",
    before: "/assets/photos/weightloss-man-before.jpeg",
    after: "/assets/photos/weightloss-man-after.jpeg",
  },
  {
    name: "Women's transformation",
    before: "/assets/photos/weightloss-woman-before.jpeg",
    after: "/assets/photos/weightloss-woman-after.jpeg",
  },
];

export function WeightLossResults() {
  return (
    <section className="linen overflow-hidden bg-vanilla px-6 py-16 md:px-8 lg:py-24" aria-labelledby="results-title">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-7 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Real Aeterna Clients</p>
            <h2 id="results-title" className="mt-4 max-w-4xl font-display text-5xl leading-tight text-espresso md:text-7xl">Progress you can see. Support you can feel.</h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-base leading-8 text-cocoa/70">Through personalized, provider-guided weight-loss care, ongoing check-ins, and plans tailored to their goals, these Aeterna clients made meaningful progress on their wellness journeys.</p>
            <p className="mt-3 text-xs leading-5 text-cocoa/55">Individual results vary. Images are shared with client permission and do not guarantee a specific outcome.</p>
          </div>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-2">
          {transformations.map((result) => (
            <RevealItem key={result.name}>
              <article className="overflow-hidden rounded-5xl border border-cocoa/10 bg-cream p-3 shadow-luxury sm:p-4">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    ["Before", result.before],
                    ["After", result.after],
                  ].map(([label, src]) => (
                    <div key={label} className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem] bg-mist sm:rounded-4xl">
                      <Image src={src} alt={`${result.name} — ${label.toLowerCase()}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-top" />
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-espresso/75 to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full border border-cream/30 bg-espresso/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-cream backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-5 sm:px-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-sage">Client Story</p>
                    <h3 className="mt-1 font-display text-2xl text-espresso sm:text-3xl">{result.name}</h3>
                  </div>
                  <span className="text-xs text-cocoa/50">Before → After</span>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-10 text-center">
          <Button href="/consultation">Start Your Consultation</Button>
        </Reveal>
      </div>
    </section>
  );
}
