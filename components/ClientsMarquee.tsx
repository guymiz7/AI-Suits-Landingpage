"use client";

import Image from "next/image";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

const partners = [
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
  // Duplicate items for seamless infinite loop
  const items = [...partners, ...partners];

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
        {/* Edge fades */}
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

        <div className="flex w-max animate-marquee items-center gap-10 px-4 sm:gap-16 sm:px-8">
          {items.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="marquee-logo relative flex shrink-0 items-center justify-center"
              aria-hidden={i >= partners.length}
              title={p.name}
            >
              <Image
                src={`${ASSET_PREFIX}${p.src}`}
                alt={p.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, 144px"
                style={{ filter: "grayscale(1) brightness(1.4)", opacity: 0.65 }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
