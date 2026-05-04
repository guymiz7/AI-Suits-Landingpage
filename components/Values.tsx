"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const values = [
  {
    label: "פרקטיקה",
    en: "Practice",
    desc: "עושים, לא מדברים. כל יחידת לימוד נגמרת בתוצר אמיתי שאפשר לראות, להפעיל וליישם.",
  },
  {
    label: "תוצאה",
    en: "Outcome",
    desc: "מודדים הצלחה ביכולת לבצע, לא בכמות הסלידים שעברו. תוצאה > תוכן.",
  },
  {
    label: "דיוק",
    en: "Precision",
    desc: "בחשיבה, באפיון, בבנייה ובהצגה. מה שלא חד — לא מספיק.",
  },
  {
    label: "מקצוענות",
    en: "Craft",
    desc: "רמה גבוהה גם בפרטים הקטנים. סטנדרט שאפשר להציג מול לקוח, מנהל או שותף.",
  },
  {
    label: "בהירות",
    en: "Clarity",
    desc: "מסירים ערפל ומונחים ריקים. שפה ישירה שמייצרת הבנה ופעולה.",
  },
  {
    label: "מסוגלות",
    en: "Capability",
    desc: "לא תלות בכלי או במורה. אחרי ההכשרה — אתה זה שיודע לבנות.",
  },
  {
    label: "בנייה",
    en: "Building",
    desc: "כל מה שצריך מתחיל ממבנה. בלי מבנה אין מערכת, אין נכס ואין תוצאה.",
  },
  {
    label: "התאמה",
    en: "Tailoring",
    desc: "אין פתרון אחד שמתאים לכולם. תופרים את הפתרון לעסק, לא הפוך.",
  },
  {
    label: "אחריות",
    en: "Ownership",
    desc: "אנחנו לקחים אחריות על העסק, לא רק על השיעור. הליווי נמדד בתוצאה.",
  },
  {
    label: "תהליך",
    en: "Process",
    desc: "לכל בנייה יש שלבים. תהליך נכון מקצר זמן, מוריד עומס ומייצר ביטחון.",
  },
];

export function Values() {
  const [active, setActive] = useState(0);
  const cur = values[active];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 pinstripe opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[400px] -translate-y-1/2 bg-radial-gold opacity-50" />

      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">ערכי המותג</SectionLabel>
          <h2 className="heading-display mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            על מה אנחנו{" "}
            <span className="text-gold-gradient">עומדים.</span>
          </h2>
          <p className="mt-6 text-lg text-graphite-200">
            עשרה ערכים שמנחים כל החלטה, כל שיעור וכל תוצר שיוצא מהמותג.
          </p>
        </div>

        {/* Active value showcase */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gold-700/25 bg-gradient-to-bl from-graphite-800/70 via-graphite-900/80 to-graphite-900 p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gold-700/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-bordeaux-900/30 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={cur.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative grid gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400">
                    {String(active + 1).padStart(2, "0")} · {cur.en}
                  </span>
                  <h3 className="heading-display mt-3 break-words text-5xl font-extrabold leading-none text-luxe-gradient sm:text-6xl md:text-7xl lg:text-8xl">
                    {cur.label}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-xl leading-relaxed text-graphite-100">
                    {cur.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Value chips selector */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {values.map((v, i) => {
              const isActive = i === active;
              return (
                <button
                  key={v.label}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={[
                    "relative rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-gold-500/60 bg-gold-700/15 text-white shadow-[0_0_24px_-8px_rgba(201,169,97,0.4)]"
                      : "border-white/10 bg-white/[0.02] text-graphite-300 hover:border-gold-700/30 hover:text-white",
                  ].join(" ")}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
