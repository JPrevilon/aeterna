export type Category =
  | "Medical Weight Loss"
  | "Wellness Shots"
  | "IV Therapy"
  | "Hormone Balance"
  | "Testosterone & Men's Health"
  | "Body Sculpting"
  | "Skin Tightening & Cellulite"
  | "Pelvic Floor Wellness"
  | "Anti-Aging & Longevity";

export type Service = {
  slug: string; title: string; category: Category; eyebrow: string;
  summary: string; description: string; durations: string[];
  priceLabel: string; startingPrice?: number; consultRequired?: boolean;
  featured?: boolean; cta?: string; image: string;
  bestFor: string[]; benefits: string[]; addOns?: string[]; note?: string;
};

export const categories: { title: Category; slug: string; summary: string; image: string }[] = [
  { title: "Medical Weight Loss", slug: "medical-weight-loss", summary: "Provider-guided, consultation-first weight-loss support including Semaglutide and Tirzepatide programs when clinically appropriate. Results vary.", image: "/assets/photos/aeterna-storefront-door.jpeg" },
  { title: "Wellness Shots", slug: "wellness-shots", summary: "Quick injectable wellness support options including B12, B-Complex, Lipo-C, Glutathione, and more for energy, recovery, and metabolic support.", image: "/assets/photos/aeterna-treatment-room.jpeg" },
  { title: "IV Therapy", slug: "iv-therapy", summary: "Hydration, vitamin, and NAD+ IV therapy options designed to support recovery, energy, and wellness. Intake review required for some protocols.", image: "/assets/photos/aeterna-treatment-room.jpeg" },
  { title: "Hormone Balance", slug: "hormone-balance", summary: "Consultation-first hormone wellness support for estradiol, progesterone, and related concerns when clinically appropriate. Results vary.", image: "/assets/photos/aeterna-storefront-door.jpeg" },
  { title: "Testosterone & Men's Health", slug: "testosterone-mens-health", summary: "Private consultation and provider-guided TRT programs for energy, performance, and men's health when clinically appropriate. Results vary.", image: "/assets/photos/aeterna-storefront-door.jpeg" },
  { title: "Body Sculpting", slug: "body-sculpting", summary: "Non-invasive Emsculpt Neo body sculpting technology designed to support muscle building and fat reduction when clinically appropriate. Results vary.", image: "/assets/photos/aeterna-treatment-room.jpeg" },
  { title: "Skin Tightening & Cellulite", slug: "skin-tightening-cellulite", summary: "Emtone treatments designed to support smoother-looking skin, tighter tone, and reduced cellulite appearance. Consultation required. Results vary.", image: "/assets/photos/aeterna-treatment-room.jpeg" },
  { title: "Pelvic Floor Wellness", slug: "pelvic-floor-wellness", summary: "Emsella non-invasive pelvic floor wellness treatments designed to support intimate health and urinary wellness for men and women. Results vary.", image: "/assets/photos/aeterna-treatment-room.jpeg" },
  { title: "Anti-Aging & Longevity", slug: "anti-aging-longevity", summary: "Exilis Ultra radiofrequency treatments and NAD+ longevity support designed for skin tightening, collagen stimulation, and anti-aging wellness.", image: "/assets/photos/aeterna-interior-wide.jpeg" }
];

export const addOns = [
  { title: "B12 Shot", price: 35 }, { title: "B-Complex Shot", price: 45 },
  { title: "Lipo-C Shot", price: 55 }, { title: "Amino Acid Shot", price: 55 },
  { title: "Glutathione Shot", price: 65 }, { title: "Vitamin D3 Shot", price: 55 }
];

export const services: Service[] = [

  // ── MEDICAL WEIGHT LOSS ────────────────────────────────────────────────────
  {
    slug: "medical-weight-loss-consultation",
    title: "Medical Weight Loss Consultation",
    category: "Medical Weight Loss", eyebrow: "Free Consult",
    summary: "A private consultation to review goals, health history, body composition, and personalized medical weight-loss options.",
    description: "A private, provider-guided consultation designed to review your weight-loss goals, health history, and body composition. Your provider will discuss personalized program options — including Semaglutide and Tirzepatide pathways — when clinically appropriate, and recommend a structured next step.",
    durations: ["30 min"], priceLabel: "Free Consultation",
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Weight-loss planning", "GLP-1 interest", "New clients"],
    benefits: ["Provider-guided consultation", "Personalized program options", "Semaglutide and Tirzepatide pathways when clinically appropriate", "Ideal first step for new clients"],
    note: "Prescription options require provider evaluation and are not appropriate for all clients. Results vary."
  },
  {
    slug: "semaglutide-weight-loss-program",
    title: "Semaglutide Weight Loss Program",
    category: "Medical Weight Loss", eyebrow: "GLP-1 Program",
    summary: "A medically guided weight-loss program using Semaglutide when clinically appropriate to support appetite control and long-term weight management.",
    description: "A medically guided weight-loss program using Semaglutide when clinically appropriate, designed to help support appetite control, blood sugar balance, and long-term weight management goals. Provider evaluation and ongoing monitoring are included in the monthly program.",
    durations: ["Monthly Program"], priceLabel: "From $299/month", startingPrice: 299,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Monthly support", "Appetite control", "Structured program"],
    benefits: ["Monthly treatment pathway", "Appetite support", "Provider-guided plan", "Progress check-ins"],
    note: "Semaglutide requires provider evaluation and prescription when clinically appropriate. Results vary. Not appropriate for all clients."
  },
  {
    slug: "tirzepatide-weight-loss-program",
    title: "Tirzepatide Weight Loss Program",
    category: "Medical Weight Loss", eyebrow: "Premium GLP-1",
    summary: "A premium medical weight-loss pathway using Tirzepatide when clinically appropriate, designed to support appetite regulation and sustainable weight-loss goals.",
    description: "A premium medical weight-loss pathway using Tirzepatide when clinically appropriate, designed to support appetite regulation, metabolic wellness, and sustainable weight-loss goals through a structured monthly program with provider monitoring.",
    durations: ["Monthly Program"], priceLabel: "From $399/month", startingPrice: 399,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Advanced support", "Metabolic wellness", "Long-term goals"],
    benefits: ["GLP-1 + GIP pathway", "Provider-guided program", "Monthly treatment plan", "Designed for long-term support"],
    note: "Tirzepatide requires provider evaluation and prescription when clinically appropriate. Results vary. Not appropriate for all clients."
  },
  {
    slug: "tirzepatide-nad-program",
    title: "Tirzepatide + NAD+ Program",
    category: "Medical Weight Loss", eyebrow: "Combined Wellness",
    summary: "A combined program pairing Tirzepatide support with NAD+ longevity support for weight management, energy, and metabolic wellness.",
    description: "A premium combined wellness program pairing Tirzepatide weight-loss support with NAD+ longevity support, designed for clients focused on weight management, energy, and metabolic wellness. Provider evaluation and program planning are required.",
    durations: ["Monthly Program"], priceLabel: "From $499/month", startingPrice: 499,
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Combined programs", "Energy support", "Longevity planning"],
    benefits: ["Weight-loss support", "NAD+ longevity support", "Energy and metabolism support", "Provider-guided program"],
    note: "Tirzepatide and NAD+ require provider evaluation. Prescription options are available only when clinically appropriate. Results vary."
  },
  {
    slug: "metabolic-evaluation",
    title: "Metabolic Evaluation",
    category: "Medical Weight Loss", eyebrow: "Wellness Eval",
    summary: "A focused wellness evaluation designed to guide weight-loss, energy, metabolic health, and longevity planning.",
    description: "A focused provider-guided wellness evaluation designed to help guide weight-loss, energy, metabolic health, and longevity planning. Includes a review of body composition, wellness goals, and health history with personalized next-step recommendations.",
    durations: ["30–45 min"], priceLabel: "$99", startingPrice: 99,
    consultRequired: false, cta: "Schedule Evaluation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Wellness planning", "Weight-loss goals", "Metabolic health"],
    benefits: ["Body composition review", "Weight-loss planning", "Metabolic wellness guidance", "Personalized next steps"]
  },

  // ── WELLNESS SHOTS ─────────────────────────────────────────────────────────
  {
    slug: "b12-wellness-shot",
    title: "B12 Wellness Shot",
    category: "Wellness Shots", eyebrow: "Quick Visit",
    summary: "A quick wellness injection designed to support energy, focus, and general wellness.",
    description: "A quick B12 wellness injection designed to support energy, focus, and general wellness. A popular add-on to weight-loss programs, IV therapy visits, and standalone wellness routines.",
    durations: ["10 min"], priceLabel: "$35", startingPrice: 35,
    consultRequired: false, cta: "Book Shot",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Energy support", "Quick visit", "Program pairing"],
    benefits: ["Quick appointment", "Energy support", "Popular wellness add-on", "Pairs well with weight-loss programs"]
  },
  {
    slug: "b-complex-shot",
    title: "B-Complex Shot",
    category: "Wellness Shots", eyebrow: "Quick Visit",
    summary: "A vitamin injection option designed to support energy, metabolism, and overall wellness.",
    description: "A B-Complex vitamin injection designed to support energy, metabolism, and overall wellness. A quick visit option that pairs well with IV therapy sessions and weight-loss programs.",
    durations: ["10 min"], priceLabel: "$45", startingPrice: 45,
    consultRequired: false, cta: "Book Shot",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Vitamin support", "Energy", "Quick visit"],
    benefits: ["B-vitamin complex support", "Quick visit", "Wellness add-on", "Energy support"]
  },
  {
    slug: "lipo-c-shot",
    title: "Lipo-C Shot",
    category: "Wellness Shots", eyebrow: "Program Add-On",
    summary: "A wellness injection commonly paired with medical weight-loss programs and metabolic support plans.",
    description: "A Lipo-C wellness injection commonly paired with medical weight-loss programs and metabolic support plans. Designed to complement structured weight-loss protocols when appropriate.",
    durations: ["10 min"], priceLabel: "$55", startingPrice: 55,
    consultRequired: false, cta: "Book Shot",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Weight-loss programs", "Metabolic support", "Program pairing"],
    benefits: ["Weight-loss support add-on", "Metabolic wellness", "Quick visit", "Program-friendly"]
  },
  {
    slug: "amino-acid-shot",
    title: "Amino Acid Shot",
    category: "Wellness Shots", eyebrow: "Recovery Support",
    summary: "A wellness injection designed to support recovery, active lifestyles, and performance-focused wellness.",
    description: "An amino acid wellness injection designed to support recovery, active lifestyles, and performance-focused wellness. Pairs well with IV therapy visits and fitness-focused wellness routines.",
    durations: ["10 min"], priceLabel: "$55", startingPrice: 55,
    consultRequired: false, cta: "Book Shot",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Recovery support", "Active lifestyle", "IV pairing"],
    benefits: ["Recovery support", "Active lifestyle support", "Quick visit", "Pairs with IV therapy"]
  },
  {
    slug: "glutathione-shot",
    title: "Glutathione Shot",
    category: "Wellness Shots", eyebrow: "Antioxidant Support",
    summary: "A beauty and wellness injection often used in antioxidant-support and recovery-focused protocols.",
    description: "A Glutathione wellness injection often incorporated into antioxidant-support and recovery-focused protocols. A premium shot option designed to complement beauty and wellness goals.",
    durations: ["10 min"], priceLabel: "$65", startingPrice: 65,
    consultRequired: false, cta: "Book Shot",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Antioxidant support", "Beauty wellness", "Premium shot"],
    benefits: ["Antioxidant support", "Beauty wellness", "Recovery support", "Premium shot option"]
  },
  {
    slug: "vitamin-d3-shot",
    title: "Vitamin D3 Shot",
    category: "Wellness Shots", eyebrow: "Vitamin Support",
    summary: "A wellness injection option designed to support vitamin D levels and overall wellness when appropriate.",
    description: "A Vitamin D3 wellness injection designed to support vitamin D levels and overall wellness. A quick, program-friendly visit that may be recommended as part of a broader wellness plan.",
    durations: ["10 min"], priceLabel: "$55", startingPrice: 55,
    consultRequired: false, cta: "Book Shot",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Vitamin support", "Wellness routine", "Quick visit"],
    benefits: ["Vitamin D support", "Quick visit", "Wellness support", "Add-on friendly"]
  },

  // ── IV THERAPY ─────────────────────────────────────────────────────────────
  {
    slug: "hydration-boost-iv-b12",
    title: "Hydration Boost IV + B12",
    category: "IV Therapy", eyebrow: "Hydration IV",
    summary: "A hydration-focused IV therapy option with B12 support for replenishment and energy support.",
    description: "A hydration-focused IV therapy option with B12 support, designed for clients seeking replenishment, energy support, and recovery. A great entry-level IV experience in our relaxing treatment room.",
    durations: ["45–60 min"], priceLabel: "From $159", startingPrice: 159,
    consultRequired: false, featured: true, cta: "Book IV",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Hydration", "Travel recovery", "Energy support"],
    benefits: ["Hydration support", "B12 included", "Wellness recovery", "Great entry IV"],
    note: "IV therapy requires intake and protocol review before treatment."
  },
  {
    slug: "immune-support-iv",
    title: "Immune Support IV",
    category: "IV Therapy", eyebrow: "Vitamin IV",
    summary: "A vitamin-rich IV therapy option designed to support hydration, immune wellness, and seasonal recovery.",
    description: "A vitamin-rich IV therapy option designed to support hydration, immune wellness, and seasonal recovery. May include Vitamin C, B-complex, and additional wellness-support nutrients based on provider protocol.",
    durations: ["45–60 min"], priceLabel: "From $189", startingPrice: 189,
    consultRequired: false, cta: "Book IV",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Immune wellness", "Seasonal support", "Recovery"],
    benefits: ["Immune wellness support", "Vitamin blend", "Hydration support", "Recovery-focused"],
    note: "IV therapy requires intake and protocol review before treatment. Results vary."
  },
  {
    slug: "performance-recovery-iv",
    title: "Performance & Recovery IV",
    category: "IV Therapy", eyebrow: "Recovery IV",
    summary: "A recovery-focused IV therapy option designed for active lifestyles, travel recovery, and performance support.",
    description: "A recovery-focused IV therapy option designed for active lifestyles, travel recovery, fatigue, and performance support. Formulated with hydration and wellness-support nutrients tailored to your recovery goals.",
    durations: ["45–60 min"], priceLabel: "From $219", startingPrice: 219,
    consultRequired: false, cta: "Book IV",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Active lifestyle", "Travel recovery", "Fatigue support"],
    benefits: ["Recovery support", "Active lifestyle focus", "Hydration", "Performance wellness"],
    note: "IV therapy requires intake and protocol review before treatment. Results vary."
  },
  {
    slug: "energy-support-nad-iv",
    title: "Energy Support + NAD IV",
    category: "IV Therapy", eyebrow: "Premium IV",
    summary: "A premium IV therapy option combining hydration and NAD+ support for energy, longevity, and recovery.",
    description: "A premium IV therapy option combining hydration and NAD+ support for clients focused on energy, longevity, and recovery. Consultation is required due to NAD+ protocol complexity and individual eligibility.",
    durations: ["60–90 min"], priceLabel: "From $299", startingPrice: 299,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["NAD+ support", "Longevity", "Premium IV"],
    benefits: ["NAD+ longevity support", "Energy support", "Premium wellness protocol", "Consultation-first care"],
    note: "NAD+ IV therapy requires intake, provider evaluation, and protocol approval. Results vary."
  },

  // ── TESTOSTERONE & MEN'S HEALTH ────────────────────────────────────────────
  {
    slug: "testosterone-mens-health-consultation",
    title: "Testosterone & Men's Health Consultation",
    category: "Testosterone & Men's Health", eyebrow: "Men's Health",
    summary: "A private consultation for men interested in energy, performance, strength, mood, libido, and hormone wellness.",
    description: "A private, provider-guided consultation for men interested in energy, performance, strength, mood, libido, and hormone wellness. Your provider will review your goals, health history, and recommend a personalized program when clinically appropriate.",
    durations: ["30–45 min"], priceLabel: "$99 / Free with Program Enrollment", startingPrice: 99,
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Men's health", "Hormone wellness", "Energy support"],
    benefits: ["Men's health focused", "Provider-guided consultation", "Lab review may be recommended", "Personalized program options"],
    note: "Treatment options require provider evaluation and may require labs. Results vary. Not appropriate for all clients."
  },
  {
    slug: "trt-program",
    title: "TRT Program",
    category: "Testosterone & Men's Health", eyebrow: "Provider-Guided",
    summary: "A provider-guided testosterone wellness program for qualified clients when clinically appropriate.",
    description: "A provider-guided testosterone replacement therapy program for qualified clients when clinically appropriate. Includes lab-guided care, personalized treatment pathways, and ongoing provider monitoring throughout the program.",
    durations: ["Monthly Program"], priceLabel: "Call for Consultation",
    consultRequired: true, cta: "Call for Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["TRT interest", "Provider-monitored care", "Lab-guided support"],
    benefits: ["Provider monitored", "Personalized treatment pathway", "Energy and performance support", "Lab-guided care"],
    note: "TRT requires provider evaluation, labs, and clinical appropriateness review. Results vary. Not appropriate for all clients."
  },

  // ── HORMONE BALANCE ────────────────────────────────────────────────────────
  {
    slug: "hormone-balance-consultation",
    title: "Hormone Balance Consultation",
    category: "Hormone Balance", eyebrow: "Consultation",
    summary: "A private consultation for hormone wellness including testosterone, estradiol, progesterone, and related support options.",
    description: "A private, provider-guided consultation for clients interested in hormone wellness — including testosterone, estradiol, progesterone, and related support options. Your provider will review your goals and health history and recommend a personalized plan when clinically appropriate.",
    durations: ["30–45 min"], priceLabel: "$99", startingPrice: 99,
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Hormone wellness", "Personalized plan", "Provider-guided"],
    benefits: ["Hormone wellness planning", "Provider-guided", "Personalized next steps", "Lab review may be recommended"],
    note: "Treatment options require provider evaluation and may require labs. Results vary."
  },
  {
    slug: "estradiol-progesterone-support",
    title: "Estradiol / Progesterone Support",
    category: "Hormone Balance", eyebrow: "Women's Hormone",
    summary: "Provider-guided estradiol and progesterone support for qualified clients when clinically appropriate.",
    description: "Provider-guided estradiol and progesterone hormone support for qualified clients when clinically appropriate. Program pricing and protocols depend on provider evaluation, labs, and individual health history.",
    durations: ["Monthly Program"], priceLabel: "Call for Consultation",
    consultRequired: true, cta: "Call for Consultation",
    image: "/assets/photos/aeterna-storefront-door.jpeg",
    bestFor: ["Women's wellness", "Hormone support", "Provider care"],
    benefits: ["Women's hormone wellness", "Personalized support", "Provider-guided", "Consultation-first"],
    note: "Hormone support options require provider evaluation and labs when appropriate. Results vary. Not appropriate for all clients."
  },

  // ── BODY SCULPTING ─────────────────────────────────────────────────────────
  {
    slug: "emsculpt-neo-consultation",
    title: "Emsculpt Neo Consultation",
    category: "Body Sculpting", eyebrow: "Free Consult",
    summary: "A consultation to determine treatment areas, goals, and package recommendations for Emsculpt Neo body sculpting.",
    description: "A private consultation designed to determine treatment areas, goals, and package recommendations for Emsculpt Neo body sculpting. Your provider will assess eligibility, review targeted areas, and design a personalized treatment plan.",
    durations: ["30 min"], priceLabel: "Free Consultation",
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Body sculpting planning", "Package guidance", "First visit"],
    benefits: ["Treatment area planning", "Muscle and fat-focused", "Package design", "No downtime"],
    note: "Consultation required. Results vary. Contraindications may apply."
  },
  {
    slug: "emsculpt-neo-single-session",
    title: "Emsculpt Neo Single Session",
    category: "Body Sculpting", eyebrow: "Body Sculpting",
    summary: "A non-invasive body sculpting treatment designed to support muscle building and fat reduction in targeted areas.",
    description: "A non-invasive body sculpting treatment using Emsculpt Neo technology, designed to support muscle building and fat reduction in targeted areas including the abdomen, arms, legs, and buttocks.",
    durations: ["30 min"], priceLabel: "From $750", startingPrice: 750,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Body contouring", "Muscle tone", "No downtime"],
    benefits: ["30-minute session", "Muscle and fat-focused", "No downtime", "Abdomen, arms, legs, buttocks"],
    note: "Consultation required. Results vary. Contraindications may apply."
  },
  {
    slug: "emsculpt-neo-4-session-package",
    title: "Emsculpt Neo 4-Session Package",
    category: "Body Sculpting", eyebrow: "Recommended Package",
    summary: "A recommended series package for clients seeking visible body sculpting support through Emsculpt Neo treatments.",
    description: "A recommended package of four Emsculpt Neo treatments for clients seeking visible body sculpting support. Packages are designed around targeted body areas and consultation-approved treatment goals.",
    durations: ["4 Sessions"], priceLabel: "From $2,800", startingPrice: 2800,
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Package value", "Sculpting goals", "Series treatment"],
    benefits: ["4-session series", "Designed for best results", "Muscle tone support", "Fat reduction support"],
    note: "Consultation required. Results vary. Contraindications may apply."
  },
  {
    slug: "emsculpt-classic-single-session",
    title: "Emsculpt Classic Single Session",
    category: "Body Sculpting", eyebrow: "Body Sculpting",
    summary: "A body contouring treatment designed to support muscle tone, definition, and targeted sculpting goals.",
    description: "A body contouring treatment using Emsculpt Classic technology, designed to support muscle tone, definition, and targeted sculpting goals in specific treatment areas.",
    durations: ["30 min"], priceLabel: "From $600", startingPrice: 600,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Muscle definition", "Body toning", "No downtime"],
    benefits: ["Muscle-building support", "30-minute session", "No downtime", "Targeted treatment areas"],
    note: "Consultation required. Results vary. Contraindications may apply."
  },

  // ── SKIN TIGHTENING & CELLULITE ────────────────────────────────────────────
  {
    slug: "emtone-single-session",
    title: "Emtone Single Session",
    category: "Skin Tightening & Cellulite", eyebrow: "Skin Treatment",
    summary: "A non-invasive treatment designed to support smoother-looking skin, tighter tone, and reduced cellulite appearance.",
    description: "A non-invasive Emtone treatment designed to support smoother-looking skin, tighter tone, and reduced cellulite appearance in targeted areas including thighs, buttocks, abdomen, and arms.",
    durations: ["20–30 min"], priceLabel: "From $399", startingPrice: 399,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Skin tightening", "Cellulite reduction", "No downtime"],
    benefits: ["Skin tightening support", "Cellulite reduction support", "Thighs, buttocks, abdomen, arms", "No downtime"],
    note: "Consultation required. Results vary. Contraindications may apply."
  },
  {
    slug: "emtone-4-session-package",
    title: "Emtone 4-Session Package",
    category: "Skin Tightening & Cellulite", eyebrow: "Recommended Package",
    summary: "A treatment package designed for smoother, firmer-looking skin and cellulite reduction support.",
    description: "A four-session Emtone package designed for clients seeking smoother, firmer-looking skin and cellulite reduction support. Best results are typically supported through a consistent series of treatments.",
    durations: ["4 Sessions"], priceLabel: "From $1,400", startingPrice: 1400,
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Package value", "Cellulite goals", "Skin texture"],
    benefits: ["4-session series", "Skin texture support", "Cellulite-focused protocol", "Package value"],
    note: "Consultation required. Results vary. Contraindications may apply."
  },
  {
    slug: "emtone-6-session-package",
    title: "Emtone 6-Session Package",
    category: "Skin Tightening & Cellulite", eyebrow: "Premium Package",
    summary: "A premium Emtone package for clients seeking a more complete cellulite and skin-tightening treatment plan.",
    description: "A premium six-session Emtone package designed for clients seeking a more comprehensive cellulite and skin-tightening treatment plan. Ideal for advanced goals and clients committed to visible skin improvement over time.",
    durations: ["6 Sessions"], priceLabel: "From $1,950", startingPrice: 1950,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Advanced goals", "Maximum sessions", "Best value"],
    benefits: ["6-session series", "Best for advanced goals", "Smoother-looking skin support", "No downtime"],
    note: "Consultation required. Results vary. Contraindications may apply."
  },

  // ── PELVIC FLOOR WELLNESS ──────────────────────────────────────────────────
  {
    slug: "emsella-single-session",
    title: "Emsella Single Session",
    category: "Pelvic Floor Wellness", eyebrow: "Pelvic Wellness",
    summary: "A non-invasive pelvic floor wellness treatment designed to support intimate wellness and urinary concerns.",
    description: "A non-invasive Emsella pelvic floor wellness treatment designed to support intimate wellness and urinary incontinence concerns. Available for both men and women in a private, discreet treatment setting.",
    durations: ["30 min"], priceLabel: "From $350", startingPrice: 350,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Pelvic floor support", "Intimate wellness", "No downtime"],
    benefits: ["30-minute session", "Non-invasive", "No downtime", "Men and women"],
    note: "Consultation and provider evaluation required. Results vary. Contraindications may apply."
  },
  {
    slug: "emsella-6-session-package",
    title: "Emsella 6-Session Package",
    category: "Pelvic Floor Wellness", eyebrow: "Recommended Package",
    summary: "A recommended pelvic floor wellness package for clients seeking a structured Emsella treatment plan.",
    description: "A recommended six-session Emsella pelvic floor wellness package designed for clients seeking a structured treatment plan and consistent pelvic floor support over time.",
    durations: ["6 Sessions"], priceLabel: "From $1,800", startingPrice: 1800,
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-treatment-room.jpeg",
    bestFor: ["Structured program", "Pelvic floor goals", "Package value"],
    benefits: ["6-session series", "Pelvic floor support", "No downtime", "Consultation-first"],
    note: "Consultation and provider evaluation required. Results vary. Contraindications may apply."
  },

  // ── ANTI-AGING & LONGEVITY ─────────────────────────────────────────────────
  {
    slug: "nad-injection",
    title: "NAD+ Injection",
    category: "Anti-Aging & Longevity", eyebrow: "Longevity Support",
    summary: "A longevity-focused injection designed to support cellular energy, recovery, metabolism, and overall wellness.",
    description: "A longevity-focused NAD+ injection designed to support cellular energy, recovery, metabolism, and overall wellness. Consultation is required to determine protocol appropriateness and individual eligibility.",
    durations: ["20–30 min"], priceLabel: "From $149", startingPrice: 149,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-interior-wide.jpeg",
    bestFor: ["Longevity support", "Energy", "Recovery"],
    benefits: ["Cellular energy support", "Recovery support", "Metabolic wellness", "Premium longevity option"],
    note: "NAD+ injection requires provider evaluation and protocol approval. Results vary."
  },
  {
    slug: "exilis-ultra-face-neck",
    title: "Exilis Ultra Face & Neck",
    category: "Anti-Aging & Longevity", eyebrow: "RF Treatment",
    summary: "A non-invasive radiofrequency treatment designed to support skin tightening, collagen stimulation, and smoother-looking skin on the face and neck.",
    description: "A non-invasive radiofrequency treatment using Exilis Ultra technology, designed to support skin tightening, collagen stimulation, and smoother-looking skin on the face and neck — without surgery or significant downtime.",
    durations: ["30–45 min"], priceLabel: "From $350", startingPrice: 350,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-interior-wide.jpeg",
    bestFor: ["Skin tightening", "Face and neck", "Collagen support"],
    benefits: ["Face and neck focus", "Skin tightening support", "Collagen stimulation support", "No surgery"],
    note: "Consultation and provider evaluation required. Results vary. Contraindications may apply."
  },
  {
    slug: "exilis-ultra-body",
    title: "Exilis Ultra Body",
    category: "Anti-Aging & Longevity", eyebrow: "RF Body Treatment",
    summary: "A non-invasive radiofrequency treatment designed to support body contouring, skin tightening, and smoother texture.",
    description: "A non-invasive radiofrequency treatment using Exilis Ultra technology designed to support body contouring, skin tightening, and smoother texture in targeted body areas after consultation.",
    durations: ["30–60 min"], priceLabel: "From $500", startingPrice: 500,
    consultRequired: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-interior-wide.jpeg",
    bestFor: ["Body contouring", "Skin tightening", "Targeted areas"],
    benefits: ["Body contouring support", "Skin tightening", "Radiofrequency technology", "Consultation-first"],
    note: "Consultation and provider evaluation required. Results vary. Contraindications may apply."
  },
  {
    slug: "exilis-ultra-4-session-package",
    title: "Exilis Ultra 4-Session Package",
    category: "Anti-Aging & Longevity", eyebrow: "Premium Package",
    summary: "A premium package for clients seeking a structured Exilis Ultra plan for skin tightening, contouring, and anti-aging support.",
    description: "A premium four-session Exilis Ultra package for clients seeking a structured anti-aging plan with skin tightening, contouring, and collagen support. Sessions can be applied to face, neck, or body areas based on consultation goals.",
    durations: ["4 Sessions"], priceLabel: "From $1,600", startingPrice: 1600,
    consultRequired: true, featured: true, cta: "Book Consultation",
    image: "/assets/photos/aeterna-interior-wide.jpeg",
    bestFor: ["Package value", "Anti-aging goals", "Structured plan"],
    benefits: ["4-session series", "Face, neck, or body", "Collagen stimulation support", "Premium anti-aging value"],
    note: "Consultation and provider evaluation required. Results vary. Contraindications may apply."
  }
];

export const featured = services.filter(s => s.featured);
export const serviceBySlug = (slug: string) => services.find(s => s.slug === slug);
export const byCategory = (category: Category) => services.filter(s => s.category === category);
