"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThankYouContent() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("suitsai_lead");
      if (raw) {
        const parsed = JSON.parse(raw) as { name?: string };
        if (parsed.name) setName(parsed.name);
      }
    } catch {}
  }, []);

  return (
    <section
      className="relative flex min-h-[100vh] items-center justify-center"
      style={{ paddingTop: 140, paddingBottom: 80 }}
    >
      {/* Subtle halo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        style={{
          height: 700,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.30), transparent 65%)",
        }}
      />

      <div className="container-page text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 flex items-center justify-center"
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(122,43,61,0.35), rgba(92,26,43,0.15))",
            border: "1px solid rgba(122,43,61,0.55)",
            boxShadow:
              "0 0 60px rgba(122,43,61,0.25), inset 0 0 20px rgba(245,239,230,0.05)",
          }}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
          style={{
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(245,239,230,0.6)",
          }}
        >
          Suits AI &mdash; Bootcamp
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="display-hero text-cream"
        >
          {name ? `תודה, ${name}!` : "תודה רבה!"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl"
          style={{
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(245,239,230,0.78)",
          }}
        >
          ההרשמה התקבלה ושמרנו לך מקום.
          <br />
          ניצור איתך קשר במייל עם כל הפרטים על המחזור הקרוב —{" "}
          <strong style={{ color: "var(--cream)", fontWeight: 500 }}>
            25 ו־27 במאי 2026, 18:00–19:30
          </strong>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <Link href="/" className="btn btn-secondary">
            חזרה לעמוד הראשי
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
