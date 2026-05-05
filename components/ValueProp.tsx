"use client";

import { motion } from "framer-motion";

const items = [
  { n: "01", label: "לחשוב נכון", desc: "על צורך עסקי אמיתי. הגדרה מדויקת היא הבסיס." },
  { n: "02", label: "להפוך רעיון למבנה", desc: "מחשבה הופכת לתהליך, לתוצר, לדף." },
  { n: "03", label: "לעבוד עם AI שימושית", desc: "לא תיאוריה, לא דמואים — שימוש מעשי שמייצר תוצאה." },
  { n: "04", label: "לבנות נכס דיגיטלי", desc: "עמוד נחיתה, תהליך מכירה או מערכת — מההתחלה ועד הסוף." },
  { n: "05", label: "לשווק את הערך", desc: "מסר חד, הצעה ברורה, שפה שמדברת ללקוח." },
  { n: "06", label: "לחבר ידע לביצוע", desc: "כל שיעור = צעד לתוצר. אנחנו לא נותנים תיאוריה." },
];

export function ValueProp() {
  return (
    <section
      id="value"
      className="pinstripe-onyx relative"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="container-page chrome" style={{ marginBottom: 80, opacity: 0.55 }}>
        <span>IV · הצעת הערך</span>
        <span>Value</span>
      </div>

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
          style={{ minHeight: "auto", marginBottom: 60 }}
        >
          <div>
            <div className="caption" style={{ marginBottom: 12 }}>Chapter IV</div>
            <div className="roman">IV</div>
          </div>
          <div>
            <div className="caption" style={{ marginBottom: 18 }}>הצעת הערך</div>
            <h2 className="h1">
              הכשרה מוכוונת
              <br />
              <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>תוצאה ותוצר</em>.
            </h2>
            <p className="lead" style={{ marginTop: 32, color: "rgba(245,239,230,0.7)" }}>
              מלמדים אנשים ועסקים איך לבנות באמת — לא רק להבין. כל שלב מסתיים בתוצר אמיתי.
            </p>
          </div>
        </motion.div>

        <hr className="hairline" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pillar-list on-dark mx-auto"
          style={{ maxWidth: 980 }}
        >
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="row"
            >
              <span className="n">{it.n}</span>
              <div>
                <div className="label">{it.label}</div>
                <div className="desc">{it.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container-page chrome" style={{ marginTop: 80, opacity: 0.55 }}>
        <span>Suits AI · Value</span>
        <span>04 / IV</span>
      </div>
    </section>
  );
}
