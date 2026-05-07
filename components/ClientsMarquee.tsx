"use client";

import Image from "next/image";

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

export function ClientsMarquee() {
  // Triple the array — translateX(-33.333%) loops seamlessly through identical sets
  const items = [...partners, ...partners, ...partners];

  return (
    <section
      aria-label="Partners — לקוחות שעבדנו איתם"
      className="relative overflow-hidden py-12 sm:py-16"
      style={{
        background: "var(--charcoal)",
        borderTop: "1px solid var(--line-soft)",
        borderBottom: "1px solid var(--line-soft)",
      }}
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24"
          style={{
            background: "linear-gradient(to left, var(--charcoal), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24"
          style={{
            background: "linear-gradient(to right, var(--charcoal), transparent)",
          }}
        />

        {/* No gap on the track — spacing is on each item via mx, so width math is exact */}
        <div className="marquee-track flex w-max items-center">
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
