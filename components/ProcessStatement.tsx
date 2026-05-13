"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";
import { RevealWords } from "./Reveal";

export function ProcessStatement() {
  return (
    <section
      className="section relative"
      style={{ background: "var(--onyx)" }}
    >
      <div className="container-page relative">
        <div className="text-center">
          <h2
            className="display-xl text-cream"
            style={{ maxWidth: "20ch", margin: "0 auto" }}
          >
            <RevealWords text="תהליך קצר." delay={0} />
            <br className="hidden sm:block" />
            <RevealWords text="תוצר אמיתי." delay={0.3} />
            <br className="hidden sm:block" />
            <RevealWords text="יכולת שימושית." delay={0.6} />
          </h2>
        </div>

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
