import Link from "next/link";

type Props = { href: string; label: string; subtext?: string };

export function StickyMobileCTA({ href, label, subtext }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-cocoa/15 bg-cream/95 px-5 py-4 shadow-luxury backdrop-blur-sm md:hidden">
      {subtext && (
        <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[.14em] text-cocoa/50">{subtext}</p>
      )}
      <Link
        href={href}
        className="flex min-h-12 items-center justify-center rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift transition duration-300 active:scale-[.98]"
      >
        {label}
      </Link>
    </div>
  );
}
