import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Suit palette — luxury black + burgundy accents
        ink: {
          DEFAULT: "#0a0a0b",
          900: "#0a0a0b",
          800: "#111114",
          700: "#16161a",
          600: "#1c1c21",
          500: "#222228",
        },
        graphite: {
          900: "#1a1a1d",
          800: "#222228",
          700: "#2a2a30",
          600: "#34343c",
          500: "#42424b",
          400: "#5a5a64",
          300: "#7a7a85",
          200: "#a8a8b3",
          100: "#d4d4d8",
        },
        bordeaux: {
          DEFAULT: "#5a141d",
          900: "#2a0a10",
          800: "#3d0f15",
          700: "#5a141d",
          600: "#7a1f2b",
          500: "#962637",
          400: "#b2334a",
          300: "#c95871",
          200: "#dc8a9b",
        },
        cream: {
          DEFAULT: "#ede4d3",
          900: "#3a3528",
          800: "#5a5040",
          700: "#7a7060",
          600: "#a89c84",
          500: "#c4b89e",
          400: "#d6cdb5",
          300: "#e2d9c4",
          200: "#ede4d3",
          100: "#f5efe2",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-heebo)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        "radial-bordeaux":
          "radial-gradient(ellipse at 50% 0%, rgba(90,20,29,0.18), transparent 65%)",
        "radial-gold":
          "radial-gradient(ellipse at 50% 0%, rgba(201,169,97,0.10), transparent 60%)",
        "radial-spot":
          "radial-gradient(circle at 30% 20%, rgba(201,169,97,0.07), transparent 55%)",
      },
      boxShadow: {
        "luxury": "0 20px 60px -20px rgba(90,20,29,0.35), 0 0 0 1px rgba(201,169,97,0.08)",
        "gold": "0 20px 60px -20px rgba(201,169,97,0.25), 0 0 0 1px rgba(201,169,97,0.15)",
        "soft": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04)",
      },
      keyframes: {
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
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
        "shimmer": "shimmer 3s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "subtle-pulse": "subtle-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
