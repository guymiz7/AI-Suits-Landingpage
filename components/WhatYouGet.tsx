"use client";

import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    label: "דף נחיתה מקצועי",
    desc: "עם מסר ברור שמוכר לקהל היעד שלך — לא רעיון, נכס.",
  },
  {
    n: "02",
    label: "עצמאות עם AI",
    desc: "שיטת עבודה מהירה. צרכן שירות הופך לבונה.",
  },
  {
    n: "03",
    label: "חיסכון בזמן ובהוצאות",
    desc: "יודעים מה לבקש, איך לבצע ומה התוצר הנכון.",
  },
];

export function WhatYouGet() {
  return (
    <section
      id="what-you-get"
      className="pinstripe-onyx relative"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="container-page chrome" style={{ marginBottom: 80, opacity: 0.55 }}>
        <span>I · התוצרים</span>
        <span>What you get</span>
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
            <div className="caption" style={{ marginBottom: 12 }}>Chapter I</div>
            <div className="roman">I</div>
          </div>
          <div>
            <div className="caption" style={{ marginBottom: 18 }}>התוצרים</div>
            <h2 className="h1">
              מה <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>יוצא</em> לך
              <br />
              מזה בפועל.
            </h2>
          </div>
        </motion.div>

        <hr className="hairline" style={{ marginBottom: 40 }} />

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
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
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
        <span>Suits AI</span>
        <span>01 / I</span>
      </div>
    </section>
  );
}
