"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="pinstripe-onyx relative"
      style={{ paddingTop: 140, paddingBottom: 140, color: "var(--cream)" }}
    >
      <div className="container-page chrome" style={{ marginBottom: 60, opacity: 0.55 }}>
        <span>IX · התחלה</span>
        <span>Sign-off</span>
      </div>

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="caption" style={{ marginBottom: 24 }}>— זה המקום להתחיל ממנו</div>
          <h2
            className=""
            style={{
              fontWeight: 300,
              fontSize: "clamp(40px, 6vw, 84px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "20ch",
            }}
          >
            לבנות <em className="italic-script" style={{ color: "var(--cream-warm)" }}>נכון</em>.
            <br />
            לעבוד <em className="italic-script" style={{ color: "var(--cream-warm)" }}>חכם</em>.
            <br />
            להתחיל <em className="italic-script" style={{ color: "var(--cream-warm)" }}>עכשיו</em>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="lead" style={{ marginTop: 40, color: "rgba(245,239,230,0.8)", maxWidth: "60ch" }}>
            אם אתם רוצים לדעת לבנות דפי נחיתה עם מסרים מחודדים שמוכרים,
            נכסים דיגיטליים שיקדמו תנועה, ועבודה עם כלי AI שייתנו לכם
            יכולת אמיתית לעבוד מהר יותר — זה המקום להתחיל ממנו.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              <span>אני רוצה לשמור מקום</span>
              <Arrow />
            </a>
            <a id="contact-info" href="#contact-info" className="btn-ghost">
              שלחו לי את כל הפרטים
            </a>
          </div>
        </motion.div>

        <hr className="hairline" style={{ marginTop: 80, marginBottom: 40 }} />

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { l: "ללא התחייבות", v: "תשובה ראשונה — חינם ומדויקת" },
            { l: "שני מפגשים", v: "ממוקדים, פרקטיים — בלי מילוי שעות" },
            { l: "תוצרים אמיתיים", v: "לא תיאוריה — נכסים שעובדים" },
          ].map((b) => (
            <div key={b.l}>
              <div className="caption" style={{ color: "var(--cream-warm)", marginBottom: 8 }}>— {b.l}</div>
              <p className="" style={{ fontWeight: 300, fontSize: 20, lineHeight: 1.4 }}>
                {b.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page chrome" style={{ marginTop: 100, opacity: 0.55 }}>
        <span>Suits AI · Sign-off</span>
        <span>09 / IX</span>
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
