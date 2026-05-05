"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    title: "בעלי עסקים",
    text: "שרוצים שהעסק שלהם יביא תוצאות טובות יותר — בנכסים, בתהליכים ובאסטרטגיה.",
    icon: <OwnerIcon />,
  },
  {
    title: "מעצבים, אנשי שיווק ואנשי שירות",
    text: "שרוצים לתת ערך מוסף ללקוחות שלהם, להרחיב יכולות ולעבוד מהר יותר עם AI.",
    icon: <ProIcon />,
  },
  {
    title: "אנשים ללא ניסיון או רקע בתחום",
    text: "שרוצים ללמוד את התחום הכי מבוקש היום — בצורה פרקטית, מהבסיס ועד תוצר אמיתי.",
    icon: <BeginnerIcon />,
  },
];

export function WhoIsItFor() {
  return (
    <section
      id="audience"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-36"
    >
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="luxury-caps text-[11px] text-bordeaux-300"
            style={{ letterSpacing: "0.45em" }}
          >
            קהל היעד
          </span>
          <h2 className="heading-display mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            למי ההכשרה הזאת{" "}
            <span className="text-bordeaux-gradient">מתאימה?</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-bordeaux-500 to-transparent" />
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-graphite-800/50 to-graphite-900/80 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-bordeaux-700/40 hover:shadow-luxury sm:p-8"
            >
              <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-bordeaux-700/0 blur-3xl transition-all duration-700 group-hover:bg-bordeaux-700/15" />

              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-graphite-800/60 text-cream-200 transition-colors group-hover:border-bordeaux-700/40">
                {a.icon}
              </div>

              <h3 className="heading-display mt-6 text-xl font-semibold leading-tight text-white sm:text-2xl">
                {a.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-graphite-300 sm:text-base">
                {a.text}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-l from-transparent via-bordeaux-700/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnerIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-8 sm:w-8">
      <path d="M5 26V13l11-7 11 7v13" />
      <path d="M11 26v-9h10v9" />
      <line x1="5" y1="26" x2="27" y2="26" />
      <circle cx="16" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ProIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-8 sm:w-8">
      <circle cx="16" cy="11" r="5" />
      <path d="M5 27c0-5 5-9 11-9s11 4 11 9" />
      <path d="M22 6l3-2 1 3-2 1z" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function BeginnerIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-8 sm:w-8">
      <circle cx="16" cy="16" r="11" />
      <path d="M11 16l4 4 8-8" />
      <path d="M16 6c2 0 3.5 1 5 2" opacity="0.4" />
    </svg>
  );
}
