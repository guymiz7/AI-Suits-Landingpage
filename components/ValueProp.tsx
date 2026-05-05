"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "איך לחשוב נכון על צורך עסקי אמיתי",
    desc: "מתחילים מהמטרה — לא מהכלי. הגדרה מדויקת היא הבסיס לכל בנייה שעובדת.",
    icon: <BrainIcon />,
  },
  {
    title: "איך להפוך רעיון למבנה עובד וברור",
    desc: "הופכים מחשבה לתהליך, לתוצר, לדף — צעד אחר צעד, בלי קסמים.",
    icon: <BlueprintIcon />,
  },
  {
    title: "איך לעבוד עם AI בצורה שימושית",
    desc: "לא תיאוריה, לא דמואים. שימוש מעשי ב־AI שמייצר תוצאה אמיתית בעסק.",
    icon: <AIIcon />,
  },
  {
    title: "איך לבנות נכס דיגיטלי שמדבר עסקית",
    desc: "עמוד נחיתה, תהליך מכירה או מערכת — בנויים נכון מההתחלה ועד הסוף.",
    icon: <AssetIcon />,
  },
  {
    title: "איך לשווק את הערך ולהציג אותו במדויק",
    desc: "מסר חד, הצעה ברורה, שפה שמדברת ללקוח — לא לאלגוריתם.",
    icon: <ValueIcon />,
  },
  {
    title: "איך לחבר בין ידע לביצוע — בלי פערים",
    desc: "כל שיעור = צעד לתוצר. אנחנו לא נותנים תיאוריה, אנחנו נותנים יכולת.",
    icon: <BridgeIcon />,
  },
];

export function ValueProp() {
  return (
    <section
      id="value"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-36"
    >
      <div className="container-luxe">
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
            הצעת הערך
          </span>
          <h2 className="heading-display mt-5 font-serif font-light leading-[1.05] text-cream text-4xl sm:text-5xl lg:text-6xl">
            הכשרה מוכוונת{" "}
            <span className="italic-accent">תוצאה ותוצר</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-bordeaux-500 to-transparent" />
          <p className="mt-6 text-base font-light leading-relaxed text-graphite-300 sm:text-lg">
            מלמדים אנשים ועסקים איך לבנות באמת — לא רק להבין. כל שלב מסתיים
            בתוצר אמיתי שאפשר להציג, להפעיל ולהמשיך לפתח.
          </p>
        </motion.div>

        {/* Vertical layout with icons */}
        <div className="mx-auto mt-16 max-w-4xl">
          <ul className="space-y-3">
            {items.map((it, i) => (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex items-start gap-5 rounded-xl border border-white/[0.04] bg-graphite-900/40 p-5 transition-all duration-300 hover:border-bordeaux-700/40 hover:bg-graphite-800/40 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-graphite-800/60 text-cream-warm transition-colors group-hover:border-bordeaux-700/50 group-hover:text-cream sm:h-14 sm:w-14">
                  {it.icon}
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-graphite-300 sm:text-[15px]">
                    {it.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* === Icons === */
function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
      <path d="M9 4a3 3 0 0 0-3 3v0a3 3 0 0 0-3 3v0a3 3 0 0 0 1.5 2.6 3 3 0 0 0 0 2.8A3 3 0 0 0 6 18v0a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4a3 3 0 0 0-3 0z" />
      <path d="M15 4a3 3 0 0 1 3 3v0a3 3 0 0 1 3 3v0a3 3 0 0 1-1.5 2.6 3 3 0 0 1 0 2.8A3 3 0 0 1 18 18v0a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V4a3 3 0 0 1 3 0z" />
    </svg>
  );
}
function BlueprintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="9" x2="9" y2="21" />
      <rect x="12" y="12" width="6" height="6" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
function AIIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
    </svg>
  );
}
function AssetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
      <path d="M4 4h16v6H4z" />
      <path d="M4 14h10v6H4z" />
      <path d="M17 14h3v6h-3z" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
function ValueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function BridgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
      <path d="M3 17c4 0 4-6 9-6s5 6 9 6" />
      <line x1="3" y1="20" x2="21" y2="20" />
      <line x1="6" y1="14" x2="6" y2="20" />
      <line x1="18" y1="14" x2="18" y2="20" />
    </svg>
  );
}
