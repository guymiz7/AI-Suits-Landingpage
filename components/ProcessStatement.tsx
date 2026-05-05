"use client";

import { motion } from "framer-motion";

export function ProcessStatement() {
  return (
    <section
      className="pinstripe-charcoal relative"
      style={{ paddingTop: 140, paddingBottom: 140 }}
    >
      <div className="container-page chrome" style={{ marginBottom: 60, opacity: 0.55 }}>
        <span>— ההצהרה</span>
        <span>Promise</span>
      </div>

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center"
          style={{ maxWidth: 1200 }}
        >
          <div
            className=""
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(140px, 18vw, 260px)",
              lineHeight: 0.6,
              color: "var(--bordeaux-cream)",
              opacity: 0.4,
            }}
          >
            &ldquo;
          </div>
          <h2
            className=""
            style={{
              fontWeight: 300,
              fontSize: "clamp(36px, 5.4vw, 76px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginTop: -40,
            }}
          >
            תהליך <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>קצר</em>.
            <br />
            תוצר <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>אמיתי</em>.
            <br />
            יכולת <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>שימושית</em>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-primary">
            <span>אני רוצה לשמור מקום</span>
            <Arrow />
          </a>
          <a href="#contact-info" className="btn-ghost">
            שלחו לי את כל הפרטים
          </a>
        </motion.div>
      </div>

      <div className="container-page chrome" style={{ marginTop: 100, opacity: 0.55 }}>
        <span>Suits AI · Promise</span>
        <span>02 / II</span>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
