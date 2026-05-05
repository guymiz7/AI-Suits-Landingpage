"use client";

import { motion } from "framer-motion";

const pillars = [
  "שימוש ב־AI לטובת קיצור תהליכים ומקסום איכות התוצאה",
  "תכנון נכון של העמוד כדי להביא הצעה מדויקת למוצר",
  "הבנת החשיבה של הלקוח עם מבנה שיווקי שעובד נכון",
  "חיבור בין מסר, נראות ותוצאה — מקצה לקצה",
];

export function Bootcamp() {
  return (
    <section
      id="bootcamp"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-radial-bordeaux opacity-30" />

      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="eyebrow-bordeaux"
            style={{ letterSpacing: "0.45em" }}
          >
            הבוטקמפ
          </span>
          <h2 className="heading-display mt-5 font-serif font-light leading-[1.05] text-cream text-4xl sm:text-5xl lg:text-6xl">
            <span className="italic-accent">AI Suits</span> Bootcamp
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-bordeaux-500 to-transparent" />
        </motion.div>

        {/* Bold statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl text-center text-2xl font-semibold leading-relaxed text-white sm:text-3xl"
        >
          ההכשרה הזו לא עוסקת רק ב<span className="italic-accent">בנייה</span>.{" "}
          <br className="hidden sm:block" />
          היא תעזור לכם להבין{" "}
          <span className="italic-accent">מה לבנות</span> ו
          <span className="italic-accent">איך לבנות את זה נכון</span>.
        </motion.p>

        {/* Pillars */}
        <div className="mx-auto mt-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-bordeaux-700/30 bg-gradient-to-b from-bordeaux-900/15 via-graphite-900/80 to-graphite-900 p-8 shadow-luxury sm:p-12"
          >
            <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-bordeaux-700/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-bordeaux-900/30 blur-3xl" />

            <ul className="relative space-y-4">
              {pillars.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.05] bg-graphite-900/40 p-5 transition-all duration-300 hover:border-bordeaux-700/40 hover:bg-graphite-800/40"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bordeaux-500/40 bg-bordeaux-900/40 text-xs font-medium text-bordeaux-200">
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-graphite-100 sm:text-lg">
                    {p}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary group">
                <span>אני רוצה לשמור מקום</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1 rtl:rotate-180">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact-info" className="btn-ghost">
                שלחו לי את כל הפרטים
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
