"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { CTAButtons } from "./CTAButtons";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 30 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yLogo = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yLead = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "80px" }}
    >
      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-[400ms] ease-out"
        style={{
          background: `radial-gradient(700px circle at ${pointer.x}% ${pointer.y}%, rgba(122,43,61,0.18), transparent 50%)`,
        }}
      />

      {/* Top gradient halo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        style={{
          height: 800,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.30), transparent 60%)",
        }}
      />

      {/* Static ambient orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 -z-10"
        style={{
          width: 480,
          height: 480,
          background: "rgba(92,26,43,0.10)",
          filter: "blur(120px)",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Couture marker badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-12 inline-flex items-center gap-3"
            style={{
              padding: "8px 16px 8px 18px",
              border: "1px solid rgba(245,239,230,0.14)",
              borderRadius: 999,
              background: "rgba(245,239,230,0.02)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--bordeaux-soft)",
                borderRadius: "50%",
                boxShadow: "0 0 8px var(--bordeaux-soft)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(245,239,230,0.7)",
              }}
            >
              Bootcamp · Edition I
            </span>
          </motion.div>

          {/* Massive logo */}
          <motion.div
            style={{ y: yLogo, opacity }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Logo size="display" />
          </motion.div>

          {/* Subtitle (word reveal) */}
          <motion.h1
            style={{ y: yLead }}
            className="display-md mt-12 text-cream"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.045, delayChildren: 0.5 } },
            }}
          >
            {[
              "בשני",
              "מפגשים",
              "ממוקדים,",
              "בליווי",
              "מלא",
              "—",
              "תלמדו",
              "לבנות",
              "דפי",
              "מכירה",
              "מקצועיים",
              "וממותגים.",
            ].map((w, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block", whiteSpace: "pre" }}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {w}{" "}
              </motion.span>
            ))}
          </motion.h1>

          {/* Lead body */}
          <motion.p
            style={{ y: yLead }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lead mx-auto mt-8 text-center"
          >
            עם דיוק בהצעה, בתכנון ובאסטרטגיה. בלי רקע קודם — חיסכון בזמן,
            בכסף ובתלות באנשי מקצוע.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <CTAButtons />
          </motion.div>

          {/* Hero corner ornaments — tailoring marks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-3"
            style={{ pointerEvents: "none" }}
          >
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(245,239,230,0.4)",
              }}
            >
              גלול לחקור
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "rgba(245,239,230,0.5)" }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade-out into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, var(--onyx), transparent)",
        }}
      />
    </section>
  );
}
