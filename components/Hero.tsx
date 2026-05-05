"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-32 lg:pt-44 lg:pb-40">
      {/* Base */}
      <div className="absolute inset-0 -z-10 bg-ink-900" />
      <div className="absolute inset-0 -z-10 pinstripe opacity-40" />

      {/* Subtle bordeaux halo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] bg-radial-bordeaux animate-glow-pulse" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[400px] -translate-x-1/2 rounded-full bg-bordeaux-900/15 blur-[140px] sm:w-[600px] lg:w-[820px]" />

      <div className="container-luxe relative">
        {/* Couture eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span
            className="luxury-caps text-[11px] text-bordeaux-300"
            style={{ letterSpacing: "0.45em" }}
          >
            AI Suits Bootcamp
          </span>
          <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-bordeaux-500 to-transparent" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="heading-display mx-auto mt-10 max-w-5xl text-center text-3xl leading-[1.25] text-white sm:text-4xl md:text-5xl lg:text-[56px]"
        >
          בשני מפגשים ממוקדים תלמדו לבנות{" "}
          <span className="text-bordeaux-gradient font-bold">
            דפי מכירה מקצועיים וממותגים
          </span>
          , עם דיוק בהצעה, בתכנון ובאסטרטגיה — בלי רקע קודם, בחיסכון בזמן,
          בכסף ובתלות באנשי מקצוע.
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-primary group">
            <span>אני רוצה לשמור מקום</span>
            <ArrowIcon />
          </a>
          <a href="#contact-info" className="btn-ghost">
            שלחו לי את כל הפרטים
          </a>
        </motion.div>

        {/* Couture pinstripe divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mx-auto mt-20 h-px max-w-md origin-center divider-bordeaux"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-hover:-translate-x-1 rtl:rotate-180"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
