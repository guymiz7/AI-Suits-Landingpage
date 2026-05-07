"use client";

import { motion } from "framer-motion";
import { MouseGlowCard } from "./MouseGlowCard";
import { RevealWords } from "./Reveal";

const items = [
  {
    title: "דף נחיתה מקצועי",
    desc: "עם מסר ברור שמוכר לקהל היעד שלך.",
    icon: <PageIcon />,
  },
  {
    title: "עצמאות ושיטת עבודה מהירה",
    desc: "בעזרת AI — אתם הופכים מצרכנים לבונים.",
    icon: <BoltIcon />,
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
        <div className="text-center">
          <h2 className="display-bold text-cream">
            <RevealWords text="מה יוצא לך מזה בפועל?" delay={0.1} />
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <MouseGlowCard
                as="div"
                className="interactive-cube group relative h-full"
                style={{
                  background: "var(--charcoal)",
                  border: "1px solid var(--line)",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 280,
                }}
              >
                {/* Number */}
                <span
                  className="absolute right-7 top-7"
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: "0.32em",
                    color: "rgba(245,239,230,0.4)",
                  }}
                >
                  0{i + 1}
                </span>

                {/* Icon */}
                <div
                  className="cube-icon flex shrink-0 items-center justify-center transition-all duration-500"
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

                {/* Text — reveals more on hover */}
                <h3
                  className="cube-title mt-7 text-cream"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(20px, 2.4vw, 26px)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontWeight: 300,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(245,239,230,0.65)",
                  }}
                >
                  {it.desc}
                </p>

                {/* Hover hairline */}
                <span
                  className="hairline-grow absolute bottom-0 right-0 block h-px"
                  style={{ background: "var(--bordeaux)" }}
                />
              </MouseGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

/** New icon for "עצמאות ושיטת עבודה מהירה" — lightning bolt for speed */
function BoltIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4 L7 18 L14 18 L13 28 L25 12 L17 12 L18 4 Z" />
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
