"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CTAButtons } from "./CTAButtons";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

  return (
    <section id="top" ref={ref} className="relative">
      {/* Full-bleed cinematic video */}
      <motion.div className="hero-fullscreen" style={{ y: yShift, opacity }}>
        <HeroVideo />
        {/* Bottom gradient transitions video into onyx */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2]"
          style={{
            height: 200,
            background: "linear-gradient(to top, var(--onyx), transparent)",
          }}
        />
      </motion.div>

      {/* Below video: small tagline + main headline + CTAs */}
      <div
        className="container-page relative"
        style={{ paddingTop: 72, paddingBottom: 120 }}
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Small tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(245,239,230,0.55)",
            }}
          >
            Suits AI &mdash; AI Tailored to you
          </motion.p>

          {/* Main Hebrew headline — original content */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-hero text-cream"
          >
            בשני מפגשים ממוקדים, בליווי מלא — תלמדו לבנות דפי מכירה מקצועיים וממותגים.
          </motion.h1>

          {/* Lead body — supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl"
            style={{
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(245,239,230,0.7)",
              letterSpacing: "0.01em",
            }}
          >
            עם דיוק בהצעה, בתכנון ובאסטרטגיה. בלי רקע קודם — חיסכון בזמן, בכסף ובתלות באנשי מקצוע.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <CTAButtons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
