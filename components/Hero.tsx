"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pinstripe-onyx pt-44 pb-32 lg:pt-56 lg:pb-40">
      {/* Soft bordeaux halo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] bg-radial-bordeaux animate-glow-pulse" />

      <div className="container-luxe relative">
        {/* Document eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="caption-mono">— Bootcamp · Edition I / 2026</div>
        </motion.div>

        {/* Display headline — Cormorant Garamond + Hebrew serif blend */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="heading-display mx-auto mt-10 max-w-5xl text-center text-cream"
          style={{
            fontSize: "clamp(48px, 8vw, 110px)",
            lineHeight: 0.96,
          }}
        >
          תפור <em className="italic-accent">לבנייה</em> של
          <br />
          דפי מכירה <em className="italic-accent">מקצועיים</em>.
        </motion.h1>

        {/* Lead paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lead mx-auto mt-12 max-w-3xl text-center text-graphite-200"
        >
          בשני מפגשים ממוקדים תלמדו לבנות דפי מכירה מקצועיים וממותגים — עם
          דיוק בהצעה, בתכנון ובאסטרטגיה. בלי רקע קודם, בלי תלות באנשי מקצוע.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-primary group">
            <span>אני רוצה לשמור מקום</span>
            <ArrowIcon />
          </a>
          <a href="#contact-info" className="btn-ghost">
            שלחו לי את כל הפרטים
          </a>
        </motion.div>

        {/* Document chrome footer — small captions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-24"
        >
          <hr className="hairline mx-auto max-w-3xl" />
          <div className="mx-auto mt-6 flex max-w-3xl items-center justify-between">
            <span className="caption-mono">חליפה. אוטומציה. AI.</span>
            <span className="caption-mono">00 / Hero</span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-onyx to-transparent" />
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-hover:-translate-x-1 rtl:rotate-180"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
