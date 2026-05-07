"use client";

import { motion } from "framer-motion";
import { RevealWords, FadeUp } from "./Reveal";

const lessons = [
  "שימוש ב־AI לטובת קיצור תהליכים ומקסום איכות התוצאה.",
  "תכנון נכון של העמוד כדי להביא הצעה מדויקת למוצר.",
  "הבנת החשיבה של הלקוח עם מבנה שיווקי שעובד נכון.",
  "חיבור בין מסר, נראות ותוצאה.",
];

export function Curriculum() {
  return (
    <section id="curriculum" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-4xl">
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
              className="mt-14 text-center"
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

          <ul className="mt-10 space-y-0">
            {lessons.map((l, i) => (
              <motion.li
                key={l}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid items-baseline gap-6 sm:grid-cols-[64px_1fr]"
                style={{
                  borderBottom: "1px solid var(--line)",
                  padding: "24px 0",
                }}
              >
                <span
                  style={{
                    fontWeight: 300,
                    fontSize: 28,
                    color: "var(--bordeaux-soft)",
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  className="text-cream"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(17px, 2vw, 21px)",
                    lineHeight: 1.5,
                  }}
                >
                  {l}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
