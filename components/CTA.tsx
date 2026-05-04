"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.04] py-32 lg:py-40"
    >
      {/* Spotlight backdrop */}
      <div className="absolute inset-0 bg-radial-bordeaux opacity-80" />
      <div className="pointer-events-none absolute inset-0 pinstripe opacity-40" />

      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-gold-700/25 bg-gradient-to-bl from-bordeaux-900/30 via-graphite-900/85 to-graphite-900 p-10 shadow-luxury sm:p-14 lg:p-20"
        >
          {/* Inner pinstripe */}
          <div className="pointer-events-none absolute inset-0 pinstripe opacity-25" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-bordeaux-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold-900/15 blur-3xl" />

          <div className="relative">
            <span className="pill-gold">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              מקומות מוגבלים בכל מחזור
            </span>
            <h2 className="heading-display mt-7 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              מוכנים לתפור את החליפה
              <br />
              <span className="text-gold-gradient">של העסק שלכם?</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-graphite-200">
              שיחת אפיון קצרה, בלי התחייבות. תצאו עם תמונה ברורה איפה ה־AI,
              האוטומציה והשיווק יכולים לתת לכם יתרון אמיתי.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                <span>הזמינו שיחת אפיון</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rtl:rotate-180"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#products" className="btn-ghost">
                ראו את המסלולים
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                { t: "ללא התחייבות", d: "שיחה ראשונה — חינם ומדויקת" },
                { t: "ליווי אישי", d: "התאמה אמיתית למידה של העסק" },
                { t: "תוצרים אמיתיים", d: "לא תיאוריה — נכסים שעובדים" },
              ].map((b) => (
                <div key={b.t}>
                  <p className="font-display text-base font-semibold text-white">
                    {b.t}
                  </p>
                  <p className="mt-1 text-sm text-graphite-300">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
