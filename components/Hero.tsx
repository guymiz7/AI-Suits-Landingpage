"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-32 lg:pt-40 lg:pb-40">
      {/* Base */}
      <div className="absolute inset-0 -z-10 bg-ink-900" />
      <div className="absolute inset-0 -z-10 pinstripe opacity-40" />

      {/* Subtle bordeaux halo + gold accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] bg-radial-bordeaux glow-bordeaux" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[400px] -translate-x-1/2 rounded-full bg-bordeaux-900/15 blur-[140px] sm:w-[600px] lg:w-[820px]" />
      <div className="pointer-events-none absolute -top-20 left-[15%] -z-10 hidden h-[300px] w-[300px] rounded-full bg-gold-900/10 blur-[120px] lg:block" />

      <div className="container-luxe relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center"
        >
          <div className="pill-gold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
            </span>
            <span>הכשרה פרקטית · AI · אוטומציה · מערכות</span>
          </div>
        </motion.div>

        {/* Headline — new */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="heading-display mx-auto mt-8 max-w-5xl text-center text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px]"
        >
          <span className="text-luxe-gradient block">AI Suits —</span>
          <span className="text-luxe-gradient mt-2 block">
            תופרים לעסק שלך
          </span>
          <span className="mt-2 block">
            <span className="shine-text">מערכת שעובדת</span>
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-graphite-200 sm:text-xl"
        >
          הכשרה מוכוונת תוצאה ותוצר. מחברים{" "}
          <span className="font-semibold text-white">שיווק, אוטומציה ו־AI</span>{" "}
          למעטפת אחת — מסודרת, מדויקת, ועם יתרון אמיתי על המתחרים.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#products" className="btn-primary group">
            <span>בואו נתפור לכם חליפה</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1 rtl:rotate-180"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#about" className="btn-ghost">
            איך זה עובד?
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-4"
        >
          {[
            { v: "10+", l: "שנות ניסיון" },
            { v: "200+", l: "עסקים ליווינו" },
            { v: "3", l: "עולמות מחוברים" },
            { v: "100%", l: "תוצרים אמיתיים" },
          ].map((s) => (
            <div
              key={s.l}
              className="group relative flex flex-col items-center bg-graphite-900/60 px-6 py-7 transition-colors hover:bg-graphite-800/60"
            >
              <span className="font-display text-3xl font-extrabold text-gold-gradient">
                {s.v}
              </span>
              <span className="mt-1 text-xs text-graphite-300">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}
