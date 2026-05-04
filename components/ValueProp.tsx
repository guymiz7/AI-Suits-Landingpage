"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const items = [
  { t: "איך לחשוב נכון", d: "על צורך עסקי אמיתי" },
  { t: "איך להפוך רעיון", d: "למבנה עובד וברור" },
  { t: "איך לעבוד עם AI", d: "בצורה שימושית, לא תיאורטית" },
  { t: "איך לבנות נכס", d: "עמוד, תהליך, מערכת או פתרון" },
  { t: "איך לשווק את הערך", d: "ולהציג אותו במדויק" },
  { t: "איך לחבר", d: "בין ידע לביצוע — אין פער" },
];

export function ValueProp() {
  return (
    <section
      id="value"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-40"
    >
      <div className="container-luxe">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>הצעת הערך</SectionLabel>
            <h2 className="heading-display mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              הכשרה מוכוונת{" "}
              <span className="text-gold-gradient">תוצאה</span>
              <br /> ותוצר.
            </h2>
            <p className="mt-6 text-lg text-graphite-200">
              מלמדים אנשים ועסקים איך לבנות באמת. כל שיעור — צעד לתוצר עובד.
            </p>
            <a
              href="#products"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              <span>ראו את המוצרים</span>
              <svg
                width="14"
                height="14"
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
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.div
                  key={it.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative bg-graphite-900/70 p-8 transition-colors hover:bg-graphite-800/70"
                >
                  <span className="font-display text-sm font-semibold text-gold-400">
                    0{i + 1}
                  </span>
                  <h3 className="heading-display mt-3 text-2xl font-bold text-white">
                    {it.t}
                  </h3>
                  <p className="mt-2 text-sm text-graphite-300">{it.d}</p>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
