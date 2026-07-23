import type { MetadataRoute } from "next";
import { journalPosts } from "@/data/journal";
import { services } from "@/data/services";
import { products } from "@/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  const staticRoutes = [
    "", "/services", "/medical-wellness", "/weight-loss", "/book", "/consultation",
    "/shop", "/memberships", "/gift-cards", "/the-experience", "/about",
    "/contact", "/journal", "/faq", "/policies", "/wellness-quiz",
    "/services/medical-weight-loss", "/services/tirzepatide-nad",
    "/services/wellness-shots", "/services/iv-therapy",
    "/services/testosterone-mens-health", "/services/hormone-balance",
    "/services/emsculpt-neo", "/services/emtone",
    "/services/emsella", "/services/exilis-ultra"
  ];
  return [
    ...staticRoutes.map(r=>({url:`${base}${r}`,lastModified:now})),
    ...services.map(s=>({url:`${base}/services/${s.slug}`,lastModified:now})),
    ...products.map(p=>({url:`${base}/shop/${p.slug}`,lastModified:now})),
    ...journalPosts.map(p=>({url:`${base}/journal/${p.slug}`,lastModified:now}))
  ];
}
