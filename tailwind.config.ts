import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Suits AI Brand Book palette ===
        onyx: "#0A0A0B",
        charcoal: "#1A1A1D",
        graphite: {
          DEFAULT: "#2A2A2E",
          900: "#1A1A1D",
          800: "#222228",
          700: "#2A2A2E",
          600: "#3A3A40",
          500: "#4A4A50",
          400: "#6B6B70",
          300: "#9A9AA0",
          200: "#C4C4CA",
          100: "#E4E4E8",
        },
        smoke: "#6B6B70",
        bordeaux: {
          DEFAULT: "#5C1A2B",
          900: "#3F0F1C",
          800: "#4D1422",
          700: "#5C1A2B",
          600: "#6E2236",
          500: "#7A2B3D",
          400: "#9C4757",
          300: "#B96C7B",
          200: "#C7A99B",
        },
        cream: {
          DEFAULT: "#F5EFE6",
          warm: "#EDE4D3",
          paper: "#FAF6EE",
        },
        // Backwards-compat aliases
        ink: {
          DEFAULT: "#0A0A0B",
          900: "#0A0A0B",
          800: "#111114",
          700: "#16161A",
          600: "#1C1C21",
          500: "#222228",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-serif)", "var(--font-heebo)", "serif"],
      },
      backgroundImage: {
        "radial-bordeaux":
          "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.18), transparent 65%)",
        "radial-spot":
          "radial-gradient(circle at 30% 20%, rgba(237,228,211,0.06), transparent 55%)",
      },
      boxShadow: {
        luxury:
          "0 20px 60px -20px rgba(63,15,28,0.4), 0 0 0 1px rgba(245,239,230,0.04)",
        soft: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "subtle-pulse": "subtle-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
