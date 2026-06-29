import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({ href, children, variant="primary", className="" }:{href:string;children:React.ReactNode;variant?: "primary"|"outline"|"ghost"|"sage";className?:string}) {
  const styles = {
    primary:"border border-emerald bg-gradient-to-b from-emerald to-forest text-cream shadow-lift hover:shadow-luxury",
    outline:"border border-cocoa/20 bg-cream/80 text-espresso shadow-inset backdrop-blur hover:border-champagne/60 hover:bg-vanilla",
    ghost:"border border-transparent text-espresso hover:border-cocoa/10 hover:bg-vanilla/80",
    sage:"border border-sage bg-gradient-to-b from-sage to-olive text-cream shadow-lift hover:shadow-luxury"
  };
  return <Link href={href} className={cn("inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[.18em] outline-none transition duration-500 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream", styles[variant], className)}>{children}</Link>;
}
