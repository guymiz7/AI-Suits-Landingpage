"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const founders = [
  {
    name: "מתן יעקובסון",
    role: "DigiTech",
    bio: "קרוב לעשור בעולם הדיגיטל. ליווי של מאות בעלי עסקים, חברות וארגונים, הובלת מחלקות דיגיטל, הרצאות באקדמיה ובארגונים.",
    skills: [
      "שיווק דיגיטלי",
      "אסטרטגיה",
      "תוכן ומיתוג",
      "AI יישומי",
      "הכשרה פרקטית",
    ],
    monogram: "מ.י",
  },
  {
    name: "גיא מיזינסקי",
    role: "OCT",
    bio: "אוטומציה עסקית, CRM, תהליכים ובוטים. חשיבה תפעולית, בנייה וחיבור מערכות בעסקים אמיתיים — מהאפיון ועד ההטמעה.",
    skills: [
      "אוטומציה עסקית",
      "CRM",
      "אינטגרציות",
      "בוטים ומערכות",
      "הטמעה",
    ],
    monogram: "ג.מ",
  },
];

export function Founders() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-gold-900/10 blur-[140px]" />

      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">
            מובילי המותג
          </SectionLabel>
          <h2 className="heading-display mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            הניסיון שעומד{" "}
            <span className="text-gold-gradient">מאחורי החליפה.</span>
          </h2>
          <p className="mt-6 text-lg text-graphite-200">
            שנים של ליווי בעלי עסקים, בנייה ומערכות — בעולמות של שיווק,
            אוטומציה ו־AI. כל מה שאנחנו מלמדים, אנחנו עושים בעצמנו בעסקים אמיתיים.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-bl from-graphite-800/60 to-graphite-900/90 p-8 lg:p-10"
            >
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold-700/0 blur-3xl transition-all duration-700 group-hover:bg-gold-700/15" />

              <div className="flex items-start gap-6">
                {/* Monogram suit pocket square */}
                <div className="relative shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-700/30 bg-gradient-to-br from-graphite-700/60 to-graphite-900 shadow-soft">
                    <span className="font-display text-2xl font-extrabold text-gold-gradient">
                      {f.monogram}
                    </span>
                  </div>
                  <span className="absolute -bottom-1 -left-1 h-6 w-6 rounded-md border border-gold-700/40 bg-gold-900/30 backdrop-blur-sm" />
                </div>

                <div className="flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400">
                    {f.role}
                  </span>
                  <h3 className="heading-display mt-2 text-3xl font-bold text-white">
                    {f.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-graphite-200">
                    {f.bio}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {f.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-graphite-200"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-700/35 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
