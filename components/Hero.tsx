"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CTAButtons } from "./CTAButtons";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 30 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      style={{ paddingTop: 140, paddingBottom: 100 }}
    >
      {/* Subtle bordeaux halo top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        style={{
          height: 700,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.22), transparent 65%)",
        }}
      />

      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-[400ms] ease-out"
        style={{
          background: `radial-gradient(700px circle at ${pointer.x}% ${pointer.y}%, rgba(122,43,61,0.14), transparent 50%)`,
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-6xl">
          {/* Cinematic video */}
          <motion.div
            style={{ y: yShift, opacity }}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVideo />
          </motion.div>

          {/* Large light headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="display-hero mx-auto mt-16 max-w-4xl text-center text-cream"
            style={{ fontWeight: 200 }}
          >
            בשני מפגשים ממוקדים, בליווי מלא — תלמדו לבנות דפי מכירה מקצועיים וממותגים.
          </motion.h1>

          {/* Lead body — smaller, more spaced */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl text-center"
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
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
