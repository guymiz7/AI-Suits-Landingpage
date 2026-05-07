"use client";

import { CSSProperties, MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Linear-style cursor-following glow + border highlight.
 * Combine with `lift-on-hover` for the full premium card feel.
 */
export function MouseGlowCard({
  children,
  className,
  style,
  glowSize = 420,
  glowColor = "rgba(122, 43, 61, 0.20)",
  borderColor = "rgba(122, 43, 61, 0.55)",
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glowSize?: number;
  glowColor?: string;
  borderColor?: string;
  as?: "div" | "li" | "article";
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style">) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as never}
      onMouseMove={handleMove}
      className={cn("mouse-glow-card", className)}
      style={
        {
          ...style,
          "--glow-size": `${glowSize}px`,
          "--glow-color": glowColor,
          "--glow-border": borderColor,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
}
