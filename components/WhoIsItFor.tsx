"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    role: "Primary",
    name: "בעלי עסקים",
    sub: "שרוצים שהעסק שלהם יביא תוצאות טובות יותר.",
    primary: true,
  },
  {
    role: "Secondary",
    name: "מעצבים, אנשי שיווק ואנשי שירות",
    sub: "שרוצים לתת ערך מוסף ללקוחות שלהם.",
  },
  {
    role: "Tertiary",
    name: "אנשים ללא ניסיון או רקע בתחום",
    sub: "שרוצים ללמוד את התחום הכי מבוקש היום.",
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
            למי ההכשרה הזאת{" "}
            <em className="italic-script">מתאימה?</em>
          </h2>
        </motion.div>

        <hr className="hairline" style={{ marginTop: 40, marginBottom: 60 }} />

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
                minHeight: 280,
              }}
            >
              <div className="role">{a.role}</div>
              <div>
                <div className="name">
                  <em>{a.name}</em>
                </div>
                <p className="mt-4" style={{ color: "rgba(245,239,230,0.7)", fontSize: 15, lineHeight: 1.6, fontWeight: 300 }}>
                  {a.sub}
                </p>
              </div>
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
