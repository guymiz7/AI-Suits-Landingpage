"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

type Founder = {
  idx: string;
  company: string;
  name: string;
  photo: string;
  skills: string[];
  bio: string[];
  layout: "image-first" | "text-first";
};

const founders: Founder[] = [
  {
    idx: "I",
    company: "DIGITECH",
    name: "מתן יעקובסון",
    photo: "/founders/matan.png",
    skills: ["AI יישומי", "שיווק דיגיטלי", "אסטרטגיה", "תוכן ומיתוג"],
    bio: [
      "יזם ומומחה בעולמות ה־AI, הדיגיטל והחינוך הטכנולוגי. חי, נושם וחוקר את עולמות הדיגיטל כבר מעל 11 שנים — במהלכן ליווה מאות בעלי עסקים בתחומים שונים, וניהל מחלקות דיגיטל בחברות ומותגים מהגדולים ביותר.",
      "מתן ראה מקרוב מה המשמעות של ניהול עסק בלי צוות ובלי שיטה מדויקת — וזה עורר אצלו את הצורך להבין איך מנהלים עסק חכם עם כלים דיגיטליים, בלי שעות עבודה שלא נגמרות.",
      "כל הידע שלו על עסקים, כסף, שיווק וטכנולוגיה עוזר לעסקים רבים מאוד ליצור סיסטם חכם שמייצר רווח, יציבות וראש שקט.",
    ],
    layout: "image-first",
  },
  {
    idx: "II",
    company: "GROUP OCT",
    name: "גיא מיזינסקי",
    photo: "/founders/guy.png",
    skills: ["יישומי AI", "אוטומציה עסקית", "אינטגרציות", "מערכות"],
    bio: [
      "יזם, מרצה באקדמיה ומומחה לאוטומציה, AI ותהליכים עסקיים — שמלווה כבר שנים בעלי עסקים, חברות וארגונים בתהליכי צמיחה, דיגיטציה והטמעת טכנולוגיות מתקדמות.",
      "לאורך הדרך גיא הכשיר מאות בעלי עסקים ואנשי מקצוע, עבד עם ארגונים גדולים ומובילים, וצבר ניסיון מעשי עמוק בחיבור בין אסטרטגיה עסקית, שיווק, מכירות, מערכות ואוטומציה.",
      "אחרי שראה מקרוב את האבולוציה של עולם ה־AI לאורך 15 השנים האחרונות, גיא מביא גישה פרקטית, ישירה ומבוססת ניסיון: לא רק להבין מה אפשר לעשות עם AI, אלא לצאת עם תוצר אמיתי, מקצועי ושימושי.",
    ],
    layout: "text-first",
  },
];

export function Founders() {
  return (
    <section
      id="founders"
      className="pinstripe-onyx relative"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="container-page chrome" style={{ marginBottom: 60, opacity: 0.55 }}>
        <span>VIII · המנטורים</span>
        <span>The Mentors</span>
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
            <div className="caption" style={{ marginBottom: 12 }}>Chapter VIII</div>
            <div className="roman">VIII</div>
          </div>
          <div>
            <div className="caption" style={{ marginBottom: 18 }}>השותפות</div>
            <h2 className="h1">
              שני אנשים, <em className="italic-script" style={{ color: "var(--bordeaux-cream)" }}>מעטפת</em>
              <br />
              אחת.
            </h2>
          </div>
        </motion.div>

        <hr className="hairline" style={{ marginTop: 40, marginBottom: 80 }} />

        <div className="space-y-24 lg:space-y-32">
          {founders.map((f, i) => (
            <FounderRow key={f.name} f={f} index={i} />
          ))}
        </div>
      </div>

      <div className="container-page chrome" style={{ marginTop: 80, opacity: 0.55 }}>
        <span>Suits AI · Mentors</span>
        <span>08 / VIII</span>
      </div>
    </section>
  );
}

function FounderRow({ f, index }: { f: Founder; index: number }) {
  const imageFirst = f.layout === "image-first";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div className={`lg:col-span-5 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
        <PhotoCard photo={f.photo} name={f.name} />
      </div>

      <div className={`lg:col-span-7 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
        <div
          style={{
            border: "1px solid var(--line-cream)",
            padding: "40px",
            background: "var(--graphite)",
            color: "var(--cream)",
            position: "relative",
          }}
        >
          <div className="caption" style={{ marginBottom: 14 }}>
            {f.idx} · {f.company}
          </div>
          <h3
            className=""
            style={{ fontWeight: 300, fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1, letterSpacing: "-0.015em" }}
          >
            {f.name}
          </h3>

          <hr style={{ marginTop: 28, marginBottom: 28, border: 0, borderTop: "1px solid var(--line-cream)" }} />

          <div style={{ display: "grid", gap: 16 }}>
            {f.bio.map((p, i) => (
              <p
                key={i}
                style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: "rgba(245,239,230,0.78)" }}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap" style={{ gap: "6px 14px" }}>
            {f.skills.map((s, j, arr) => (
              <span
                key={s}
                style={{ fontSize: 15, fontWeight: 300, color: "rgba(245,239,230,0.85)" }}
              >
                {s}
                {j < arr.length - 1 && (
                  <span style={{ marginRight: 14, color: "var(--smoke)" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PhotoCard({ photo, name }: { photo: string; name: string }) {
  return (
    <div
      className="relative aspect-[4/5] overflow-hidden"
      style={{
        background: "var(--charcoal)",
        border: "1px solid var(--line-cream)",
      }}
    >
      <Image
        src={`${ASSET_PREFIX}${photo}`}
        alt={name}
        fill
        className="object-cover object-center"
        sizes="(min-width:1024px) 40vw, 100vw"
        unoptimized
        priority
      />
    </div>
  );
}
