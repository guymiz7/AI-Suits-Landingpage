"use client";

import Image from "next/image";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

const clients = [
  { src: "/clients/azrieli.png", name: "Azrieli Group" },
  { src: "/clients/discount.png", name: "Discount Bank" },
  { src: "/clients/hagag.png", name: "Hagag Europe" },
  { src: "/clients/meuhedet.png", name: "Meuhedet" },
  { src: "/clients/peres.png", name: "Peres Academic Center" },
  { src: "/clients/levinstein.png", name: "Levinstein" },
  { src: "/clients/smoove.webp", name: "Smoove" },
  { src: "/clients/israel-canada.png", name: "Israel Canada" },
  { src: "/clients/tzemach-hamerman.png", name: "Tzemach Hamerman" },
  { src: "/clients/rotstein.png", name: "Rotstein" },
];

export function ClientsMarquee() {
  const items = [...clients, ...clients];

  return (
    <section
      className="pinstripe-cream relative"
      style={{ paddingTop: 80, paddingBottom: 80, color: "var(--charcoal)" }}
    >
      {/* Top chrome */}
      <div className="container-page chrome" style={{ color: "var(--smoke)", marginBottom: 40 }}>
        <span>— ארגונים שעבדנו איתם</span>
        <span>Trusted by</span>
      </div>

      {/* Section header */}
      <div className="container-page" style={{ marginBottom: 40 }}>
        <h3
          className="font-serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(28px, 3.8vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--charcoal)",
          }}
        >
          ניסיון עם <em className="italic-script" style={{ color: "var(--bordeaux)" }}>חברות וארגונים</em> מובילים.
        </h3>
        <hr style={{ marginTop: 32, border: 0, borderTop: "1px solid var(--line)" }} />
      </div>

      {/* Logos marquee */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32" style={{ background: "linear-gradient(to left, var(--cream), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32" style={{ background: "linear-gradient(to right, var(--cream), transparent)" }} />

        <div className="flex w-max animate-marquee items-center gap-20 px-8 [will-change:transform]">
          {items.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="relative flex h-12 w-32 shrink-0 items-center justify-center sm:h-16 sm:w-44"
              style={{ filter: "grayscale(1)", opacity: 0.45, transition: "all 0.5s" }}
              title={c.name}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(1)";
                e.currentTarget.style.opacity = "0.45";
              }}
            >
              <Image
                src={`${ASSET_PREFIX}${c.src}`}
                alt={c.name}
                fill
                className="object-contain"
                sizes="176px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom chrome */}
      <div className="container-page chrome" style={{ color: "var(--smoke)", marginTop: 40 }}>
        <span>Suits AI</span>
        <span>03 / III</span>
      </div>
    </section>
  );
}
