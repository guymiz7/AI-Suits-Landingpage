"use client";

import { useEffect, useRef } from "react";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

/**
 * Cinematic hero video — full-bleed AI/suit motion piece.
 * The actual file is in public/videos/hero.mp4
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  // Ensure autoplay starts (some browsers need a nudge)
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => {
        /* user must interact */
      });
    };
    tryPlay();
  }, []);

  return (
    <div className="hero-video-frame" aria-hidden="true">
      <video
        ref={ref}
        className="hero-video-el"
        src={`${ASSET_PREFIX}/videos/hero.mp4`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Cinematic vignette */}
      <div className="hv-vignette" />

      {/* Frame corner marks */}
      <span className="hv-mark tl" />
      <span className="hv-mark tr" />
      <span className="hv-mark bl" />
      <span className="hv-mark br" />

      {/* Bottom info strip */}
      <div className="hv-info">
        <span className="hv-info-dot" />
        <span>AI · Tailored to you</span>
        <span className="hv-info-time">SUITS AI / 01</span>
      </div>
    </div>
  );
}
