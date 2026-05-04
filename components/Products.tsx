"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const products = [
  {
    tag: "01 · כניסה",
    title: "Bootcamp",
    sub: "מוצר כניסה קצר וממוקד",
    desc: "תוצר מוחשי בסוף — עמוד / נכס שיווקי, מבנה ברור, מסרים, תכנון ראשוני, הדמיה או בסיס למוצר/מערכת + היכרות מעשית עם כלי AI.",
    bullets: [
      "עמוד / נכס שיווקי מוכן",
      "מבנה ומסרים מדויקים",
      "תכנון ראשוני למוצר",
      "היכרות עם כלי AI לבנייה",
    ],
  },
  {
    tag: "02 · עומק",
    title: "Program",
    sub: "תוכנית עומק לבנייה ויישום",
    desc: "פיתוח יכולת אמיתית — חשיבה מערכתית, בניית תהליכים, עבודה עם AI ואוטומציה, נכסים ופתרונות שמלווים אותך הלאה.",
    bullets: [
      "חשיבה מערכתית עסקית",
      "בניית תהליכים מקצה לקצה",
      "AI + אוטומציה בעבודה",
      "תוצרים שאפשר להמשיך איתם",
    ],
    featured: true,
  },
  {
    tag: "03 · יישום",
    title: "ליווי / הטמעה",
    sub: "המשך אישי לעסק שלך",
    desc: "לוקחים את מה שנבנה, מחברים אותו לעבודה אמיתית בעסק. הטמעה, אימון צוות, חיבור מערכות וקיצור הזמן לתוצאה.",
    bullets: [
      "ליווי אישי וצמוד",
      "התאמה לעסק הספציפי",
      "חיבור מערכות ותהליכים",
      "מדידה ואופטימיזציה",
    ],
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-radial-bordeaux opacity-50" />

      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">המוצרים</SectionLabel>
          <h2 className="heading-display mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="text-luxe-gradient">שלושה מסלולים.</span>
            <br />
            <span className="text-gold-gradient">עומק לפי מידה.</span>
          </h2>
          <p className="mt-6 text-lg text-graphite-200">
            מוצר כניסה לתוצר מהיר, תוכנית עומק לפיתוח יכולת אמיתית, וליווי
            אישי שמחבר את הכל לעסק שלך — בלי פערים בין הידע לביצוע.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={[
                "relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500",
                p.featured
                  ? "border-gold-700/40 bg-gradient-to-b from-bordeaux-900/25 via-graphite-900/80 to-graphite-900 shadow-luxury lg:scale-[1.03]"
                  : "border-white/[0.06] bg-gradient-to-b from-graphite-800/40 to-graphite-900/70 hover:border-white/15",
              ].join(" ")}
            >
              <span
                className={[
                  "text-[11px] font-semibold uppercase tracking-[0.32em]",
                  p.featured ? "text-gold-300" : "text-gold-400",
                ].join(" ")}
              >
                {p.tag}
              </span>
              <h3 className="heading-display mt-5 text-3xl font-extrabold text-white">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-graphite-300">{p.sub}</p>

              <p className="mt-6 text-base leading-relaxed text-graphite-200">
                {p.desc}
              </p>

              <ul className="mt-7 space-y-3 border-t border-white/[0.06] pt-6">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-graphite-100"
                  >
                    <span
                      className={[
                        "mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rotate-45",
                        p.featured ? "bg-gold-400" : "bg-gold-500",
                      ].join(" ")}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className={p.featured ? "btn-primary w-full" : "btn-ghost w-full"}
                >
                  פרטים והרשמה
                </a>
              </div>

              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-700/35 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
