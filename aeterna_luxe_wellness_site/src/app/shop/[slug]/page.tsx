import Image from "next/image";
import { notFound } from "next/navigation";
import { productBySlug, products } from "@/data/products";
import { Button } from "@/components/Buttons";
import { CheckoutButton } from "@/components/CheckoutButton";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { meta, productMeta } from "@/lib/seo";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:ProductPageProps){const { slug } = await params; const p=productBySlug(slug); return p?productMeta(p):meta({title:"Product"})}
export default async function ProductPage({params}:ProductPageProps){
  const { slug } = await params;
  const p=productBySlug(slug);
  if(!p) notFound();
  const related = products.filter(product => product.category === p.category && product.slug !== p.slug).slice(0,3);
  const checkoutAmount = p.checkoutAmount || (p.price ? p.price * 100 : undefined);
  const canCheckout = Boolean((!p.consultRequired || p.consultationDeposit) && checkoutAmount);
  const checkoutLabel = p.consultationDeposit ? "Pay Consultation Deposit" : "Checkout";
  return <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="relative min-h-[420px] overflow-hidden rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 shadow-luxury md:min-h-[560px]"><Image src={p.image} alt={p.title} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-cream/10"/></div>
      <div className="flex items-center"><div className="max-w-2xl"><p className="text-xs uppercase tracking-luxury text-sage">{p.category}</p><h1 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-7xl">{p.title}</h1><p className="mt-5 text-lg leading-8 text-cocoa/70 md:text-xl md:leading-9">{p.summary}</p><p className="mt-8 border-t border-champagne/30 pt-6 font-display text-4xl text-espresso">{p.priceLabel}</p><ul className="mt-8 grid gap-3 text-cocoa/75">{p.details.map(d=><li key={d}>• {d}</li>)}</ul>{p.consultRequired && <MedicalDisclaimer compact className="mt-8" />}<div className="mt-9 flex flex-col gap-3 sm:flex-row">{canCheckout ? <CheckoutButton amount={checkoutAmount} name={p.title} itemType={p.consultationDeposit ? "deposit" : "product"} itemSlug={p.slug} label={checkoutLabel} cancelPath={`/shop/${p.slug}`} /> : <Button href="/consultation">{p.consultRequired?"Request Consultation":"Inquire"}</Button>}<Button href="/contact" variant="outline">Ask About This</Button></div></div></div>
    </div>
    <div className="mt-14 grid gap-6 lg:grid-cols-2">
      <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-7">
        <p className="text-xs uppercase tracking-luxury text-sage">Benefits & Support</p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-espresso">How this fits your Aeterna plan.</h2>
        <ul className="mt-5 grid gap-3 border-t border-champagne/25 pt-5 text-cocoa/75">{(p.benefits || p.details).map(item => <li key={item}>• {item}</li>)}</ul>
      </div>
      <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-7">
        <p className="text-xs uppercase tracking-luxury text-sage">Pairing Recommendations</p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-espresso">Make it feel complete.</h2>
        <ul className="mt-5 grid gap-3 border-t border-champagne/25 pt-5 text-cocoa/75">{(p.pairings || ["Aeterna consultation","Spa ritual pairing","Membership planning"]).map(item => <li key={item}>• {item}</li>)}</ul>
      </div>
    </div>
    {related.length > 0 && <div className="mt-14 rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
      <p className="text-xs uppercase tracking-luxury text-sage">Related {p.category}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">{related.map(item => <Button key={item.slug} href={`/shop/${item.slug}`} variant="outline" className="justify-center text-center">{item.title}</Button>)}</div>
    </div>}
  </div></section>
}
