"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";

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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2
            className="text-cream"
            style={{
              fontWeight: 300,
              fontSize: "clamp(28px, 4.6vw, 56px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            אם אתם רוצים לדעת לבנות דפי נחיתה עם מסרים מחודדים שמוכרים,
            נכסים דיגיטליים שיקדמו תנועה ועבודה עם כלי AI שייתנו לכם
            יכולת אמיתית לעבוד מהר יותר —{" "}
            <span style={{ color: "var(--cream)" }}>זה המקום להתחיל ממנו.</span>
          </h2>

          <CTAButtons />

          {/* Anchor for "send me details" — info section */}
          <a id="info" className="block" style={{ height: 0 }} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
