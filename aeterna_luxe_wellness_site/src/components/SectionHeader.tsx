export function SectionHeader({eyebrow,title,copy}:{eyebrow?:string;title:string;copy?:string}) {
  return <div className="mx-auto max-w-3xl text-center">
    {eyebrow && <p className="text-xs font-semibold uppercase tracking-luxury text-sage">{eyebrow}</p>}
    <h2 className="mt-3 font-display text-4xl leading-tight text-espresso md:text-6xl">{title}</h2>
    {copy && <p className="mt-5 text-base leading-8 text-cocoa/75 md:text-lg">{copy}</p>}
    <div className="gold-line mx-auto mt-7 max-w-xs" />
  </div>
}
