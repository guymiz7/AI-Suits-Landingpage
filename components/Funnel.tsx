"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const stages = [
  {
    n: "01",
    t: "תוכן",
    d: "מושך קהל דרך בהירות, תכלס, דוגמאות ותוצרים.",
  },
  {
    n: "02",
    t: "Bootcamp",
    d: "מוצר כניסה עם תוצאה מהירה ותוצר אמיתי.",
  },
  {
    n: "03",
    t: "Program",
    d: "עומק יכולת, מקצועיות וביצוע.",
  },
  {
    n: "04",
    t: "ליווי / יישום",
    d: "חיבור ההכשרה לעבודה אמיתית בעסק.",
  },
];

export function Funnel() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-36">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>הדרך</SectionLabel>
            <h2 className="heading-display mt-6 text-4xl leading-tight text-white sm:text-5xl">
              מתוכן ראשון
              <br /> <span className="text-bordeaux-gradient">לעסק שעובד.</span>
            </h2>
            <p className="mt-6 text-graphite-200">
              משפך מובנה ומדויק, שיוצר מסלול ברור — מהיכרות ראשונה ועד הטמעה
              ופתרון עסקי אמיתי.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute right-[19px] top-2 h-full w-px bg-gradient-to-b from-bordeaux-700/0 via-bordeaux-700/40 to-bordeaux-700/0" />

              <ul className="space-y-8">
                {stages.map((s, i) => (
                  <motion.li
                    key={s.n}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative flex items-start gap-6 pr-12"
                  >
                    <span className="absolute right-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-bordeaux-500/40 bg-ink-800 font-display text-sm font-bold text-bordeaux-200 shadow-soft">
                      {s.n}
                    </span>
                    <div className="flex-1 rounded-2xl border border-white/[0.06] bg-graphite-900/60 p-6">
                      <h3 className="heading-display text-2xl font-semibold text-white">
                        {s.t}
                      </h3>
                      <p className="mt-2 text-graphite-200">{s.d}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
