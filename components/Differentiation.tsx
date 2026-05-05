"use client";

import { motion } from "framer-motion";

const layers = [
  {
    n: "Layer 01",
    title: ["מרצים", "באקדמיה"],
    desc: "הכשרה על ידי מרצים שכבר הכשירו אלפי בעלי עסקים — ידע מעודכן ופרקטי.",
  },
  {
    n: "Layer 02",
    title: ["ארגונים", "ומותגים"],
    desc: "ניסיון עם חברות ומותגים מובילים. אותם סטנדרטים, מותאמים לעסק אחד.",
  },
  {
    n: "Layer 03",
    title: ["15 שנים", "של אבולוציה"],
    desc: "היכרות מעמיקה עם עולם הדיגיטל וה־AI ב־15 השנים האחרונות.",
  },
];

export function Differentiation() {
  return (
    <section
      id="differentiation"
      className="pinstripe-bordeaux relative"
      style={{ paddingTop: 120, paddingBottom: 120, color: "var(--cream)" }}
    >
      <div className="container-page chrome" style={{ marginBottom: 60, opacity: 0.55 }}>
        <span>VI · בידול</span>
        <span>Why us</span>
      </div>

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
          style={{ minHeight: "auto", marginBottom: 40 }}
        >
          <div>
            <div className="caption" style={{ marginBottom: 12 }}>Chapter VI</div>
            <div className="roman" style={{ color: "var(--cream)" }}>VI</div>
          </div>
          <div>
            <div className="caption" style={{ marginBottom: 18 }}>הבידול</div>
            <h2 className="h1">
              למה <em className="italic-script" style={{ color: "var(--cream-warm)" }}>דווקא</em>
              <br />
              אצלנו.
            </h2>
          </div>
        </motion.div>

        <hr className="hairline" style={{ marginBottom: 60, marginTop: 60 }} />

        <div className="grid gap-12 md:grid-cols-3">
          {layers.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="caption" style={{ marginBottom: 14, color: "var(--cream-warm)" }}>
                — {l.n}
              </div>
              <h3 className="h2">
                {l.title[0]}
                <br />
                {l.title[1]}
              </h3>
              <p className="body-text" style={{ marginTop: 18, color: "rgba(245,239,230,0.78)" }}>
                {l.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <hr className="hairline" style={{ marginTop: 80, marginBottom: 40 }} />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div>
            <div className="caption" style={{ marginBottom: 18 }}>— הבידול בפועל</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
              {[
                "תוצרים, לא רק למידה.",
                "פרונט עסקי משולב בבק־אופיס תפעולי.",
                "שיווק, מכירות, מערכות ואוטומציה — תחת קורת גג אחת.",
                "יכולת מקצועית, וגם יכולת עסקית.",
              ].map((t) => (
                <li key={t} className="" style={{ fontSize: 22, fontWeight: 300, lineHeight: 1.35 }}>
                  · {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="caption" style={{ marginBottom: 18 }}>— מה זה יוצר</div>
            <p className="lead" style={{ color: "var(--cream)" }}>
              הכשרה שלא נשארת ברמת רעיון. היא מחברת בין חשיבה, בנייה,
              תוצר, הצגה ויישום עסקי — בלי לדלג על שלב.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container-page chrome" style={{ marginTop: 80, opacity: 0.55 }}>
        <span>Suits AI · Differentiation</span>
        <span>06 / VI</span>
      </div>
    </section>
  );
}
