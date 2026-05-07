"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";
import { RevealWords, FadeUp } from "./Reveal";

export function ClosingCTA() {
  return (
    <section
      id="contact"
      className="section relative"
      style={{ background: "var(--charcoal)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(92,26,43,0.22), transparent 60%)",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <span className="section-index">IX · השלב הבא</span>
          </FadeUp>
          <h2
            className="text-cream mt-8"
            style={{
              fontWeight: 300,
              fontSize: "clamp(28px, 4.6vw, 56px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            <RevealWords
              text="אם אתם רוצים לדעת לבנות דפי נחיתה עם מסרים מחודדים שמוכרים, נכסים דיגיטליים שיקדמו תנועה ועבודה עם כלי AI שייתנו לכם יכולת אמיתית לעבוד מהר יותר — זה המקום להתחיל ממנו."
              delay={0.1}
            />
          </h2>

          <FadeUp delay={0.5}>
            <CTAButtons />
          </FadeUp>

          <a id="info" className="block" style={{ height: 0 }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
