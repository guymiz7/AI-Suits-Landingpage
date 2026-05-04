"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  {
    id: "thinking",
    n: "01",
    t: "חשיבה עסקית",
    short: "מתחילים מהשאלה הנכונה",
    long: "להפוך צורך עסקי לשאלה חדה — לפני שכותבים שורת קוד או מריצים מודל. ברגע שהחשיבה נכונה, כל הבנייה נגזרת ממנה אוטומטית.",
    accent: "from-gold-700/30 to-bordeaux-900/20",
    glyph: (
      <svg viewBox="0 0 80 80" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="40" cy="40" r="28" strokeDasharray="3 4" opacity="0.4" />
        <circle cx="40" cy="40" r="18" />
        <circle cx="40" cy="40" r="3" fill="currentColor" />
        <line x1="40" y1="22" x2="40" y2="12" />
        <line x1="40" y1="58" x2="40" y2="68" />
        <line x1="22" y1="40" x2="12" y2="40" />
        <line x1="58" y1="40" x2="68" y2="40" />
      </svg>
    ),
  },
  {
    id: "build",
    n: "02",
    t: "בנייה פרקטית",
    short: "מרעיון למבנה עובד",
    long: "לוקחים רעיון ומפרקים אותו למבנה: תהליכים, נכסים, ממשקים ומערכות. כל מודול עומד בפני עצמו — וכולם עובדים יחד.",
    accent: "from-bordeaux-900/30 to-graphite-700/20",
    glyph: (
      <svg viewBox="0 0 80 80" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="16" y="16" width="20" height="20" rx="2" />
        <rect x="44" y="16" width="20" height="20" rx="2" />
        <rect x="44" y="44" width="20" height="20" rx="2" />
        <rect x="16" y="44" width="20" height="20" rx="2" />
        <line x1="36" y1="26" x2="44" y2="26" strokeDasharray="2 2" />
        <line x1="54" y1="36" x2="54" y2="44" strokeDasharray="2 2" />
        <line x1="44" y1="54" x2="36" y2="54" strokeDasharray="2 2" />
        <line x1="26" y1="44" x2="26" y2="36" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "outputs",
    n: "03",
    t: "תוצרים אמיתיים",
    short: "לא חומר עיוני",
    long: "נכסים, עמודים, מערכות ופתרונות שניתן להראות וליישם. בסוף ההכשרה, יש לך משהו ביד — לא רק רשימת בולטים בראש.",
    accent: "from-gold-900/25 to-graphite-700/20",
    glyph: (
      <svg viewBox="0 0 80 80" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 20 L60 20 L60 56 L40 68 L20 56 Z" />
        <path d="M40 32 L40 68" />
        <path d="M28 38 L40 44 L52 38" />
        <path d="M28 50 L40 56 L52 50" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "language",
    n: "04",
    t: "שפה ברורה",
    short: "ישירה, חדה, עסקית",
    long: "בלי באזז ובלי מונחים מסובכים בלי סיבה. שפה שמסבירה מהר, נותנת כיוון, ומדברת בגובה העיניים של בעל עסק.",
    accent: "from-graphite-700/30 to-bordeaux-900/20",
    glyph: (
      <svg viewBox="0 0 80 80" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 24 L64 24" />
        <path d="M16 36 L52 36" opacity="0.7" />
        <path d="M16 48 L60 48" opacity="0.5" />
        <path d="M16 60 L40 60" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "fusion",
    n: "05",
    t: "שיווק + AI + אוטומציה",
    short: "שלושה עולמות, חליפה אחת",
    long: "המתחרים נותנים אחד מהשלושה. אנחנו תופרים את שלושתם יחד למעטפת עסקית שעובדת — מהאסטרטגיה ועד ההטמעה האחרונה.",
    accent: "from-bordeaux-900/35 to-gold-900/15",
    glyph: (
      <svg viewBox="0 0 80 80" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="30" cy="32" r="14" opacity="0.55" />
        <circle cx="50" cy="32" r="14" opacity="0.55" />
        <circle cx="40" cy="50" r="14" opacity="0.55" />
      </svg>
    ),
  },
];

export function BrandEssence() {
  const [active, setActive] = useState(0);
  const cur = pillars[active];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-32 top-32 hidden h-96 w-96 rounded-full bg-bordeaux-900/15 blur-[140px] md:block" />
      <div className="pointer-events-none absolute -right-40 bottom-20 hidden h-96 w-96 rounded-full bg-gold-900/10 blur-[140px] md:block" />

      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">מהות המותג</SectionLabel>
          <h2 className="heading-display mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            לא עוד קורס.{" "}
            <span className="text-gold-gradient">חליפה אישית</span>{" "}
            שעובדת.
          </h2>
          <p className="mt-6 text-lg text-graphite-200">
            מותג הכשרה פרקטי לבניית מערכות, נכסים ופתרונות עסקיים. חמש אבני
            יסוד מנחות את כל מה שאנחנו עושים.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left — selector list (interactive, not links) */}
          <div className="lg:col-span-5">
            <ul className="space-y-2">
              {pillars.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={[
                        "group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border px-6 py-5 text-right transition-all duration-300",
                        isActive
                          ? "border-gold-700/40 bg-gradient-to-l from-graphite-700/30 to-graphite-900/60"
                          : "border-white/[0.05] bg-graphite-900/30 hover:border-white/15",
                      ].join(" ")}
                    >
                      {/* Active indicator bar */}
                      <span
                        className={[
                          "absolute right-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-l-full transition-all duration-500",
                          isActive ? "bg-gold-500" : "bg-transparent",
                        ].join(" ")}
                      />
                      <span
                        className={[
                          "font-display text-sm font-semibold transition-colors",
                          isActive ? "text-gold-400" : "text-graphite-400",
                        ].join(" ")}
                      >
                        {p.n}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={[
                            "heading-display text-xl font-bold transition-colors",
                            isActive ? "text-white" : "text-graphite-200",
                          ].join(" ")}
                        >
                          {p.t}
                        </h3>
                        <p
                          className={[
                            "mt-0.5 text-sm transition-colors",
                            isActive ? "text-graphite-200" : "text-graphite-400",
                          ].join(" ")}
                        >
                          {p.short}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right — animated detail panel */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.06] bg-graphite-900/60 sm:aspect-[5/4]">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cur.accent} opacity-80`}
              />
              <div className="pointer-events-none absolute inset-0 pinstripe opacity-30" />

              {/* Glyph background */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cur.id + "-glyph"}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="h-[70%] w-[70%] text-gold-300"
                  >
                    {cur.glyph}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="relative flex h-full flex-col justify-end p-8 sm:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cur.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="font-display text-sm font-semibold text-gold-400">
                      {cur.n} · {cur.t}
                    </span>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-white sm:text-xl">
                      {cur.long}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center gap-2">
                  {pillars.map((_, i) => (
                    <span
                      key={i}
                      className={[
                        "h-1 rounded-full transition-all duration-500",
                        i === active
                          ? "w-10 bg-gold-500"
                          : "w-4 bg-white/15",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
