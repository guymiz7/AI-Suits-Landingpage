"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "דף נחיתה מקצועי",
    desc: "עם מסר ברור שמוכר לקהל היעד שלך.",
    icon: <PageIcon />,
  },
  {
    title: "עצמאות ושיטת עבודה מהירה",
    desc: "בעזרת AI — אתם הופכים מצרכנים לבונים.",
    icon: <CompassIcon />,
  },
  {
    title: "חיסכון בזמן ובהוצאות",
    desc: "על כל שלב קטן בתהליך.",
    icon: <ClockIcon />,
  },
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="eyebrow-bordeaux">— התוצרים</p>
          <h2 className="display-lg mt-5 text-cream">מה יוצא לך מזה בפועל?</h2>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          <ul className="space-y-4">
            {items.map((it, i) => (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="lift-on-hover group relative"
                style={{
                  background: "var(--charcoal)",
                  border: "1px solid var(--line)",
                  padding: "28px",
                }}
              >
                <div className="flex items-start gap-6 sm:gap-8">
                  {/* Icon */}
                  <div
                    className="flex shrink-0 items-center justify-center transition-colors"
                    style={{
                      width: 64,
                      height: 64,
                      background: "var(--onyx)",
                      border: "1px solid var(--line)",
                      color: "var(--cream)",
                    }}
                  >
                    {it.icon}
                  </div>

                  {/* Number + Text */}
                  <div className="flex-1">
                    <div
                      className="eyebrow"
                      style={{
                        marginBottom: 6,
                        fontSize: 10,
                        letterSpacing: "0.28em",
                      }}
                    >
                      0{i + 1}
                    </div>
                    <h3
                      className="text-cream"
                      style={{
                        fontWeight: 400,
                        fontSize: "clamp(20px, 2.4vw, 26px)",
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {it.title}
                    </h3>
                    <p
                      className="mt-2"
                      style={{
                        fontWeight: 300,
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: "rgba(245,239,230,0.65)",
                      }}
                    >
                      {it.desc}
                    </p>
                  </div>
                </div>

                {/* Animated bottom hairline (group hover) */}
                <span
                  className="hairline-grow absolute bottom-0 right-0 block h-px"
                  style={{ background: "var(--bordeaux)" }}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* === Icons (thin stroke, minimal) === */
function PageIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="20" height="24" />
      <line x1="11" y1="11" x2="21" y2="11" />
      <line x1="11" y1="15" x2="18" y2="15" />
      <rect x="11" y="19" width="10" height="6" />
    </svg>
  );
}
function CompassIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11" />
      <path d="M11 21l3-9 9-3-3 9z" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v7l5 3" />
    </svg>
  );
}
