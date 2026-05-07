"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Reveals a string word-by-word on enter.
 * Each word fades up and translates with a subtle stagger.
 */
export function RevealWords({
  text,
  delay = 0,
  className = "",
  as = "span",
}: {
  text: string;
  delay?: number;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.span;
  if (reduce) {
    return (
      <Tag className={className}>
        {text}
      </Tag>
    );
  }
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      style={{ display: "inline-block" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          variants={
            {
              hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            } satisfies Variants
          }
          transition={{
            duration: 0.85,
            delay: delay + i * 0.045,
            ease: EASE,
          }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}

/**
 * Generic fade + slide up reveal on scroll.
 */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
