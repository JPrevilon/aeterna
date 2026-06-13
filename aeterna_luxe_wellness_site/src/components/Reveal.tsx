"use client";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children:React.ReactNode;
  className?:string;
  delay?:number;
};

export function LuxuryReveal({ children, className="", delay=0 }:RevealProps) {
  const reducedMotion = useReducedMotion();

  return <motion.div
    initial={reducedMotion ? false : { opacity:0, y:24, filter:"blur(8px)" }}
    whileInView={reducedMotion ? undefined : { opacity:1, y:0, filter:"blur(0px)" }}
    viewport={{ once:true, margin:"-80px" }}
    transition={{ duration:.9, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>;
}

export function Reveal({ children, className="", delay=0 }:RevealProps) {
  const reducedMotion = useReducedMotion();

  return <motion.section
    initial={reducedMotion ? false : { opacity:0, y:28 }}
    whileInView={reducedMotion ? undefined : { opacity:1, y:0 }}
    viewport={{ once:true, margin:"-80px" }}
    transition={{ duration:.85, delay, ease }}
    className={className}
  >
    {children}
  </motion.section>;
}

export function RevealStagger({ children, className="" }:{children:React.ReactNode;className?:string}) {
  const reducedMotion = useReducedMotion();

  return <motion.div
    initial={reducedMotion ? false : "hidden"}
    whileInView={reducedMotion ? undefined : "show"}
    viewport={{ once:true, margin:"-70px" }}
    variants={{
      hidden:{},
      show:{ transition:{ staggerChildren:.09, delayChildren:.08 } }
    }}
    className={className}
  >
    {children}
  </motion.div>;
}

export function RevealItem({ children, className="" }:{children:React.ReactNode;className?:string}) {
  const reducedMotion = useReducedMotion();

  return <motion.div
    variants={reducedMotion ? undefined : {
      hidden:{ opacity:0, y:18 },
      show:{ opacity:1, y:0, transition:{ duration:.75, ease } }
    }}
    className={className}
  >
    {children}
  </motion.div>;
}
