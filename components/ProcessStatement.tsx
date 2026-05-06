"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";

export function ProcessStatement() {
  return (
    <section className="section relative" style={{ background: "var(--charcoal)" }}>
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(92,26,43,0.18), transparent 60%)",
        }}
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="display-xl text-cream" style={{ maxWidth: "20ch", margin: "0 auto" }}>
            תהליך קצר.
            <br className="hidden sm:block" /> תוצר אמיתי.
            <br className="hidden sm:block" /> יכולת שימושית.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CTAButtons />
        </motion.div>
      </div>
    </section>
  );
}
