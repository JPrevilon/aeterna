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
        cream: "#FFFFFF",
        vanilla: "#F7F1E8",
        mist: "#E8EFEC",
        cocoa: "#1E1E1E",
        espresso: "#0F3D2E",
        sage: "#7A9B8E",
        olive: "#09251C",
        champagne: "#C8A96B",
        clay: "#A9874F",
        clinical: "#2F7FA3"
      },
      boxShadow: {
        luxury: "0 30px 90px rgba(9,37,28,.16), 0 8px 24px rgba(15,61,46,.08)",
        soft: "0 18px 48px rgba(15,61,46,.09)",
        lift: "0 14px 36px rgba(9,37,28,.13)",
        inset: "inset 0 1px 0 rgba(255,255,255,.82)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem"
      },
      letterSpacing: {
        luxury: ".22em"
      },
      backgroundImage: {
        sanctuary: "radial-gradient(ellipse at 16% 8%, rgba(200,169,107,.18), transparent 32%), radial-gradient(ellipse at 88% 0%, rgba(122,155,142,.14), transparent 28%), linear-gradient(135deg,#FFFFFF,#F7F1E8 48%,#E8EFEC)",
        parchment: "linear-gradient(135deg, rgba(255,255,255,.97), rgba(247,241,232,.94)), radial-gradient(ellipse at top left, rgba(200,169,107,.16), transparent 36%)",
        espressoGlow: "radial-gradient(ellipse at 82% 8%, rgba(200,169,107,.18), transparent 34%), linear-gradient(135deg,#0F3D2E,#124A38 54%,#09251C)"
      }
    }
  }
};
export default config;
