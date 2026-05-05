"use client";

import Image from "next/image";

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

// Configure basePath for assets
const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

export function ClientsMarquee() {
  // Two copies for seamless infinite loop
  const items = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-graphite-900/40 py-14">
      <div className="container-luxe relative">
        <p className="luxury-caps mb-8 text-center text-[10px] text-graphite-400" style={{ letterSpacing: "0.45em" }}>
          ארגונים ומותגים שעבדנו איתם
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-900 to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-16 px-8 [will-change:transform]">
          {items.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="relative flex h-12 w-32 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-16 sm:w-44"
              title={c.name}
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
    </section>
  );
}
