"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

type Tone = "gold" | "graphite" | "bordeaux";

const TONE_COLORS: Record<Tone, { ring: string; fill: string; glow: string }> = {
  gold: {
    ring: "border-gold-700/30",
    fill: "from-gold-700/15 to-gold-900/5",
    glow: "bg-gold-700/15",
  },
  graphite: {
    ring: "border-white/15",
    fill: "from-graphite-600/30 to-graphite-800/10",
    glow: "bg-graphite-500/10",
  },
  bordeaux: {
    ring: "border-bordeaux-700/40",
    fill: "from-bordeaux-700/20 to-bordeaux-900/10",
    glow: "bg-bordeaux-700/20",
  },
};

function MarketingIcon() {
  // Growth chart with rising bars + accent star — value
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2cd9d" />
          <stop offset="100%" stopColor="#9a8042" />
        </linearGradient>
      </defs>
      {/* Bars */}
      <rect x="14" y="48" width="10" height="20" rx="1.5" fill="url(#goldGrad)" opacity="0.55" />
      <rect x="29" y="38" width="10" height="30" rx="1.5" fill="url(#goldGrad)" opacity="0.75" />
      <rect x="44" y="28" width="10" height="40" rx="1.5" fill="url(#goldGrad)" />
      {/* Trend line */}
      <path
        d="M14 46 L29 36 L44 26 L62 14"
        stroke="#e2cd9d"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Endpoint star (value spark) */}
      <g transform="translate(62 14)">
        <path
          d="M0 -7 L1.6 -1.6 L7 0 L1.6 1.6 L0 7 L-1.6 1.6 L-7 0 L-1.6 -1.6 Z"
          fill="#f5ecd9"
        />
      </g>
      {/* Subtle baseline */}
      <line x1="10" y1="68" x2="68" y2="68" stroke="#9a8042" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

function AutomationIcon() {
  // Connected workflow nodes — automation/integration
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id="grayGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8a8b3" />
          <stop offset="100%" stopColor="#5a5a64" />
        </linearGradient>
      </defs>
      {/* Connecting lines */}
      <path
        d="M22 22 L40 40 L58 22 M22 58 L40 40 L58 58"
        stroke="#7a7a85"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 2"
      />
      {/* Outer nodes */}
      <circle cx="22" cy="22" r="7" fill="url(#grayGrad)" />
      <circle cx="58" cy="22" r="7" fill="url(#grayGrad)" />
      <circle cx="22" cy="58" r="7" fill="url(#grayGrad)" />
      <circle cx="58" cy="58" r="7" fill="url(#grayGrad)" />
      {/* Center hub */}
      <circle cx="40" cy="40" r="10" fill="#d4d4d8" />
      <circle cx="40" cy="40" r="10" fill="none" stroke="#1a1a1d" strokeWidth="2" opacity="0.4" />
      {/* Cog teeth around center */}
      <g stroke="#1a1a1d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <line x1="40" y1="26" x2="40" y2="30" />
        <line x1="40" y1="50" x2="40" y2="54" />
        <line x1="26" y1="40" x2="30" y2="40" />
        <line x1="50" y1="40" x2="54" y2="40" />
      </g>
    </svg>
  );
}

function AIIcon() {
  // Neural spark — node with rays + sparkle (AI)
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-full w-full">
      <defs>
        <radialGradient id="bordRad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#dc8a9b" />
          <stop offset="60%" stopColor="#962637" />
          <stop offset="100%" stopColor="#5a141d" />
        </radialGradient>
      </defs>
      {/* Outer rays */}
      <g stroke="#c95871" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
        <line x1="40" y1="6" x2="40" y2="16" />
        <line x1="40" y1="64" x2="40" y2="74" />
        <line x1="6" y1="40" x2="16" y2="40" />
        <line x1="64" y1="40" x2="74" y2="40" />
        <line x1="16" y1="16" x2="23" y2="23" />
        <line x1="57" y1="57" x2="64" y2="64" />
        <line x1="64" y1="16" x2="57" y2="23" />
        <line x1="23" y1="57" x2="16" y2="64" />
      </g>
      {/* Soft halo */}
      <circle cx="40" cy="40" r="22" fill="url(#bordRad)" opacity="0.25" />
      {/* Core sparkle */}
      <path
        d="M40 22 C42 34, 46 38, 58 40 C46 42, 42 46, 40 58 C38 46, 34 42, 22 40 C34 38, 38 34, 40 22 Z"
        fill="url(#bordRad)"
      />
      {/* Inner glint */}
      <circle cx="40" cy="40" r="3" fill="#f5ecd9" opacity="0.9" />
    </svg>
  );
}

const worlds = [
  {
    title: "שיווק וערך",
    sub: "Marketing",
    points: [
      "חשיבה אסטרטגית",
      "תוכן ומסרים",
      "מיתוג והצגת ערך",
      "מכירות ותהליכי המרה",
    ],
    tone: "gold" as Tone,
    Icon: MarketingIcon,
  },
  {
    title: "אוטומציה ומערכות",
    sub: "Automation",
    points: [
      "תהליכי עבודה אוטומטיים",
      "CRM ואינטגרציות",
      "בוטים וזרימות חכמות",
      "חשיבה תפעולית",
    ],
    tone: "graphite" as Tone,
    Icon: AutomationIcon,
  },
  {
    title: "AI ככלי עבודה",
    sub: "Artificial Intelligence",
    points: [
      "כלים שימושיים, לא תיאוריה",
      "פרומפטים, אג'נטים ומודלים",
      "בנייה אמיתית עם AI",
      "יישום פרקטי בעסק",
    ],
    tone: "bordeaux" as Tone,
    Icon: AIIcon,
  },
];

function IconBadge({ tone, Icon }: { tone: Tone; Icon: () => JSX.Element }) {
  const c = TONE_COLORS[tone];
  return (
    <div className="relative h-24 w-24">
      {/* Soft glow behind */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl ${c.glow} blur-2xl opacity-70`}
      />
      <div
        className={`relative flex h-full w-full items-center justify-center rounded-2xl border ${c.ring} bg-gradient-to-br ${c.fill}`}
      >
        <div className="h-14 w-14">
          <Icon />
        </div>
      </div>
    </div>
  );
}

export function ThreeWorlds() {
  return (
    <section
      id="differentiation"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-radial-gold opacity-70" />

      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">הבידול</SectionLabel>
          <h2 className="heading-display mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="text-luxe-gradient">שלושה עולמות.</span>
            <br />
            <span className="text-gold-gradient">חליפה אחת.</span>
          </h2>
          <p className="mt-6 text-lg text-graphite-200">
            המתחרים נותנים קורס. אנחנו מחברים שיווק, אוטומציה ו־AI לחליפה
            עסקית אחת — שיוצרת תוצרים, לא רק רעיונות.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {worlds.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-graphite-800/50 to-graphite-900/80 p-8 transition-all duration-500 hover:border-gold-700/40 hover:shadow-luxury"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-700/0 blur-3xl transition-all duration-700 group-hover:bg-gold-700/15" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400">
                {w.sub}
              </span>

              <div className="mt-6 transition-transform duration-700 group-hover:-translate-y-1">
                <IconBadge tone={w.tone} Icon={w.Icon} />
              </div>

              <h3 className="heading-display mt-6 text-2xl font-bold text-white">
                {w.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {w.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-sm text-graphite-200"
                  >
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-700/30 to-transparent" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-gold-700/25 bg-gradient-to-l from-gold-900/15 via-graphite-900/40 to-graphite-900/40 p-6 text-center sm:p-8"
        >
          <p className="font-display text-xl text-graphite-100 sm:text-2xl">
            הכוח של{" "}
            <span className="font-bold text-white">שיווק + אוטומציה + AI</span>{" "}
            + <span className="text-gold-gradient font-bold">ביצוע</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
