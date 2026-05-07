"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";
import { RevealWords } from "./Reveal";
import { MouseGlowCard } from "./MouseGlowCard";

const items = [
  {
    label: "בעלי עסקים",
    desc: "שרוצים שהעסק שלהם יביא תוצאות טובות יותר.",
    icon: <BuildingIcon />,
  },
  {
    label: "מעצבים, אנשי שיווק ואנשי שירות",
    desc: "שרוצים לתת ערך מוסף ללקוחות שלהם.",
    icon: <PaletteIcon />,
  },
  {
    label: "אנשים ללא ניסיון או רקע בתחום",
    desc: "שרוצים ללמוד את התחום הכי מבוקש היום.",
    icon: <StarIcon />,
  },
];

export function WhoIsItFor() {
  return (
    <section id="audience" className="section">
      <div className="container-page">
        <div className="text-center">
          <h2 className="display-bold text-cream">
            <RevealWords text="למי ההכשרה הזאת מתאימה?" delay={0.1} />
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
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

                <h3
                  className="cube-title mt-7 text-cream"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(20px, 2.4vw, 26px)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it.label}
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

                <span
                  className="hairline-grow absolute bottom-0 right-0 block h-px"
                  style={{ background: "var(--bordeaux)" }}
                />
              </MouseGlowCard>
            </motion.div>
          ))}
        </div>

        <CTAButtons />
      </div>
    </section>
  );
}

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 28V13l11-7 11 7v15" />
      <path d="M11 28v-9h10v9" />
      <line x1="5" y1="28" x2="27" y2="28" />
      <circle cx="16" cy="22" r="1.2" fill="currentColor" />
    </svg>
  );
}
function PaletteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="11" r="5" />
      <path d="M5 27c0-5 5-9 11-9s11 4 11 9" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4 L19 13 L28 13 L21 19 L24 28 L16 22 L8 28 L11 19 L4 13 L13 13 Z" />
    </svg>
  );
}
