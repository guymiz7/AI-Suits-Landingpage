"use client";

import { motion } from "framer-motion";
import { MouseGlowCard } from "./MouseGlowCard";
import { RevealWords, FadeUp } from "./Reveal";

const lessons = [
  {
    title: "AI לקיצור תהליכים",
    desc: "שימוש ב־AI לטובת קיצור תהליכים ומקסום איכות התוצאה.",
    icon: <BoltIcon />,
  },
  {
    title: "תכנון נכון של העמוד",
    desc: "תכנון נכון של העמוד כדי להביא הצעה מדויקת למוצר.",
    icon: <BlueprintIcon />,
  },
  {
    title: "החשיבה של הלקוח",
    desc: "הבנת החשיבה של הלקוח עם מבנה שיווקי שעובד נכון.",
    icon: <BrainIcon />,
  },
  {
    title: "מסר · נראות · תוצאה",
    desc: "חיבור בין מסר, נראות ותוצאה — מקצה לקצה.",
    icon: <FlowIcon />,
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-5xl">
          <h2
            className="display-bold text-cream text-center"
            style={{ maxWidth: "26ch", margin: "0 auto" }}
          >
            <RevealWords
              text="ההכשרה הזו לא עוסקת רק בבנייה. היא תעזור לכם להבין מה לבנות ואיך לבנות את זה נכון."
              delay={0.1}
            />
          </h2>

          <FadeUp delay={0.6}>
            <p
              className="mt-12 text-center"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(245,239,230,0.5)",
              }}
            >
              מה תלמדו בשני המפגשים
            </p>
          </FadeUp>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <MouseGlowCard
                as="div"
                className="interactive-cube group relative h-full"
                style={{
                  background: "var(--charcoal)",
                  border: "1px solid var(--line)",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 260,
                }}
              >
                <span
                  className="absolute right-6 top-6"
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    letterSpacing: "0.32em",
                    color: "rgba(245,239,230,0.4)",
                  }}
                >
                  0{i + 1}
                </span>

                <div
                  className="cube-icon flex shrink-0 items-center justify-center transition-all duration-500"
                  style={{
                    width: 56,
                    height: 56,
                    background: "var(--onyx)",
                    border: "1px solid var(--line)",
                    color: "var(--cream)",
                  }}
                >
                  {l.icon}
                </div>

                <h3
                  className="cube-title mt-6 text-cream"
                  style={{
                    fontWeight: 400,
                    fontSize: 19,
                    lineHeight: 1.3,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {l.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontWeight: 300,
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    color: "rgba(245,239,230,0.62)",
                  }}
                >
                  {l.desc}
                </p>

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

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4 L7 18 L14 18 L13 28 L25 12 L17 12 L18 4 Z" />
    </svg>
  );
}
function BlueprintIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="22" height="22" />
      <line x1="5" y1="13" x2="27" y2="13" />
      <line x1="13" y1="13" x2="13" y2="27" />
      <rect x="17" y="17" width="6" height="6" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11" />
      <path d="M11 12c2-2 8-2 10 0" />
      <path d="M11 16c2-2 8-2 10 0" />
      <path d="M11 20c2-2 8-2 10 0" />
    </svg>
  );
}
function FlowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="16" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <circle cx="16" cy="24" r="2.5" />
      <circle cx="26" cy="16" r="2.5" />
      <line x1="8.5" y1="16" x2="13.5" y2="9" />
      <line x1="8.5" y1="16" x2="13.5" y2="23" />
      <line x1="18.5" y1="9" x2="23.5" y2="16" />
      <line x1="18.5" y1="23" x2="23.5" y2="16" />
    </svg>
  );
}
