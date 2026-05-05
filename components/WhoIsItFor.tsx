"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    role: "Primary · קהל יעד ראשי",
    name: "בעלי עסקים",
    sub: "שרוצים שהעסק שלהם יביא תוצאות טובות יותר — בנכסים, בתהליכים ובאסטרטגיה.",
    bullets: ["לשפר תהליכים", "לייצר נכסים טובים יותר", "לבנות פתרונות לעצמם", "להכניס AI לעסק"],
    primary: true,
  },
  {
    role: "Secondary · אנשי מקצוע",
    name: "מעצבים · שיווק · שירות",
    sub: "שרוצים לתת ערך מוסף ללקוחות שלהם, להרחיב יכולות ולעבוד מהר יותר עם AI.",
    bullets: ["לפתח יכולת מקצועית", "לבנות לעסקים", "להציע שירותי AI", "להיכנס לתחום"],
  },
  {
    role: "Tertiary · בלי רקע",
    name: "אנשים ללא ניסיון",
    sub: "שרוצים ללמוד את התחום הכי מבוקש היום — בצורה פרקטית, מהבסיס ועד תוצר אמיתי.",
    bullets: ["להיכנס לתחום מהר", "ללמוד נכון מההתחלה", "לבנות תוצר עובד", "להפוך לבילדרס"],
  },
];

export function WhoIsItFor() {
  return (
    <section
      id="audience"
      className="pinstripe-charcoal relative"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="container-page chrome" style={{ marginBottom: 80, opacity: 0.55 }}>
        <span>V · קהל היעד</span>
        <span>Audience</span>
      </div>

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60 }}
        >
          <div className="caption" style={{ marginBottom: 14 }}>V</div>
          <h2 className="h1" style={{ maxWidth: "20ch" }}>
            למי אנחנו <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>תופרים</em>.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card"
              style={{
                background: a.primary ? "var(--bordeaux-deep)" : "var(--graphite)",
                borderColor: a.primary ? "var(--bordeaux)" : "var(--line-cream)",
              }}
            >
              <div className="role">{a.role}</div>
              <div>
                <div className="name">
                  <em>{a.name}</em>
                </div>
                <p className="mt-4" style={{ color: "rgba(245,239,230,0.7)", fontSize: 14, lineHeight: 1.6 }}>
                  {a.sub}
                </p>
              </div>
              <ul className="flex flex-wrap" style={{ listStyle: "none", padding: 0, margin: 0, gap: "6px 14px" }}>
                {a.bullets.map((b, j) => (
                  <li
                    key={b}
                    className="font-serif"
                    style={{ fontSize: 15, fontWeight: 300, fontStyle: "italic", color: "var(--cream)" }}
                  >
                    {b}
                    {j < a.bullets.length - 1 && (
                      <span style={{ marginRight: 14, color: "var(--smoke)" }}>·</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-page chrome" style={{ marginTop: 80, opacity: 0.55 }}>
        <span>Suits AI · Audience</span>
        <span>05 / V</span>
      </div>
    </section>
  );
}
