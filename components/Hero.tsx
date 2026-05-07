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
    }, 2400);
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
      style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "60px" }}
    >
      {/* Cursor-following bordeaux spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-[400ms] ease-out"
        style={{
          background: `radial-gradient(800px circle at ${pointer.x}% ${pointer.y}%, rgba(122,43,61,0.22), transparent 50%)`,
        }}
      />

      {/* Top halo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        style={{
          height: 880,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.34), transparent 60%)",
        }}
      />

      {/* Floating ambient orbs */}
      <motion.div
        animate={
          reduce
            ? {}
            : {
                x: [0, 40, 0],
                y: [0, -30, 0],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-1/3 -z-10"
        style={{
          width: 520,
          height: 520,
          background: "rgba(92,26,43,0.18)",
          filter: "blur(140px)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={
          reduce
            ? {}
            : {
                x: [0, -30, 0],
                y: [0, 40, 0],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="pointer-events-none absolute -right-24 top-2/3 -z-10"
        style={{
          width: 460,
          height: 460,
          background: "rgba(245,239,230,0.04)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Massive logo */}
          <motion.div
            style={{ y: yLogo, opacity }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative pt-12"
          >
            <Logo size="display" />
          </motion.div>

          {/* Stitch line — animated dashed hairline beneath the wordmark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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

          {/* Morphing keyword — the WOW moment */}
          <motion.div
            style={{ y: yKey }}
            className="relative mt-12 flex h-[1.1em] items-center justify-center overflow-visible"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={KEYWORDS[keywordIdx]}
                initial={{ opacity: 0, y: 60, filter: "blur(24px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, y: -60, filter: "blur(24px)" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
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
                {KEYWORDS[keywordIdx]}.
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Subtitle — small, spaced, premium */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="subtitle-spaced mx-auto mt-14 max-w-3xl"
          >
            בשני מפגשים ממוקדים, בליווי מלא — תלמדו לבנות דפי מכירה מקצועיים וממותגים.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.9, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
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
