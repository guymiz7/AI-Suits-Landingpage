"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RevealWords } from "./Reveal";

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
    <section
      id="testimonials"
      className="section relative"
      style={{ background: "var(--onyx)" }}
    >
      <div className="container-page relative">
        <div className="text-center">
          <h2 className="display-bold text-cream">
            <RevealWords text="מה הלקוחות שלנו מספרים עלינו" delay={0.1} />
          </h2>
        </div>

        {/* Bigger video grid — 2 cols on tablet, 4 on desktop, with bigger sizes */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
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
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="testimonial-card-runway relative overflow-hidden"
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
            className="testimonial-thumb object-cover"
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

          {/* Bordeaux glow that pulses on hover */}
          <span
            aria-hidden="true"
            className="testimonial-glow pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(122,43,61,0.45), transparent 60%)",
            }}
          />

          {/* Index */}
          <span
            aria-hidden="true"
            className="absolute right-5 top-5"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 32,
              color: "rgba(245,239,230,0.92)",
              letterSpacing: "-0.01em",
            }}
          >
            0{index + 1}
          </span>

          {/* Center play indicator */}
          <span
            aria-hidden="true"
            className="testimonial-play absolute left-1/2 top-1/2 flex items-center justify-center"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--bordeaux)" aria-hidden="true">
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
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(245,239,230,0.92)",
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
