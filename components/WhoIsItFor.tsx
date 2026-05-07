"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";
import { RevealWords, FadeUp } from "./Reveal";

const items = [
  {
    label: "בעלי עסקים",
    desc: "שרוצים שהעסק שלהם יביא תוצאות טובות יותר.",
  },
  {
    label: "מעצבים, אנשי שיווק ואנשי שירות",
    desc: "שרוצים לתת ערך מוסף ללקוחות שלהם.",
  },
  {
    label: "אנשים ללא ניסיון או רקע בתחום",
    desc: "שרוצים ללמוד את התחום הכי מבוקש היום.",
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

        <div className="mx-auto mt-16 max-w-5xl">
          <ul className="space-y-3">
            {items.map((it, i) => (
              <motion.li
                key={it.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid items-baseline gap-6 sm:grid-cols-[80px_1fr] sm:gap-8"
                style={{
                  borderBottom: "1px solid var(--line)",
                  padding: "26px 0",
                }}
              >
                <span
                  className="eyebrow"
                  style={{ fontSize: 11, letterSpacing: "0.25em" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <p
                    className="text-cream"
                    style={{
                      fontWeight: 400,
                      fontSize: "clamp(20px, 2.6vw, 28px)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {it.label}
                  </p>
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
              </motion.li>
            ))}
          </ul>
        </div>

        <CTAButtons />
      </div>
    </section>
  );
}
