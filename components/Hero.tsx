"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { CTAButtons } from "./CTAButtons";

const KEYWORDS = ["מדויק", "אישי", "יוקרתי", "חדשני", "תפור במידה"];

const TAGLINE_ITEMS = [
  "Tailored Intelligence",
  "Precision",
  "AI · Suited For You",
  "Built To Fit",
  "Confidence",
  "Bespoke Systems",
  "Crafted",
  "Innovation",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 30 });
  const [keywordIdx, setKeywordIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yLogo = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yKey = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Cycle keywords
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setKeywordIdx((i) => (i + 1) % KEYWORDS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  // Cursor-following spotlight
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setPointer({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <section
      id="top"
      ref={ref}
      className="pinstripe-bg relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "92px", paddingBottom: "60px" }}
    >
      {/* Animated mesh gradient background */}
      <div className="hero-mesh">
        <div className="hero-mesh-blob b1" />
        <div className="hero-mesh-blob b2" />
        <div className="hero-mesh-blob b3" />
      </div>

      {/* Top halo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        style={{
          height: 880,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.30), transparent 60%)",
        }}
      />

      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-[400ms] ease-out"
        style={{
          background: `radial-gradient(800px circle at ${pointer.x}% ${pointer.y}%, rgba(122,43,61,0.18), transparent 50%)`,
        }}
      />

      {/* Vertical thread ornaments — left & right */}
      <div className="vertical-thread" style={{ left: "8%", top: 100, height: 280 }} />
      <div className="vertical-thread" style={{ right: "8%", top: 200, height: 220, animationDelay: "1s" }} />

      {/* Top tagline marquee — kinetic typography */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-x-0 z-10 overflow-hidden"
        style={{
          top: 0,
          paddingTop: 24,
          paddingBottom: 20,
          borderBottom: "1px solid rgba(245,239,230,0.08)",
          background: "rgba(10,10,11,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="tagline-marquee">
          {[...TAGLINE_ITEMS, ...TAGLINE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-14">
              <span>{item}</span>
              <span className="dot" />
            </span>
          ))}
        </div>
      </motion.div>

      <div className="container-page relative">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Logo (breathing) */}
          <motion.div
            style={{ y: yLogo, opacity }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative pt-12"
          >
            <span className="logo-breathe">
              <Logo size="display" />
            </span>
          </motion.div>

          {/* Stitch line under logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="stitch-line mt-8"
            style={{ width: "min(560px, 80%)" }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 600 2"
              preserveAspectRatio="none"
              style={{ display: "block", width: "100%", height: 2, overflow: "visible" }}
            >
              <line
                x1="0"
                y1="1"
                x2="600"
                y2="1"
                stroke="var(--bordeaux)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Morphing keyword — letter-by-letter stagger */}
          <motion.div
            style={{ y: yKey }}
            className="relative mt-14 flex h-[1.1em] items-center justify-center overflow-visible"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <MorphingKeyword
                key={KEYWORDS[keywordIdx]}
                text={KEYWORDS[keywordIdx]}
              />
            </AnimatePresence>
          </motion.div>

          {/* Subtitle — small, spaced */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="subtitle-spaced mx-auto mt-16 max-w-3xl"
          >
            בשני מפגשים ממוקדים, בליווי מלא — תלמדו לבנות דפי מכירה מקצועיים וממותגים.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl"
            style={{
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(245,239,230,0.55)",
              letterSpacing: "0.02em",
            }}
          >
            עם דיוק בהצעה, בתכנון ובאסטרטגיה. בלי רקע קודם — חיסכון בזמן, בכסף ובתלות באנשי מקצוע.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <CTAButtons />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, var(--onyx), transparent)",
        }}
      />
    </section>
  );
}

/**
 * Morphing keyword with letter-by-letter staggered entrance.
 * Each letter falls in with a slight delay creating a kinetic typography effect.
 */
function MorphingKeyword({ text }: { text: string }) {
  const letters = Array.from(text);
  return (
    <motion.span
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -50,
        filter: "blur(20px)",
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
      }}
      className="display-hero text-cream"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F5EFE6 50%, rgba(245,239,230,0.55) 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="letter-fall"
          style={{
            animationDelay: `${i * 0.05}s`,
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
      <span
        className="letter-fall"
        style={{
          animationDelay: `${letters.length * 0.05}s`,
          display: "inline-block",
          color: "var(--bordeaux-soft)",
          WebkitTextFillColor: "var(--bordeaux-soft)",
        }}
      >
        .
      </span>
    </motion.span>
  );
}
