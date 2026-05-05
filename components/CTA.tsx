"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.04] py-32 lg:py-40"
    >
      <div className="absolute inset-0 bg-radial-bordeaux opacity-70" />
      <div className="pointer-events-none absolute inset-0 pinstripe opacity-40" />

      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-bordeaux-700/30 bg-gradient-to-bl from-bordeaux-900/30 via-graphite-900/85 to-graphite-900 p-10 shadow-luxury sm:p-14 lg:p-20"
        >
          <div className="pointer-events-none absolute inset-0 pinstripe opacity-30" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-bordeaux-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-bordeaux-900/30 blur-3xl" />

          <div className="relative">
            <p className="text-center text-2xl font-semibold leading-relaxed text-white sm:text-3xl lg:text-[36px] lg:leading-[1.4]">
              אם אתם רוצים לדעת לבנות{" "}
              <span className="text-bordeaux-gradient">דפי נחיתה</span> עם
              מסרים מחודדים שמוכרים, נכסים דיגיטליים שיקדמו תנועה, ועבודה עם
              כלי <span className="text-bordeaux-gradient">AI</span> שייתנו לכם
              יכולת אמיתית לעבוד מהר יותר —{" "}
              <span className="text-white">זה המקום להתחיל ממנו.</span>
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary group">
                <span>אני רוצה לשמור מקום</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1 rtl:rotate-180">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact-info" id="contact-info" className="btn-ghost">
                שלחו לי את כל הפרטים
              </a>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                { t: "ללא התחייבות", d: "תשובה ראשונה — חינם ומדויקת" },
                { t: "שני מפגשים", d: "ממוקדים, פרקטיים — בלי מילוי שעות" },
                { t: "תוצרים אמיתיים", d: "לא תיאוריה — נכסים שעובדים" },
              ].map((b) => (
                <div key={b.t}>
                  <p className="font-display text-base font-semibold text-white">
                    {b.t}
                  </p>
                  <p className="mt-1 text-sm font-light text-graphite-300">
                    {b.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
