"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MouseGlowCard } from "./MouseGlowCard";
import { RevealWords } from "./Reveal";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

type Mentor = {
  company: string;
  name: string;
  photo: string;
  bio: string;
  tags: string[];
  layout: "image-first" | "text-first";
};

const mentors: Mentor[] = [
  {
    company: "DIGITECH",
    name: "מתן יעקובסון",
    photo: "/founders/matan.png",
    bio: `יזם ומומחה בעולמות ה־AI, הדיגיטל והחינוך הטכנולוגי. חי, נושם וחוקר את עולמות הדיגיטל כבר מעל 11 שנים, במהלכן ליווה מאות בעלי עסקים בתחומים שונים, וכן ניהל מחלקות דיגיטל בחברות ומותגים מהגדולים ביותר.

מתן ראה מקרוב מה המשמעות של ניהול עסק בלי צוות ובלי שיטה מדויקת — וזה עורר אצלו את הצורך להבין איך מנהלים עסק בצורה חכמה עם כלים דיגיטליים, כדי לדעת לנהל עסק באמת בלי צורך בשעות עבודה שלא נגמרות.

כל הידע שלו על עסקים, כסף, שיווק וטכנולוגיה עוזר לעסקים רבים מאוד ליצור סיסטם חכם שמייצר רווח, יציבות וראש שקט.`,
    tags: ["שיווק דיגיטלי", "תוכן", "אסטרטגיה", "יישומי AI"],
    layout: "image-first",
  },
  {
    company: "OCT GROUP",
    name: "גיא מיזינסקי",
    photo: "/founders/guy.png",
    bio: `יזם, מרצה באקדמיה ומומחה לאוטומציה, AI ותהליכים עסקיים, שמלווה כבר שנים בעלי עסקים, חברות וארגונים בתהליכי צמיחה, דיגיטציה והטמעת טכנולוגיות מתקדמות.

לאורך הדרך גיא הכשיר מאות בעלי עסקים ואנשי מקצוע, עבד עם ארגונים גדולים ומובילים, וצבר ניסיון מעשי עמוק בחיבור בין אסטרטגיה עסקית, שיווק, מכירות, מערכות ואוטומציה.

אחרי שראה מקרוב את האבולוציה של עולם ה־AI לאורך 15 השנים האחרונות — מהימים שבהם הטכנולוגיה הייתה כלי מורכב למעטים ועד לעידן שבו כל עסק יכול לבנות, לדייק ולהאיץ תהליכים בעזרת AI — גיא מביא לבוטקמפ גישה פרקטית, ישירה ומבוססת ניסיון: לא רק להבין מה אפשר לעשות עם AI, אלא לצאת עם תוצר אמיתי, מקצועי ושימושי שאפשר להציג, לשווק ולהמשיך לפתח כבר עכשיו.`,
    tags: ["אוטומציה עסקית", "טרנספורמציה דיגיטלית", "אפיון והטמעת מערכות", "יישומי AI"],
    layout: "text-first",
  },
];

export function Founders() {
  return (
    <section id="mentors" className="section relative overflow-hidden">
      {/* Cinematic backdrop animation */}
      <FoundersBackdrop />

      <div className="container-page relative">
        <div className="text-center">
          <h2 className="display-bold text-cream">
            <RevealWords text="הניסיון שעומד מאחורי החליפה." delay={0.1} />
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-16 lg:space-y-24">
          {mentors.map((m, i) => (
            <MentorRow key={m.name} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MentorRow({ m, index }: { m: Mentor; index: number }) {
  const imageFirst = m.layout === "image-first";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12"
    >
      {/* Photo */}
      <div className={`lg:col-span-5 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
        <div
          className="founder-photo relative overflow-hidden"
          style={{
            background: "var(--charcoal)",
            border: "1px solid var(--line)",
          }}
        >
          <Image
            src={`${ASSET_PREFIX}${m.photo}`}
            alt={`תמונת ${m.name}`}
            fill
            className="object-cover object-center"
            sizes="(min-width:1024px) 40vw, 100vw"
            unoptimized
            priority={index === 0}
          />
        </div>
      </div>

      {/* Text card */}
      <div className={`lg:col-span-7 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
        <MouseGlowCard
          className="h-full"
          style={{
            background: "var(--charcoal)",
            border: "1px solid var(--line)",
            padding: "clamp(24px, 4vw, 44px)",
          }}
        >
          <p
            className="eyebrow-bordeaux"
            style={{ fontSize: 10, letterSpacing: "0.36em" }}
          >
            {m.company}
          </p>
          <h3
            className="mt-3 text-cream"
            style={{
              fontWeight: 300,
              fontSize: "clamp(28px, 3.6vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
            }}
          >
            {m.name}
          </h3>

          <hr className="hairline" style={{ marginTop: 24, marginBottom: 24 }} />

          <div className="space-y-4">
            {m.bio.split("\n\n").map((p, k) => (
              <p
                key={k}
                style={{
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "rgba(245,239,230,0.78)",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {m.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontWeight: 400,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "8px 14px",
                  border: "1px solid var(--line)",
                  color: "rgba(245,239,230,0.7)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </MouseGlowCard>
      </div>
    </motion.div>
  );
}

/**
 * Cinematic backdrop for Founders section — same DNA as HeroVideo (SVG version)
 * but as a subtle ambient layer behind the mentor cards.
 */
function FoundersBackdrop() {
  // Pulsing dot grid
  const dotCols = 32;
  const dotRows = 18;
  const dots: { x: number; y: number; i: number }[] = [];
  for (let r = 0; r < dotRows; r++) {
    for (let c = 0; c < dotCols; c++) {
      dots.push({ x: c * 30 + 15, y: r * 30 + 12, i: r * dotCols + c });
    }
  }
  const particles = Array.from({ length: 20 }, (_, i) => ({
    cx: ((i * 173) % 940) + 10,
    cy: ((i * 91) % 540) + 10,
    delay: (i * 0.27) % 8,
    duration: 14 + (i % 5) * 2,
    r: 1.2 + (i % 3) * 0.4,
  }));

  return (
    <div className="founders-backdrop pointer-events-none absolute inset-0 -z-0">
      {/* Bordeaux halo */}
      <div
        className="absolute inset-x-0 top-0 -z-10"
        style={{
          height: 800,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.16), transparent 65%)",
        }}
      />

      {/* SVG layer */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 960 540"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.42 }}
      >
        <defs>
          <linearGradient id="fbLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(122,43,61,0)" />
            <stop offset="50%" stopColor="rgba(122,43,61,0.6)" />
            <stop offset="100%" stopColor="rgba(122,43,61,0)" />
          </linearGradient>
        </defs>

        {/* Pulsing dots */}
        {dots.map((d) => (
          <circle
            key={d.i}
            cx={d.x}
            cy={d.y}
            r="0.7"
            fill="rgba(245,239,230,0.18)"
            className="hv-dot"
            style={{ animationDelay: `${(d.i * 0.04) % 6}s` }}
          />
        ))}

        {/* Neural connection lines */}
        <g>
          <line x1="80" y1="120" x2="380" y2="320" stroke="url(#fbLine)" strokeWidth="0.7" className="hv-link" style={{ animationDelay: "0s" }} />
          <line x1="650" y1="180" x2="880" y2="420" stroke="url(#fbLine)" strokeWidth="0.7" className="hv-link" style={{ animationDelay: "1.6s" }} />
          <line x1="180" y1="450" x2="500" y2="100" stroke="url(#fbLine)" strokeWidth="0.7" className="hv-link" style={{ animationDelay: "3.2s" }} />
          <line x1="720" y1="500" x2="420" y2="220" stroke="url(#fbLine)" strokeWidth="0.7" className="hv-link" style={{ animationDelay: "4.8s" }} />
        </g>

        {/* Floating particles */}
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="rgba(122,43,61,0.55)"
            className="hv-particle"
            style={{
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </svg>

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, var(--onyx) 90%)",
        }}
      />
    </div>
  );
}
