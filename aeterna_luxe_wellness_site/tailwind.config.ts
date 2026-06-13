import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        cream: "#FFF9F0",
        vanilla: "#F5EFE4",
        mist: "#EFE7DC",
        cocoa: "#5A3E2B",
        espresso: "#2F2118",
        sage: "#667452",
        olive: "#4D5B3A",
        champagne: "#C8A96A",
        clay: "#B99B7D"
      },
      boxShadow: {
        luxury: "0 30px 90px rgba(47,33,24,.18), 0 8px 24px rgba(90,62,43,.08)",
        soft: "0 18px 48px rgba(90,62,43,.10)",
        lift: "0 14px 36px rgba(47,33,24,.12)",
        inset: "inset 0 1px 0 rgba(255,249,240,.75)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem"
      },
      letterSpacing: {
        luxury: ".22em"
      },
      backgroundImage: {
        sanctuary: "radial-gradient(ellipse at 16% 8%, rgba(200,169,106,.18), transparent 32%), radial-gradient(ellipse at 88% 0%, rgba(111,125,92,.13), transparent 28%), linear-gradient(135deg,#FFF9F0,#F5EFE4 48%,#EFE7DC)",
        parchment: "linear-gradient(135deg, rgba(255,249,240,.96), rgba(245,239,228,.92)), radial-gradient(ellipse at top left, rgba(200,169,106,.16), transparent 36%)",
        espressoGlow: "radial-gradient(ellipse at 82% 8%, rgba(200,169,106,.16), transparent 34%), linear-gradient(135deg,#2F2118,#3A281D 54%,#241810)"
      }
    }
  }
};
export default config;
