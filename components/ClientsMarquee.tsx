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

// How long one full set takes to scroll across (smaller = faster)
const SPEED_DESKTOP_MS = 32000;
const SPEED_MOBILE_MS = 22000;

export function ClientsMarquee() {
  // Triple the array for seamless infinite loop
  const items = [...partners, ...partners, ...partners];
  const trackRef = useRef<HTMLDivElement>(null);

  /**
   * JavaScript-driven marquee — bulletproof across iOS Safari, Android
   * Chrome and all desktop browsers. We measure the actual rendered width
   * of one set, then translate by exactly that amount each loop.
   *
   * Why not CSS animation? On some mobile browsers the percentage-based
   * CSS animation gets paused, jittered, or never starts (especially when
   * `prefers-reduced-motion` is enabled silently by low-power mode).
   */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let lastTime = performance.now();
    let raf = 0;
    let running = true;

    const pickDuration = () =>
      window.matchMedia("(max-width: 640px)").matches
        ? SPEED_MOBILE_MS
        : SPEED_DESKTOP_MS;

    let duration = pickDuration();

    const tick = (now: number) => {
      if (!running) return;
      const delta = now - lastTime;
      lastTime = now;

      // One set is exactly 1/3 of the total tripled-track width
      const oneSet = track.scrollWidth / 3;
      if (oneSet > 0) {
        const pxPerMs = oneSet / duration;
        position -= pxPerMs * delta;
        // Wrap when we've moved a full set
        if (position <= -oneSet) position += oneSet;
        track.style.transform = `translate3d(${position}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    // Resync on resize so mobile/desktop speeds switch fluidly
    const onResize = () => {
      duration = pickDuration();
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Pause when tab is hidden (battery)
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        lastTime = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section
      aria-label="Partners — לקוחות שעבדנו איתם"
      className="relative overflow-hidden py-12 sm:py-16"
      style={{ background: "var(--onyx)" }}
    >
      <div className="relative">
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
