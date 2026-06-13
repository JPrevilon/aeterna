import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import type { Service } from "@/data/services";
import type { Product } from "@/data/products";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const fallbackImage = "/assets/logos/aeterna-full-logo.png";

const serviceDescriptions:Partial<Record<Service["category"], string>> = {
  "Medical Weight Loss":"Consultation-required medical weight-loss support in Hollywood, Florida, including Semaglutide and Tirzepatide programs when clinically appropriate. Results vary.",
  "Wellness Shots":"Quick injectable wellness shots in Hollywood, Florida, including B12, B-Complex, Lipo-C, Glutathione, Amino Acid, and Vitamin D3 options for energy and recovery support.",
  "IV Therapy":"Provider-guided IV therapy in Hollywood, Florida, including hydration, vitamin, immune support, and NAD+ options. Intake review required for some protocols. Results vary.",
  "Hormone Balance":"Consultation-first hormone wellness support in Hollywood, Florida, including estradiol and progesterone support when clinically appropriate. Results vary.",
  "Testosterone & Men's Health":"Private testosterone and men's health consultations and TRT programs in Hollywood, Florida, when clinically appropriate. Provider-guided. Results vary.",
  "Body Sculpting":"Non-invasive Emsculpt Neo body sculpting in Hollywood, Florida. Single sessions and packages available. Consultation required. Results vary.",
  "Skin Tightening & Cellulite":"Emtone skin tightening and cellulite reduction treatments in Hollywood, Florida. Single sessions and packages available. Consultation required. Results vary.",
  "Pelvic Floor Wellness":"Emsella non-invasive pelvic floor wellness treatments in Hollywood, Florida, for men and women. Consultation required. Results vary.",
  "Anti-Aging & Longevity":"Exilis Ultra radiofrequency treatments and NAD+ longevity support in Hollywood, Florida. Non-invasive anti-aging care. Consultation required. Results vary."
};

export function meta({ title, description, path="/", image="/assets/logos/aeterna-full-logo.png" }:{title?:string;description?:string;path?:string;image?:string} = {}): Metadata {
  const t = title ? `${title} | ${SITE.shortName}` : `${SITE.shortName} | Beauty, Balance, Longevity`;
  const d = description || "Aeterna Luxe Wellness & Beauty in Hollywood, Florida offers luxury spa rituals and consultation-first medical wellness for South Florida, including provider-guided IV therapy, body sculpting, hormone wellness, weight-loss support, and anti-aging care when clinically appropriate.";
  const imagePath = image || fallbackImage;
  return {
    title: t,
    description: d,
    metadataBase: new URL(base),
    alternates: { canonical: path },
    openGraph: { title:t, description:d, url:path, siteName:SITE.name, images:[imagePath || fallbackImage], type:"website" },
    twitter: { card:"summary_large_image", title:t, description:d, images:[imagePath || fallbackImage] }
  };
}

export function serviceMeta(service:Service): Metadata {
  const fallback = serviceDescriptions[service.category] || service.summary;
  const description = service.consultRequired
    ? `${service.title} at Aeterna in Hollywood, Florida. ${service.summary} Consultation required, provider-guided when clinically appropriate, and results vary.`
    : `${service.title} at Aeterna in Hollywood, Florida. ${fallback}`;

  return meta({
    title:service.title,
    description,
    path:`/services/${service.slug}`,
    image:service.image || fallbackImage
  });
}

export function productMeta(product:Product): Metadata {
  const description = product.consultRequired && !product.consultationDeposit
    ? `${product.title} at Aeterna in Hollywood, Florida. ${product.summary} Consultation required, provider-guided when clinically appropriate, and results vary.`
    : `${product.title} at Aeterna in Hollywood, Florida. ${product.summary}`;

  return meta({
    title:product.title,
    description,
    path:`/shop/${product.slug}`,
    image:product.image || fallbackImage
  });
}

export const localBusinessJsonLd = {
  "@context":"https://schema.org",
  "@type":["LocalBusiness","HealthAndBeautyBusiness","DaySpa"],
  "@id":`${base}/#localbusiness`,
  name:SITE.name,
  description:"Consultation-first medical wellness and injectable vitamin therapy in Hollywood, Florida, serving South Florida clients seeking beauty, balance, longevity, and provider-guided care when clinically appropriate.",
  url:base,
  image:`${base}${fallbackImage}`,
  logo:`${base}${fallbackImage}`,
  telephone:SITE.phone,
  email:SITE.email,
  address:{ "@type":"PostalAddress", addressLocality:"Hollywood", addressRegion:"FL", addressCountry:"US" },
  areaServed:[
    { "@type":"City", name:"Hollywood" },
    { "@type":"AdministrativeArea", name:"South Florida" },
    { "@type":"City", name:"Fort Lauderdale" },
    { "@type":"City", name:"Miami" }
  ],
  priceRange:"$$$",
  makesOffer:[
    { "@type":"Offer", itemOffered:{ "@type":"Service", name:"Wellness shots and injectable vitamin therapy" } },
    { "@type":"Offer", itemOffered:{ "@type":"Service", name:"Consultation-required medical weight-loss support" } },
    { "@type":"Offer", itemOffered:{ "@type":"Service", name:"Provider-guided IV therapy consultation" } },
    { "@type":"Offer", itemOffered:{ "@type":"Service", name:"Hormone wellness consultation" } },
    { "@type":"Offer", itemOffered:{ "@type":"Service", name:"Body sculpting consultation" } }
  ],
  sameAs:[SITE.instagram, SITE.tiktok, SITE.youtube]
};
