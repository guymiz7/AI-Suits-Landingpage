"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "דף נחיתה מקצועי עם מסר ברור",
    desc: "שמוכר לקהל היעד שלך — ולא נשאר רק רעיון. תוצר מוחשי שאפשר להעלות לאוויר ולהפעיל מיד.",
    icon: <PageIcon />,
  },
  {
    title: "עצמאות ושיטת עבודה מהירה בעזרת AI",
    desc: "הופכים אתכם מצרכנים של שירות לבונים. שיטה שעובדת — לא תלויה במישהו חיצוני.",
    icon: <AutonomyIcon />,
  },
  {
    title: "חיסכון בזמן ובהוצאות על כל שלב קטן",
    desc: "במקום לשלם על כל פסיק מחדש — אתם יודעים מה לבקש, איך לבצע ומה התוצר הנכון.",
    icon: <SavingsIcon />,
  },
];

export function WhatYouGet() {
  return (
    <section
      id="what-you-get"
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
            className="eyebrow-bordeaux"
            style={{ letterSpacing: "0.45em" }}
          >
            התוצרים
          </span>
          <h2 className="heading-display mt-5 font-serif font-light leading-[1.05] text-cream text-4xl sm:text-5xl lg:text-6xl">
            מה יוצא לך מזה בפועל?
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-bordeaux-500 to-transparent" />
        </motion.div>

        {/* Vertical interactive list */}
        <div className="mx-auto mt-20 max-w-4xl">
          <ul className="space-y-5">
            {items.map((it, i) => (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-l from-graphite-900/70 to-graphite-800/40 p-7 transition-all duration-500 hover:border-bordeaux-700/50 hover:bg-graphite-800/60 sm:p-9"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -left-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-bordeaux-700/0 blur-3xl transition-all duration-700 group-hover:bg-bordeaux-700/20" />

                {/* Number indicator on the right (RTL) */}
                <span
                  className="absolute right-6 top-6 font-display text-xs font-light text-graphite-500"
                  style={{ letterSpacing: "0.3em" }}
                >
                  0{i + 1}
                </span>

                <div className="flex items-start gap-6 sm:gap-8">
                  {/* Icon */}
                  <div className="relative shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-graphite-700/60 to-graphite-900 transition-colors group-hover:border-bordeaux-700/40 sm:h-20 sm:w-20">
                      <div className="text-cream-warm transition-transform duration-500 group-hover:scale-110">
                        {it.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="heading-display text-xl font-semibold text-white sm:text-2xl">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-base font-light leading-relaxed text-graphite-300">
                      {it.desc}
                    </p>
                  </div>
                </div>

                {/* Animated bottom progress */}
                <div className="absolute bottom-0 right-0 h-px w-0 bg-bordeaux-500 transition-all duration-700 group-hover:w-full" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* === Icons === */
function PageIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 sm:h-9 sm:w-9"
    >
      <rect x="6" y="4" width="20" height="24" rx="2" />
      <line x1="10" y1="10" x2="22" y2="10" />
      <line x1="10" y1="14" x2="18" y2="14" />
      <rect x="10" y="18" width="12" height="6" rx="1" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

function AutonomyIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 sm:h-9 sm:w-9"
    >
      <path d="M16 4l3 5 5 1-3.5 4 1 6L16 17l-5.5 3 1-6L8 10l5-1z" fill="currentColor" opacity="0.18" />
      <path d="M6 26h20" />
      <path d="M10 22l3 3 7-7" opacity="0.7" />
    </svg>
  );
}

function SavingsIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 sm:h-9 sm:w-9"
    >
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v14M19.5 12.5c-.5-1.6-2-2.5-3.5-2.5-1.7 0-3 1-3 2.4 0 1.4 1.2 2.1 3 2.6 2 .6 3.3 1.4 3.3 3 0 1.6-1.4 2.6-3.3 2.6-1.7 0-3.2-.9-3.7-2.5" />
    </svg>
  );
}
