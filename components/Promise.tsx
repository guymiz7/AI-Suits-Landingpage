"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const outcomes = [
  { k: "הבנה", v: "ברורה יותר על מה שאתה בונה" },
  { k: "חשיבה", v: "עסקית חדה — לא טכנית בלבד" },
  { k: "יכולת", v: "מעשית לבנות נכסים ומערכות" },
  { k: "תוצרים", v: "אמיתיים שאפשר להראות וליישם" },
  { k: "שפה", v: "מקצועית מול לקוחות וצוותים" },
  { k: "מסוגלות", v: "גבוהה לפעול נכון בעולם של AI" },
];

export function Promise() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-spot opacity-60" />
      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">
            ההבטחה של המותג
          </SectionLabel>
          <h2 className="heading-display mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            מי שנכנס ל־AI Suits — <br />
            <span className="text-gold-gradient">יוצא אחר</span>.
          </h2>
          <p className="mt-6 text-lg text-graphite-200">
            הכוונה היא לדיוק לאורך כל הדרך: בחשיבה, באפיון, בתכנון, בבנייה,
            באסטרטגיה, בשיווק, במכירות ובהצגת ערך.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="surface-card surface-card-hover group p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-900/20 text-gold-400 transition-colors group-hover:bg-bordeaux-700/30 group-hover:text-gold-300">
                  <CheckIcon />
                </span>
                <span className="font-display text-2xl font-bold text-white">
                  {o.k}
                </span>
              </div>
              <p className="mt-4 text-base text-graphite-200">{o.v}</p>
              <div className="divider-gold mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
