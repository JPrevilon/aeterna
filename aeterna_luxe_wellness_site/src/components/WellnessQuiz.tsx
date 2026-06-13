"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
const options = [
  ["Deep relaxation","Energy Support NAD+ IV","/services/energy-support-nad-iv"],
  ["Muscle tension","Performance Recovery IV","/services/performance-recovery-iv"],
  ["Skin glow","Glutathione Brightening Shot","/services/glutathione-shot"],
  ["Weight-loss support","Medical Weight-Loss Consultation","/services/medical-weight-loss-consultation"],
  ["Energy support","Hydration Boost IV + B12","/services/hydration-boost-iv-b12"],
  ["Body sculpting","Emsculpt Neo Consultation","/services/emsculpt-neo-consultation"],
  ["Hormone balance","Hormone Balance Consultation","/services/hormone-balance-consultation"],
  ["Anti-aging care","Exilis Ultra Face & Neck","/services/exilis-ultra-face-neck"]
] as const;
type WellnessGoal = (typeof options)[number][0];
export function WellnessQuiz() {
  const [selected,setSelected] = useState<WellnessGoal>(options[0][0]);
  const result = useMemo(()=>options.find(o=>o[0]===selected) || options[0],[selected]);
  return <div className="relative overflow-hidden rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/80 p-5 shadow-luxury md:p-10">
    <Image src="/assets/logos/aeterna-symbol.png" alt="" width={260} height={260} aria-hidden className="pointer-events-none absolute -right-20 -top-20 opacity-[.055]" />
    <p className="text-xs uppercase tracking-luxury text-sage">Ritual Finder</p><h2 className="mt-3 font-display text-5xl text-espresso">What are you seeking today?</h2>
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{options.map(o=><button key={o[0]} onClick={()=>setSelected(o[0])} aria-pressed={selected===o[0]} className={`rounded-3xl border p-5 text-left shadow-inset outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-sage/30 ${selected===o[0]?"border-sage bg-gradient-to-b from-sage to-olive text-cream shadow-lift":"border-cocoa/10 bg-cream/80 text-espresso hover:border-sage/40 hover:bg-cream"}`}>{o[0]}</button>)}</div>
    <div className="mt-8 rounded-4xl border border-cocoa/10 bg-cream/80 p-6 shadow-inset"><p className="text-xs uppercase tracking-luxury text-sage">Recommended Ritual</p><h3 className="mt-2 font-display text-4xl text-espresso">{result[1]}</h3><p className="mt-3 text-cocoa/70">Start here, then allow Aeterna to personalize your plan with add-ons, products, or provider-guided consultation when clinically appropriate. Results vary.</p><Link href={result[2]} className="mt-5 inline-flex rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-vanilla">View Recommendation</Link></div>
  </div>
}
