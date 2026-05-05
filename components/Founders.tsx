"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

const founders = [
  {
    name: "מתן יעקובסון",
    company: "DIGITECH",
    photo: "/founders/matan.png",
    skills: ["AI יישומי", "שיווק דיגיטלי", "אסטרטגיה", "תוכן ומיתוג", "הכשרה פרקטית"],
    bio: `יזם ומומחה בעולמות ה־AI, הדיגיטל והחינוך הטכנולוגי. חי, נושם וחוקר את עולמות הדיגיטל כבר מעל 11 שנים, במהלכן ליווה מאות בעלי עסקים בתחומים שונים, וכן ניהל מחלקות דיגיטל בחברות ומותגים מהגדולים ביותר.

מתן ראה מקרוב מה המשמעות של ניהול עסק בלי צוות ובלי שיטה מדויקת — וזה עורר אצלו את הצורך להבין איך מנהלים עסק בצורה חכמה עם כלים דיגיטליים, כדי לדעת לנהל עסק באמת בלי צורך בשעות עבודה שלא נגמרות.

כל הידע שלו על עסקים, כסף, שיווק וטכנולוגיה עוזר לעסקים רבים מאוד ליצור סיסטם חכם שמייצר רווח, יציבות וראש שקט.`,
    layout: "image-first" as const,
  },
  {
    name: "גיא מיזינסקי",
    company: "GROUP OCT",
    photo: "/founders/guy.png",
    skills: ["יישומי AI", "אוטומציה עסקית", "אינטגרציות", "בוטים ומערכות", "הטמעה"],
    bio: `יזם, מרצה באקדמיה ומומחה לאוטומציה, AI ותהליכים עסקיים, שמלווה כבר שנים בעלי עסקים, חברות וארגונים בתהליכי צמיחה, דיגיטציה והטמעת טכנולוגיות מתקדמות.

לאורך הדרך גיא הכשיר מאות בעלי עסקים ואנשי מקצוע, עבד עם ארגונים גדולים ומובילים, וצבר ניסיון מעשי עמוק בחיבור בין אסטרטגיה עסקית, שיווק, מכירות, מערכות ואוטומציה.

אחרי שראה מקרוב את האבולוציה של עולם ה־AI לאורך 15 השנים האחרונות — מהימים שבהם הטכנולוגיה הייתה כלי מורכב למעטים ועד לעידן שבו כל עסק יכול לבנות, לדייק ולהאיץ תהליכים בעזרת AI — גיא מביא לבוטקמפ גישה פרקטית, ישירה ומבוססת ניסיון: לא רק להבין מה אפשר לעשות עם AI, אלא לצאת עם תוצר אמיתי, מקצועי ושימושי שאפשר להציג, לשווק ולהמשיך לפתח כבר עכשיו.`,
    layout: "text-first" as const,
  },
];

export function Founders() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-36"
    >
      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="eyebrow-bordeaux"
            style={{ letterSpacing: "0.45em" }}
          >
            המנטורים
          </span>
          <h2 className="heading-display mt-5 font-serif font-light leading-[1.05] text-cream text-4xl sm:text-5xl lg:text-6xl">
            הניסיון שעומד{" "}
            <span className="italic-accent">מאחורי החליפה</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-bordeaux-500 to-transparent" />
        </motion.div>

        <div className="mx-auto mt-20 max-w-6xl space-y-16 lg:space-y-20">
          {founders.map((f, i) => (
            <FounderRow key={f.name} founder={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderRow({
  founder,
  index,
}: {
  founder: (typeof founders)[number];
  index: number;
}) {
  const imageFirst = founder.layout === "image-first";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      {/* Photo block — order swaps to create diagonal */}
      <div
        className={`lg:col-span-5 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
      >
        <PhotoCard photo={founder.photo} name={founder.name} />
      </div>

      {/* Text block */}
      <div
        className={`lg:col-span-7 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-bl from-graphite-800/60 to-graphite-900/90 p-8 lg:p-10">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-bordeaux-900/20 blur-3xl" />

          <span className="eyebrow-bordeaux" style={{ letterSpacing: "0.45em" }}>
            {founder.company}
          </span>
          <h3 className="heading-display mt-2 text-3xl font-bold text-white sm:text-4xl">
            {founder.name}
          </h3>

          <div className="mt-6 space-y-4 text-[15px] font-light leading-relaxed text-graphite-200 sm:text-base">
            {founder.bio.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {founder.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-light text-graphite-200"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-bordeaux-700/40 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

function PhotoCard({ photo, name }: { photo: string; name: string }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08] bg-graphite-900">
      {/* Backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-bordeaux-900/30 via-graphite-900 to-onyx" />

      {/* The photo */}
      <Image
        src={`${ASSET_PREFIX}${photo}`}
        alt={name}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(min-width:1024px) 40vw, 100vw"
        unoptimized
        priority
      />

      {/* Vignette + pinstripe overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 pinstripe opacity-30 mix-blend-overlay" />

      {/* Suit-electric overlay — the "glowing suit" animation */}
      <SuitElectricOverlay />

      {/* Bottom name tag */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <div className="eyebrow-bordeaux" style={{ letterSpacing: "0.5em" }}>
          MENTOR
        </div>
        <div
          className="mt-1 h-px w-12 bg-gradient-to-l from-transparent via-bordeaux-400 to-transparent"
        />
      </div>
    </div>
  );
}

/**
 * Animated overlay simulating an electrified glowing suit:
 * - Outline of suit lapels stitched in white
 * - Pulsing bordeaux glow around shoulders
 * - Periodic flicker like an electrical surge
 */
function SuitElectricOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5]">
      {/* Pulsing radial halo from shoulders */}
      <div className="absolute inset-x-0 top-[35%] mx-auto h-48 w-48 -translate-y-1/2 rounded-full bg-bordeaux-500/40 blur-3xl suit-electric" />

      {/* Suit silhouette outline */}
      <svg
        viewBox="0 0 200 250"
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="suitGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dc8a9b" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#962637" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#5a141d" stopOpacity="0.3" />
          </linearGradient>
          <filter id="elecBlur">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Lapels outline that flickers */}
        <g
          stroke="url(#suitGlow)"
          strokeWidth="1.4"
          filter="url(#elecBlur)"
          className="suit-flicker"
        >
          <path d="M 60 90 L 100 130 L 100 240 L 60 200 Z" />
          <path d="M 140 90 L 100 130 L 100 240 L 140 200 Z" />
          <line x1="100" y1="130" x2="100" y2="240" />
        </g>

        {/* Soft white seam */}
        <g
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.6"
          className="suit-electric"
        >
          <path d="M 60 90 L 100 130 L 100 240 L 60 200 Z" />
          <path d="M 140 90 L 100 130 L 100 240 L 140 200 Z" />
        </g>
      </svg>

      {/* Subtle scan-line shimmer */}
      <div
        className="absolute inset-0 opacity-0 suit-electric"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 45%, rgba(220,138,155,0.12) 50%, transparent 55%, transparent 100%)",
          backgroundSize: "100% 200%",
        }}
      />
    </div>
  );
}
