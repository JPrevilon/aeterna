"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function PageHero({eyebrow,title,copy,image="/assets/photos/aeterna-interior-wide.jpeg"}:{eyebrow:string;title:string;copy?:string;image?:string}) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target:ref, offset:["start start","end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);
  const textInitial = reducedMotion ? false : { opacity:0, y:22 };
  const textAnimate = reducedMotion ? undefined : { opacity:1, y:0 };

  return <section ref={ref} className="relative isolate overflow-hidden bg-espressoGlow px-6 py-20 text-cream md:px-8 md:py-24 lg:py-32">
    <motion.div style={reducedMotion ? undefined : { y:imageY }} className="absolute inset-0 -z-30 scale-[1.08] opacity-[.42]">
      <Image src={image} alt="" aria-hidden fill priority sizes="100vw" className="object-cover" />
    </motion.div>
    <div className="absolute inset-0 -z-20 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/40" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
    <motion.div
      animate={reducedMotion ? undefined : { y:[0,-10,0], rotate:[-1.5,1.5,-1.5] }}
      transition={{ duration:20, repeat:Infinity, ease:"easeInOut" }}
      className="pointer-events-none absolute -right-16 top-1/2 -z-10 hidden -translate-y-1/2 opacity-[.07] mix-blend-screen md:block"
    >
      <Image src="/assets/logos/aeterna-symbol.png" alt="" width={420} height={420} aria-hidden />
    </motion.div>
    <div className="mx-auto max-w-7xl">
      <motion.p initial={textInitial} animate={textAnimate} transition={{ duration:.75, ease:[.22,1,.36,1] }} className="text-xs font-semibold uppercase tracking-luxury text-champagne">{eyebrow}</motion.p>
      <motion.h1 initial={textInitial} animate={textAnimate} transition={{ duration:.95, delay:.08, ease:[.22,1,.36,1] }} className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-7xl lg:text-8xl">{title}</motion.h1>
      {copy && <motion.p initial={textInitial} animate={textAnimate} transition={{ duration:.95, delay:.18, ease:[.22,1,.36,1] }} className="mt-6 max-w-2xl text-lg leading-8 text-cream/75">{copy}</motion.p>}
    </div>
  </section>
}
