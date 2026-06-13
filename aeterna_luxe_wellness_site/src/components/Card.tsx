"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Service } from "@/data/services";
import type { Product } from "@/data/products";

export function ServiceCard({service}:{service:Service}) {
  const reducedMotion = useReducedMotion();
  const ctaLabel = service.cta || (service.consultRequired ? "Book Consultation" : "Book Now");
  return <Link href={`/services/${service.slug}`} className="group block rounded-5xl outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">
  <motion.article whileHover={reducedMotion ? undefined : { y:-8 }} transition={{ duration:.65, ease:[.22,1,.36,1] }} className="relative flex h-full flex-col overflow-hidden rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/80 shadow-soft transition duration-700 group-hover:border-champagne/50 group-hover:shadow-luxury">
    <div className="pointer-events-none absolute inset-0 rounded-5xl opacity-0 ring-1 ring-inset ring-champagne/45 transition duration-700 group-hover:opacity-100" />
    <div className="relative h-56 overflow-hidden rounded-b-[1.5rem]">
      <Image src={service.image} alt={service.title} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.055]"/>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent"/>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/45 to-transparent" />
      <p className="absolute left-5 top-5 rounded-full border border-cream/60 bg-cream/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-sage shadow-inset backdrop-blur">{service.eyebrow}</p>
      {service.consultRequired && <p className="absolute bottom-5 left-5 rounded-full border border-champagne/40 bg-espresso/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-champagne backdrop-blur">Consult required</p>}
    </div>
    <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="flex items-start justify-between gap-4"><div><p className="text-xs uppercase tracking-luxury text-sage">{service.category}</p><h3 className="mt-2 font-display text-3xl leading-tight text-espresso">{service.title}</h3></div><span className="rounded-full border border-cocoa/10 bg-cream p-3 text-espresso shadow-inset transition duration-500 group-hover:border-espresso group-hover:bg-espresso group-hover:text-cream"><ArrowUpRight className="h-4 w-4"/></span></div>
      <p className="mt-4 text-sm leading-7 text-cocoa/75">{service.summary}</p>
      <ul className="mt-4 grid gap-1.5" aria-label="Highlights">
        {service.benefits.slice(0,3).map(b=><li key={b} className="flex items-start gap-2 text-xs text-cocoa/60"><span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/50"/>{b}</li>)}
      </ul>
      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-4 border-t border-cocoa/10 pt-4 text-sm"><span className="text-cocoa/65">{service.durations.join(" · ")}</span><span className="text-right font-semibold text-espresso">{service.priceLabel}</span></div>
        <p className="mt-4 translate-y-1 text-xs font-semibold uppercase tracking-[.16em] text-sage opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">{ctaLabel} →</p>
      </div>
    </div>
  </motion.article>
  </Link>
}

export function ProductCard({product}:{product:Product}) {
  const reducedMotion = useReducedMotion();
  return <Link href={`/shop/${product.slug}`} className="group block rounded-5xl outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">
  <motion.article whileHover={reducedMotion ? undefined : { y:-8 }} transition={{ duration:.65, ease:[.22,1,.36,1] }} className="relative h-full rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/80 p-4 shadow-soft transition duration-700 group-hover:border-champagne/50 group-hover:shadow-luxury">
    <div className="pointer-events-none absolute inset-0 rounded-5xl opacity-0 ring-1 ring-inset ring-champagne/45 transition duration-700 group-hover:opacity-100" />
    <div className="relative h-56 overflow-hidden rounded-4xl bg-vanilla shadow-inset">
      <Image src={product.image} alt={product.title} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.055]"/>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" />
      {product.consultRequired && <span className="absolute left-4 top-4 rounded-full border border-cream/15 bg-espresso/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-cream backdrop-blur">Consult required</span>}
      {product.consultationDeposit && <span className="absolute bottom-4 left-4 rounded-full border border-champagne/40 bg-cream/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-sage backdrop-blur">Deposit</span>}
    </div>
    <div className="px-2 py-5"><p className="text-xs uppercase tracking-luxury text-sage">{product.category}</p><h3 className="mt-2 font-display text-3xl leading-tight text-espresso">{product.title}</h3><p className="mt-3 text-sm leading-7 text-cocoa/70">{product.summary}</p><p className="mt-5 border-t border-cocoa/10 pt-4 font-semibold text-espresso">{product.priceLabel}</p><p className="mt-4 translate-y-2 text-xs font-semibold uppercase tracking-[.16em] text-sage opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">{product.consultRequired && !product.consultationDeposit ? "Start consultation" : "View details"}</p></div>
  </motion.article>
  </Link>
}
