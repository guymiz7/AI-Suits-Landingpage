"use client";

import { motion } from "framer-motion";
import { MouseGlowCard } from "./MouseGlowCard";
import { RevealWords, FadeUp } from "./Reveal";

const reasons = [
  {
    title: "מרצים באקדמיה",
    desc: "הכשרה על ידי מרצים באקדמיה שכבר הכשירו אלפי בעלי עסקים.",
    icon: <AcademyIcon />,
  },
  {
    title: "ארגונים ומותגים גדולים",
    desc: "ניסיון בעבודה עם ארגונים ומותגים גדולים — אותם סטנדרטים לעסק שלך.",
    icon: <BuildingIcon />,
  },
  {
    title: "15 שנות אבולוציה",
    desc: "היכרות מעמיקה עם האבולוציה של עולם הדיגיטל וה־AI ב־15 השנים האחרונות.",
    icon: <PathIcon />,
  },
];

export function WhyUs() {
  return (
    <section
      className="section"
      style={{ background: "var(--onyx)" }}
    >
      <div className="container-page">
        <div className="text-center">
          <h2 className="display-bold text-cream">
            <RevealWords text="למה דווקא אצלנו?" delay={0.1} />
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <MouseGlowCard
                as="div"
                className="lift-on-hover h-full text-center"
                style={{
                  background: "var(--charcoal)",
                  border: "1px solid var(--line)",
                  padding: "44px 28px",
                }}
                glowColor="rgba(122, 43, 61, 0.16)"
              >
                <div
                  className="mx-auto flex items-center justify-center"
                  style={{
                    width: 64,
                    height: 64,
                    background: "var(--charcoal)",
                    border: "1px solid var(--line)",
                    color: "var(--cream)",
                    marginBottom: 28,
                  }}
                >
                  {r.icon}
                </div>
                <h3
                  className="text-cream"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(18px, 2.2vw, 22px)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {r.title}
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
                  {r.desc}
                </p>
              </MouseGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 5l13 6-13 6L3 11z" />
      <path d="M9 13v7c0 2 3 4 7 4s7-2 7-4v-7" />
      <line x1="29" y1="11" x2="29" y2="20" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="9" height="17" />
      <rect x="13" y="4" width="9" height="24" />
      <rect x="22" y="14" width="6" height="14" />
      <line x1="4" y1="28" x2="28" y2="28" />
    </svg>
  );
}
function PathIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24c4 0 4-12 12-12s8 12 12 12" />
      <circle cx="4" cy="24" r="1.5" fill="currentColor" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
      <circle cx="28" cy="24" r="1.5" fill="currentColor" />
    </svg>
  );
}
