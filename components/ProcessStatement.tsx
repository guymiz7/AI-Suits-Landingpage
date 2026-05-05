"use client";

import { motion } from "framer-motion";

const phrases = ["תהליך קצר.", "תוצר אמיתי.", "יכולת שימושית."];

export function ProcessStatement() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Decorative pinstripe */}
      <div className="pointer-events-none absolute inset-0 pinstripe opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[300px] -translate-y-1/2 bg-radial-bordeaux opacity-50" />

      <div className="container-luxe relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center text-3xl font-bold leading-[1.3] text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {phrases.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.18 }}
              className="inline-block"
            >
              <span className={i === 1 ? "text-bordeaux-gradient" : ""}>
                {p}
              </span>
              {i < phrases.length - 1 && <span>&nbsp;&nbsp;</span>}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-primary group">
            <span>אני רוצה לשמור מקום</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1 rtl:rotate-180"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact-info" className="btn-ghost">
            שלחו לי את כל הפרטים
          </a>
        </motion.div>
      </div>
    </section>
  );
}
