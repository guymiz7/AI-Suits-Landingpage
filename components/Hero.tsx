"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CTAButtons } from "./CTAButtons";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

/** Reveal-end window in seconds — how long before video ends the overlay fades in */
const REVEAL_OFFSET = 2.2;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  // Reveal text overlay when video reaches its final moments.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleTimeUpdate = () => {
      if (!v.duration || !isFinite(v.duration)) return;
      if (v.currentTime >= v.duration - REVEAL_OFFSET) {
        setShowOverlay(true);
      }
    };

    const handleEnded = () => setShowOverlay(true);

    v.addEventListener("timeupdate", handleTimeUpdate);
    v.addEventListener("ended", handleEnded);
    v.play().catch(() => {});

    // Failsafe: if video metadata never loads, reveal after 8 seconds
    const fallback = window.setTimeout(() => setShowOverlay(true), 8000);

    return () => {
      v.removeEventListener("timeupdate", handleTimeUpdate);
      v.removeEventListener("ended", handleEnded);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section id="top" ref={ref} className="relative">
      <motion.div className="hero-fullscreen" style={{ y: yShift }}>
        <video
          ref={videoRef}
          className="hero-video-el"
          src={`${ASSET_PREFIX}/videos/hero.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Vignette + bottom gradient — fades in WITH the overlay for legibility */}
        <div
          className="hero-overlay-vignette pointer-events-none absolute inset-0 z-[2] transition-opacity duration-[1400ms] ease-out"
          style={{
            opacity: showOverlay ? 1 : 0,
            background:
              "linear-gradient(to top, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.55) 35%, rgba(10,10,11,0.15) 65%, rgba(10,10,11,0.0) 100%), radial-gradient(ellipse at center, rgba(10,10,11,0.45) 0%, transparent 70%)",
          }}
        />

        {/* Text overlay — fades in at the end of the video */}
        <div
          className={`hero-text-overlay ${showOverlay ? "is-visible" : ""}`}
          aria-hidden={!showOverlay}
        >
          <div className="container-page text-center">
            {/* Small tagline */}
            <p
              className="hero-overlay-tagline"
              style={{ transitionDelay: showOverlay ? "0.1s" : "0s" }}
            >
              Suits AI &mdash; AI Tailored to you
            </p>

            {/* Big Hebrew headline */}
            <h1
              className="display-hero hero-overlay-h1 text-cream"
              style={{ transitionDelay: showOverlay ? "0.3s" : "0s" }}
            >
              בשני מפגשים ממוקדים, בליווי מלא — תלמדו לבנות דפי מכירה מקצועיים וממותגים.
            </h1>

            {/* Lead */}
            <p
              className="hero-overlay-lead"
              style={{ transitionDelay: showOverlay ? "0.5s" : "0s" }}
            >
              עם דיוק בהצעה, בתכנון ובאסטרטגיה. בלי רקע קודם — חיסכון בזמן, בכסף ובתלות באנשי מקצוע.
            </p>

            {/* CTAs */}
            <div
              className="hero-overlay-cta"
              style={{ transitionDelay: showOverlay ? "0.7s" : "0s" }}
            >
              <CTAButtons />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
