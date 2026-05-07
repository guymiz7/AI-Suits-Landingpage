"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RevealWords, FadeUp } from "./Reveal";

type Video = {
  id: string;
  label: string;
};

const videos: Video[] = [
  { id: "aXxdiMvuWPE", label: "ממליץ 01" },
  { id: "rzsaO_cVPZU", label: "ממליץ 02" },
  { id: "oC3PWTPb8XY", label: "ממליץ 03" },
  { id: "n-gFFU44MLU", label: "ממליץ 04" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-0"
        style={{
          height: 240,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.14), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="text-center">
          <FadeUp>
            <span className="section-index">II · ממליצים</span>
          </FadeUp>
          <h2 className="display-lg mt-6 text-cream">
            <RevealWords text="סיפורים אמיתיים, מהבוטקמפ." delay={0.1} />
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {videos.map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="testimonial-card relative overflow-hidden"
      style={{
        background: "var(--charcoal)",
        border: "1px solid var(--line)",
        aspectRatio: "9 / 16",
      }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&modestbranding=1&rel=0`}
          title={video.label}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`הפעל סרטון: ${video.label}`}
          className="testimonial-trigger absolute inset-0 block w-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.label}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            unoptimized
            className="object-cover transition-transform duration-[1200ms] ease-out"
            style={{ objectPosition: "center" }}
          />

          {/* Top + bottom vignette */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.15) 35%, rgba(10,10,11,0.0) 60%, rgba(10,10,11,0.4) 100%)",
            }}
          />

          {/* Index */}
          <span
            aria-hidden="true"
            className="absolute right-4 top-4"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 28,
              color: "rgba(245,239,230,0.85)",
              letterSpacing: "-0.01em",
            }}
          >
            0{index + 1}
          </span>

          {/* Center play indicator */}
          <span
            aria-hidden="true"
            className="testimonial-play absolute left-1/2 top-1/2 flex items-center justify-center"
            style={{
              width: 64,
              height: 64,
              transform: "translate(-50%, -50%)",
              background: "rgba(245,239,230,0.94)",
              borderRadius: "50%",
              transition: "transform 0.5s ease, background 0.3s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--bordeaux)" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          {/* Bottom label */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 p-5"
          >
            <span
              style={{
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(245,239,230,0.85)",
              }}
            >
              צפה בסרטון →
            </span>
          </span>
        </button>
      )}
    </motion.div>
  );
}
