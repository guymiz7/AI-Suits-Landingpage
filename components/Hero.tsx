"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { CTAButtons } from "./CTAButtons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "160px", paddingBottom: "100px" }}
    >
      {/* Subtle bordeaux halo top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 animate-glow-pulse"
        style={{
          height: 700,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.28), transparent 65%)",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Logo display */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <Logo size="display" />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="eyebrow-bordeaux"
          >
            Suits&nbsp;AI&nbsp;Bootcamp
          </motion.p>

          {/* Headline subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="display-lg mt-7 text-cream"
            style={{ maxWidth: "22ch" }}
          >
            בשני מפגשים ממוקדים, בליווי מלא משלב ההתקנה, תלמדו לבנות
            דפי מכירה מקצועיים וממותגים.
          </motion.h1>

          {/* Lead body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lead mt-8"
          >
            עם דיוק בהצעה, בתכנון ובאסטרטגיה — בלי רקע קודם, עם חיסכון
            בזמן, בכסף ובתלות באנשי מקצוע.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="w-full"
          >
            <CTAButtons />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--onyx), transparent)",
        }}
      />
    </section>
  );
}
