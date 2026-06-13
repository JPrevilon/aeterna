"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageFrameProps = {
  src:string;
  alt:string;
  className?:string;
  sizes?:string;
  priority?:boolean;
  overlay?:boolean;
};

export function ParallaxImageFrame({ src, alt, className="", sizes="100vw", priority=false, overlay=true }:ParallaxImageFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return <motion.div
    ref={ref}
    initial={reducedMotion ? false : { opacity:0, y:22 }}
    whileInView={reducedMotion ? undefined : { opacity:1, y:0 }}
    viewport={{ once:true, margin:"-80px" }}
    transition={{ duration:.9, ease:[.22,1,.36,1] }}
    whileHover={reducedMotion ? undefined : { y:-5 }}
    className={cn("group relative overflow-hidden rounded-5xl border border-cocoa/10 shadow-soft", className)}
  >
    <motion.div style={reducedMotion ? undefined : { y }} className="absolute inset-[-7%]">
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04]" />
    </motion.div>
    {overlay && <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-cream/10" />}
    <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-champagne/40 transition duration-700 group-hover:opacity-100" />
  </motion.div>;
}
