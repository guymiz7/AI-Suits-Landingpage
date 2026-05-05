"use client";

import { motion } from "framer-motion";

const steps = [
  {
    idx: "I",
    name: "AI לקיצור תהליכים",
    desc: "שימוש מדויק בכלי AI כדי לקצר זמן ולמקסם את איכות התוצאה — לא קסם, שיטה.",
  },
  {
    idx: "II",
    name: "תכנון נכון של העמוד",
    desc: "מבנה שיווקי שעובד. הצעה מדויקת. שפה שמדברת ללקוח.",
  },
  {
    idx: "III",
    name: "החשיבה של הלקוח",
    desc: "מבינים את הקהל לפני שכותבים מילה. מסגרת אחת, מסר חד.",
  },
  {
    idx: "IV",
    name: "מסר · נראות · תוצאה",
    desc: "החיבור בין מה שאומרים, איך זה נראה ומה זה מייצר — בקצה אחד.",
  },
];

export function Bootcamp() {
  return (
    <section
      id="bootcamp"
      className="pinstripe-onyx relative"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="container-page chrome" style={{ marginBottom: 60, opacity: 0.55 }}>
        <span>VII · הבוטקמפ</span>
        <span>The Bootcamp</span>
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
            <div className="caption" style={{ marginBottom: 12 }}>Chapter VII</div>
            <div className="roman">VII</div>
          </div>
          <div>
            <div className="caption" style={{ marginBottom: 18 }}>התוכנית</div>
            <h2 className="h1">
              לא רק <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>בנייה</em>.
              <br />
              גם <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>מה</em> ו
              <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>איך</em>.
            </h2>
            <p className="lead" style={{ marginTop: 32, color: "rgba(245,239,230,0.7)" }}>
              ההכשרה לא עוסקת רק בבנייה. היא תעזור לכם להבין מה לבנות —
              ואיך לבנות את זה נכון.
            </p>
          </div>
        </motion.div>

        <hr className="hairline" style={{ marginBottom: 0, marginTop: 60 }} />

        <div className="stack">
          {steps.map((s, i) => (
            <motion.div
              key={s.idx}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="step"
            >
              <div className="idx">{s.idx}</div>
              <div className="nm">{s.name}</div>
              <div className="desc">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-primary">
            <span>אני רוצה לשמור מקום</span>
            <Arrow />
          </a>
          <a href="#contact-info" className="btn-ghost">
            שלחו לי את כל הפרטים
          </a>
        </motion.div>
      </div>

      <div className="container-page chrome" style={{ marginTop: 80, opacity: 0.55 }}>
        <span>Suits AI · Bootcamp</span>
        <span>07 / VII</span>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
