"use client";

import { useEffect, useRef } from "react";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

/**
 * Cinematic hero video — full-bleed, edge-to-edge.
 * No frame, no overlays — pure cinema.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video-el"
      src={`${ASSET_PREFIX}/videos/hero.mp4`}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
