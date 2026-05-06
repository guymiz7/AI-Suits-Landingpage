import type { Config } from "tailwindcss";

/**
 * Suits AI — exact palette from branding/color palette.png
 * Cream  #F5EFE6 — Paper · 5%
 * Bordeaux #5C1A2B — Accent · 10%
 * Charcoal #1A1A1D — Primary · 25%
 * Onyx   #0A0A0B — Foundation · 60%
 *
 * Typography: Heebo (Thin 200 / Light 300 / Regular 400 / Medium 500)
 * Logo: Cormorant Garamond Italic — used inside the SVG only
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5EFE6",
          dim: "rgba(245,239,230,0.78)",
          mute: "rgba(245,239,230,0.55)",
        },
        bordeaux: {
          DEFAULT: "#5C1A2B",
          deep: "#3F0F1C",
          soft: "#7A2B3D",
        },
        charcoal: "#1A1A1D",
        onyx: "#0A0A0B",
        line: {
          DEFAULT: "rgba(245,239,230,0.14)",
          soft: "rgba(245,239,230,0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "-apple-system", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.18" },
          "50%": { opacity: "0.32" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "marquee": "marquee 50s linear infinite",
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
