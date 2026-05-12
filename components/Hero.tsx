"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RegistrationForm } from "./RegistrationForm";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

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
        <video
          className="hero-video-el"
          src={`${ASSET_PREFIX}/videos/hero.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Bottom gradient transitions video into onyx */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2]"
          style={{
            height: 200,
            background: "linear-gradient(to top, var(--onyx), transparent)",
          }}
        />
      </motion.div>

      {/* Below video: tagline + FOMO headline + lead + form */}
      <div
        className="container-page relative"
        style={{ paddingTop: 72, paddingBottom: 120 }}
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Small uppercase tagline */}
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

          {/* FOMO headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-hero text-cream"
          >
            המחזור הקרוב יוצא לדרך — שריינו את מקומכם.
          </motion.h1>

          {/* Dates / urgency strip */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-3xl"
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.55,
              color: "rgba(245,239,230,0.85)",
              letterSpacing: "0.005em",
            }}
          >
            <strong style={{ fontWeight: 500, color: "var(--cream)" }}>
              25 ו־27 במאי 2026
            </strong>
            {" · "}
            18:00–19:30
            {" · "}
            שני מפגשים בלבד
            <br />
            <span style={{ color: "rgba(245,239,230,0.65)", fontSize: 15, fontWeight: 300 }}>
              מספר המקומות מוגבל. ההטבה תקפה לזמן מוגבל.
            </span>
          </motion.p>

          {/* Registration form replaces CTA buttons */}
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
