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
      <motion.div
        className="hero-fullscreen"
        style={{ y: yShift, opacity }}
      >
        <HeroVideo />
        {/* Subtle bottom gradient for transition into text section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2]"
          style={{
            height: 200,
            background:
              "linear-gradient(to top, var(--onyx), transparent)",
          }}
        />
      </motion.div>

      {/* Text + CTAs below */}
      <div
        className="container-page relative"
        style={{ paddingTop: 96, paddingBottom: 120 }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-tagline text-cream"
          >
            Suits&nbsp;AI&nbsp;&mdash;&nbsp;AI&nbsp;Tailored&nbsp;to&nbsp;you
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <CTAButtons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
