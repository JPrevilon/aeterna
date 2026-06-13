import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { localBusinessJsonLd, meta } from "@/lib/seo";

const display = Cormorant_Garamond({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-display" });
const sans = Manrope({ subsets:["latin"], weight:["300","400","500","600","700"], variable:"--font-sans" });

export const metadata: Metadata = meta();

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}>
    <body className="pb-20 font-sans antialiased lg:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(localBusinessJsonLd)}}/>
      <Header/><main>{children}</main><Footer/>
    </body>
  </html>
}
