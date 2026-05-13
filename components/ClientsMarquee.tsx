"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

const partners = [
  { src: "/clients/azrieli.png", name: "Azrieli Group" },
  { src: "/clients/discount.png", name: "Discount Bank" },
  { src: "/clients/meuhedet.png", name: "Meuhedet" },
  { src: "/clients/lenovo.png", name: "Lenovo" },
  { src: "/clients/herbalife.png", name: "Herbalife" },
  { src: "/clients/yes.png", name: "Yes", invert: true },
  { src: "/clients/peres.png", name: "Peres Academic Center" },
  { src: "/clients/hagag.png", name: "Hagag Europe" },
  { src: "/clients/israel-canada.png", name: "Israel Canada" },
  { src: "/clients/partner-1.png", name: "Partner" },
  { src: "/clients/partner-2.png", name: "Partner" },
  { src: "/clients/partner-3.png", name: "Partner" },
  { src: "/clients/partner-4.png", name: "Partner" },
];

// CSS values mirrored here so we never depend on layout measurements.
// Must stay in sync with .marquee-logo in globals.css.
const SLOT_MOBILE_PX = 96 + 24 * 2; //  96 logo + 24 margin × 2  = 144
const SLOT_DESKTOP_PX = 144 + 36 * 2; // 144 logo + 36 margin × 2 = 216

const SPEED_DESKTOP_MS = 32000; // full set takes 32 s on desktop
const SPEED_MOBILE_MS = 22000; // full set takes 22 s on mobile

export function ClientsMarquee() {
  // Triple the array so the loop is always covered on wide screens
  const items = [...partners, ...partners, ...partners];
  const trackRef = useRef<HTMLDivElement>(null);

  /**
   * Bulletproof marquee — pure requestAnimationFrame, all dimensions are
   * derived from known CSS values (not DOM measurement). Works on every
   * mobile browser regardless of layout timing, image-load state or
   * prefers-reduced-motion preference.
   */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let last = 0;
    let raf = 0;
    let running = true;

    const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

    const tick = (now: number) => {
      if (!running) return;
      if (last === 0) {
        last = now;
        raf = requestAnimationFrame(tick);
        return;
      }
      const delta = now - last;
      last = now;

      const mobile = isMobile();
      const slot = mobile ? SLOT_MOBILE_PX : SLOT_DESKTOP_PX;
      const oneSet = partners.length * slot; // exactly one third of the rendered track
      const duration = mobile ? SPEED_MOBILE_MS : SPEED_DESKTOP_MS;
      const pxPerMs = oneSet / duration;

      position -= pxPerMs * delta;
      // Seamless wrap — when we've scrolled one full set, rebase.
      if (position <= -oneSet) position += oneSet;

      track.style.transform = `translate3d(${position.toFixed(2)}px, 0, 0)`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    // Pause when tab is hidden — saves battery, prevents drift
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section
      aria-label="Partners — לקוחות שעבדנו איתם"
      dir="ltr"
      className="relative overflow-hidden py-12 sm:py-16"
      style={{ background: "var(--onyx)" }}
    >
      <div className="relative" style={{ direction: "ltr" }}>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24"
          style={{
            background: "linear-gradient(to left, var(--onyx), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24"
          style={{
            background: "linear-gradient(to right, var(--onyx), transparent)",
          }}
        />

        <div
          ref={trackRef}
          className="flex w-max items-center"
          style={{
            transform: "translate3d(0, 0, 0)",
            willChange: "transform",
            direction: "ltr",
          }}
        >
          {items.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className={`marquee-logo relative flex shrink-0 items-center justify-center ${
                p.invert ? "marquee-logo-invert" : ""
              }`}
              aria-hidden={i >= partners.length}
              title={p.name}
            >
              <Image
                src={`${ASSET_PREFIX}${p.src}`}
                alt={p.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, 144px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
