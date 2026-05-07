"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60]"
      style={{
        height: 2,
        // RTL: progress bar grows from right edge as user scrolls
        transformOrigin: "right",
        scaleX,
        background:
          "linear-gradient(to left, var(--bordeaux-soft), var(--bordeaux))",
        boxShadow: "0 0 12px rgba(92,26,43,0.55)",
      }}
    />
  );
}
