"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      className="pinstripe-onyx relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "180px", paddingBottom: "100px" }}
    >
      {/* Soft bordeaux halo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] animate-glow-pulse"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.22), transparent 65%)" }}
      />

      <div className="container-page relative grid min-h-[calc(100vh-280px)] grid-rows-[auto_1fr_auto] gap-10">
        {/* Top mark — Brand Book cover style */}
        <motion.header
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="caption flex items-center gap-3" style={{ opacity: 0.7 }}>
            <span style={{ width: 6, height: 6, background: "currentColor", borderRadius: "50%" }} />
            <span>Bootcamp</span>
            <span style={{ width: 6, height: 6, background: "currentColor", borderRadius: "50%" }} />
            <span>Edition I / 2026</span>
          </div>
        </motion.header>

        {/* Mid — display headline + lead */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="caption" style={{ marginBottom: 28 }}>— תפור למידה</div>
            <Logo size="display" />
            <p
              className="lead"
              style={{ marginTop: 42, color: "rgba(245,239,230,0.78)", maxWidth: "54ch" }}
            >
              בוטקמפ פרקטי לבניית דפי מכירה מקצועיים עם <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>AI</em>.
              שני מפגשים ממוקדים. תוצר מוחשי. יכולת אמיתית — בלי רקע קודם, בלי תלות באנשי מקצוע.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" className="btn-primary">
              <span>אני רוצה לשמור מקום</span>
              <Arrow />
            </a>
            <a href="#contact-info" className="btn-ghost">
              שלחו לי את כל הפרטים
            </a>
          </motion.div>
        </div>

        {/* Footer — document meta grid */}
        <motion.footer
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ paddingBottom: 24 }}
        >
          <hr className="hairline" style={{ marginBottom: 32 }} />
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {[
              { l: "Document", v: "Bootcamp Manual" },
              { l: "Edition", v: "First / 2026" },
              { l: "Mentors", v: "מתן · גיא" },
              { l: "Format", v: "שני מפגשים" },
            ].map((m) => (
              <div key={m.l}>
                <div className="caption">{m.l}</div>
                <p className="mt-2 text-lg font-light" style={{ lineHeight: 1.3 }}>
                  {m.v}
                </p>
              </div>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: "scaleX(-1)" }}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
