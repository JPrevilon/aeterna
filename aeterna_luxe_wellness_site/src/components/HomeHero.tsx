"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/Buttons";
import { ShieldCheck, Stethoscope } from "lucide-react";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target:ref, offset:["start start","end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);
  const reveal = reducedMotion ? undefined : { opacity:1, y:0 };
  const initial = reducedMotion ? false : { opacity:0, y:22 };

  return <section ref={ref} className="noise relative isolate min-h-[78svh] overflow-hidden bg-espresso px-6 py-14 text-cream md:px-8 md:py-20 lg:min-h-[84svh]">
    <motion.div style={reducedMotion ? undefined : { y:imageY }} className="absolute inset-0 -z-30 scale-[1.08]">
      <Image src="/assets/photos/aeterna-interior-wide.jpeg" alt="Aeterna interior" fill priority sizes="100vw" className="object-cover" />
    </motion.div>
    <div className="absolute inset-0 -z-20 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/20" />
    <div className="absolute inset-0 -z-20 bg-gradient-to-t from-espresso/60 via-transparent to-cream/20" />
    <motion.div
      animate={reducedMotion ? undefined : { y:[0,-12,0], rotate:[-2,2,-2] }}
      transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
      className="pointer-events-none absolute -right-24 top-12 -z-10 hidden opacity-[.08] mix-blend-screen lg:block"
    >
      <Image src="/assets/logos/aeterna-symbol.png" alt="" width={520} height={520} aria-hidden />
    </motion.div>
    <div className="mx-auto flex max-w-7xl flex-col justify-center pt-8 md:pt-12 lg:min-h-[70svh]">
      <motion.div style={reducedMotion ? undefined : { y:contentY }} className="max-w-5xl">
        <motion.div initial={reducedMotion ? false : { opacity:0, y:16, scale:.97 }} animate={reducedMotion ? undefined : { opacity:1, y:0, scale:1 }} transition={{duration:.9,ease:[.22,1,.36,1]}} className="mb-7 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/10 px-3 py-2 shadow-inset backdrop-blur-md">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-champagne/35 bg-cream/90">
            <Image src="/assets/logos/aeterna-symbol.png" alt="Aeterna symbol" width={38} height={38} className="h-8 w-8 object-contain" priority />
          </span>
          <span className="pr-2 text-[10px] font-semibold uppercase tracking-[.24em] text-champagne">Aeterna Hollywood</span>
        </motion.div>
        <motion.p initial={initial} animate={reveal} transition={{duration:.7}} className="text-xs font-semibold uppercase tracking-luxury text-champagne">Luxe Wellness & Beauty · Hollywood, Florida</motion.p>
        <motion.h1 initial={initial} animate={reveal} transition={{duration:.95,delay:.08,ease:[.22,1,.36,1]}} className="mt-5 max-w-5xl font-display text-5xl leading-[.95] text-cream md:text-7xl lg:text-8xl xl:text-9xl">Aeterna Luxe Wellness & Beauty.</motion.h1>
        <motion.p initial={initial} animate={reveal} transition={{duration:.95,delay:.18,ease:[.22,1,.36,1]}} className="mt-7 max-w-2xl text-base leading-8 text-cream/80 md:text-xl md:leading-9">A medical-spa experience for beauty, balance, and longevity—combining serene rituals with consultation-first, provider-guided wellness when clinically appropriate. Results vary.</motion.p>
        <motion.div initial={initial} animate={reveal} transition={{duration:.95,delay:.28,ease:[.22,1,.36,1]}} className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="/book" className="focus-visible:ring-offset-espresso">Book a Consultation</Button><Button href="/services" variant="outline" className="border-cream/25 bg-cream/90 text-espresso focus-visible:ring-offset-espresso">Explore Services</Button></motion.div>
        <motion.div initial={initial} animate={reveal} transition={{duration:.95,delay:.36,ease:[.22,1,.36,1]}} className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical/45 bg-clinical/20 px-4 py-2 text-xs font-medium text-cream backdrop-blur"><Stethoscope className="h-4 w-4 text-[#8DD5F2]" aria-hidden/> Consultation-first</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical/45 bg-clinical/20 px-4 py-2 text-xs font-medium text-cream backdrop-blur"><ShieldCheck className="h-4 w-4 text-[#8DD5F2]" aria-hidden/> Eligibility reviewed</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical/45 bg-clinical/20 px-4 py-2 text-xs font-medium text-cream backdrop-blur"><span className="font-display text-base font-bold leading-none text-[#8DD5F2]">Rx</span> When clinically appropriate</span>
        </motion.div>
      </motion.div>
      <motion.div initial={initial} animate={reveal} transition={{duration:1,delay:.45,ease:[.22,1,.36,1]}} className="mt-12 grid max-w-3xl gap-3 text-cream/80 sm:grid-cols-3">
        {["Spa Rituals","Medical Wellness","Longevity Care"].map(item=><div key={item} className="border-t border-champagne/45 pt-4"><p className="font-display text-2xl text-cream">{item}</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-[.16em] text-champagne/90">Calm, consult-first care</p></div>)}
      </motion.div>
    </div>
  </section>
}
