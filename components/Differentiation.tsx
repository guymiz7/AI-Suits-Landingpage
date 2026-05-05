"use client";

import { motion } from "framer-motion";

const bullets = [
  {
    title: "מרצים באקדמיה",
    desc: "הכשרה על ידי מרצים באקדמיה שכבר הכשירו אלפי בעלי עסקים — לא תיאוריה גנרית, אלא ידע מעודכן ופרקטי.",
    icon: <AcademyIcon />,
  },
  {
    title: "ניסיון עם מותגים גדולים",
    desc: "ניסיון בעבודה עם ארגונים, חברות ומותגים מובילים. אותם סטנדרטים — מותאמים למידה של עסק אחד.",
    icon: <EnterpriseIcon />,
  },
  {
    title: "15 שנים של אבולוציה",
    desc: "היכרות מעמיקה עם האבולוציה של עולם הדיגיטל וה־AI ב־15 השנים האחרונות — מבית מלאכה לתעשייה.",
    icon: <EvolutionIcon />,
  },
];

export function Differentiation() {
  return (
    <section
      id="differentiation"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-radial-bordeaux opacity-40" />

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
            הבידול
          </span>
          <h2 className="heading-display mt-5 font-serif font-light leading-[1.05] text-cream text-4xl sm:text-5xl lg:text-6xl">
            למה דווקא{" "}
            <span className="italic-accent">אצלנו?</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-bordeaux-500 to-transparent" />
          <p className="mt-6 text-base font-light leading-relaxed text-graphite-300 sm:text-lg">
            מותגים נותנים קורסים. אנחנו מביאים יותר משני עשורים של עבודה עם
            עסקים, ארגונים והוראה — בלעדיים ומותאמים בדיוק לעסק שלך.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {bullets.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-graphite-800/50 to-graphite-900/80 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-bordeaux-700/40 hover:shadow-luxury"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-bordeaux-700/0 blur-3xl transition-all duration-700 group-hover:bg-bordeaux-700/20" />

              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-graphite-800/60 text-cream-warm transition-all duration-500 group-hover:border-bordeaux-700/40 group-hover:scale-110">
                {b.icon}
              </div>

              <h3 className="heading-display mt-6 text-xl font-semibold leading-tight text-white sm:text-2xl">
                {b.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-graphite-300">
                {b.desc}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-l from-transparent via-bordeaux-700/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M16 4l13 6-13 6L3 10z" />
      <path d="M9 13v7c0 2 3 4 7 4s7-2 7-4v-7" />
      <line x1="29" y1="10" x2="29" y2="20" />
    </svg>
  );
}

function EnterpriseIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="4" y="11" width="9" height="17" />
      <rect x="13" y="4" width="9" height="24" />
      <rect x="22" y="14" width="6" height="14" />
      <line x1="4" y1="28" x2="28" y2="28" />
      <line x1="16" y1="8" x2="19" y2="8" />
      <line x1="16" y1="14" x2="19" y2="14" />
      <line x1="16" y1="20" x2="19" y2="20" />
    </svg>
  );
}

function EvolutionIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M4 24c4 0 4-12 12-12s8 12 12 12" />
      <circle cx="4" cy="24" r="1.5" fill="currentColor" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
      <circle cx="28" cy="24" r="1.5" fill="currentColor" />
      <line x1="4" y1="28" x2="28" y2="28" opacity="0.4" />
    </svg>
  );
}
