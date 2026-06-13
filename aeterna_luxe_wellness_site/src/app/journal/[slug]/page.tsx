import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { journalPosts } from "@/data/journal";
import { SITE } from "@/lib/constants";
import { meta } from "@/lib/seo";

type JournalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams(){return journalPosts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:JournalPageProps){const { slug } = await params; const p=journalPosts.find(x=>x.slug===slug); return p?meta({title:p.title,description:p.excerpt,path:`/journal/${p.slug}`}):meta({title:"Journal"})}
export default async function JournalDetail({params}:JournalPageProps){
  const { slug } = await params;
  const p=journalPosts.find(x=>x.slug===slug);
  if(!p) notFound();
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const articleJsonLd = {
    "@context":"https://schema.org",
    "@type":"Article",
    headline:p.title,
    description:p.excerpt,
    articleSection:p.category,
    author:{ "@type":"Organization", name:SITE.name },
    publisher:{ "@type":"Organization", name:SITE.name, logo:{ "@type":"ImageObject", url:`${base}/assets/logos/aeterna-full-logo.png` } },
    mainEntityOfPage:`${base}/journal/${p.slug}`
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
    <PageHero eyebrow={p.category} title={p.title} copy={p.excerpt}/>
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24"><article className="mx-auto max-w-3xl rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 text-lg leading-9 text-cocoa/75 shadow-soft md:p-8"><div className="gold-line mb-8"/>{p.content.map((paragraph)=><p key={paragraph} className="mt-6 first:mt-0">{paragraph}</p>)}</article></section>
  </>;
}
