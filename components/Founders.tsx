"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MouseGlowCard } from "./MouseGlowCard";
import { RevealWords } from "./Reveal";

const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/AI-Suits-Landingpage" : "";

type Mentor = {
  company: string;
  name: string;
  photo: string;
  bio: string;
  tags: string[];
  layout: "image-first" | "text-first";
};

const mentors: Mentor[] = [
  {
    company: "DIGITECH",
    name: "מתן יעקובסון",
    photo: "/founders/matan.png",
    bio: `יזם ומומחה בעולמות ה־AI, הדיגיטל והחינוך הטכנולוגי. חי, נושם וחוקר את עולמות הדיגיטל כבר מעל 11 שנים, במהלכן ליווה מאות בעלי עסקים בתחומים שונים, וכן ניהל מחלקות דיגיטל בחברות ומותגים מהגדולים ביותר.

מתן ראה מקרוב מה המשמעות של ניהול עסק בלי צוות ובלי שיטה מדויקת — וזה עורר אצלו את הצורך להבין איך מנהלים עסק בצורה חכמה עם כלים דיגיטליים, כדי לדעת לנהל עסק באמת בלי צורך בשעות עבודה שלא נגמרות.

כל הידע שלו על עסקים, כסף, שיווק וטכנולוגיה עוזר לעסקים רבים מאוד ליצור סיסטם חכם שמייצר רווח, יציבות וראש שקט.`,
    tags: ["שיווק דיגיטלי", "תוכן", "אסטרטגיה", "יישומי AI"],
    layout: "image-first",
  },
  {
    company: "OCT GROUP",
    name: "גיא מיזינסקי",
    photo: "/founders/guy.png",
    bio: `יזם, מרצה באקדמיה ומומחה לאוטומציה, AI ותהליכים עסקיים, שמלווה כבר שנים בעלי עסקים, חברות וארגונים בתהליכי צמיחה, דיגיטציה והטמעת טכנולוגיות מתקדמות.

לאורך הדרך גיא הכשיר מאות בעלי עסקים ואנשי מקצוע, עבד עם ארגונים גדולים ומובילים, וצבר ניסיון מעשי עמוק בחיבור בין אסטרטגיה עסקית, שיווק, מכירות, מערכות ואוטומציה.

אחרי שראה מקרוב את האבולוציה של עולם ה־AI לאורך 15 השנים האחרונות — מהימים שבהם הטכנולוגיה הייתה כלי מורכב למעטים ועד לעידן שבו כל עסק יכול לבנות, לדייק ולהאיץ תהליכים בעזרת AI — גיא מביא לבוטקמפ גישה פרקטית, ישירה ומבוססת ניסיון: לא רק להבין מה אפשר לעשות עם AI, אלא לצאת עם תוצר אמיתי, מקצועי ושימושי שאפשר להציג, לשווק ולהמשיך לפתח כבר עכשיו.`,
    tags: ["אוטומציה עסקית", "טרנספורמציה דיגיטלית", "אפיון והטמעת מערכות", "יישומי AI"],
    layout: "text-first",
  },
];

export function Founders() {
  return (
    <section
      id="mentors"
      className="section relative overflow-hidden"
      style={{ background: "var(--onyx)" }}
    >
      <div className="container-page relative">
        <div className="text-center">
          <h2 className="display-bold text-cream">
            <RevealWords text="הניסיון שעומד מאחורי החליפה." delay={0.1} />
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-16 lg:space-y-24">
          {mentors.map((m, i) => (
            <MentorRow key={m.name} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MentorRow({ m, index }: { m: Mentor; index: number }) {
  const imageFirst = m.layout === "image-first";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12"
    >
      {/* Photo */}
      <div className={`lg:col-span-5 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
        <div
          className="founder-photo relative overflow-hidden"
          style={{
            background: "var(--charcoal)",
            border: "1px solid var(--line)",
          }}
        >
          <Image
            src={`${ASSET_PREFIX}${m.photo}`}
            alt={`תמונת ${m.name}`}
            fill
            className="object-cover object-center"
            sizes="(min-width:1024px) 40vw, 100vw"
            unoptimized
            priority={index === 0}
          />
        </div>
      </div>

      {/* Text card */}
      <div className={`lg:col-span-7 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
        <MouseGlowCard
          className="h-full"
          style={{
            background: "var(--charcoal)",
            border: "1px solid var(--line)",
            padding: "clamp(24px, 4vw, 44px)",
          }}
        >
          <p
            className="eyebrow-bordeaux"
            style={{ fontSize: 10, letterSpacing: "0.36em" }}
          >
            {m.company}
          </p>
          <h3
            className="mt-3 text-cream"
            style={{
              fontWeight: 300,
              fontSize: "clamp(28px, 3.6vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
            }}
          >
            {m.name}
          </h3>

          <hr className="hairline" style={{ marginTop: 24, marginBottom: 24 }} />

          <div className="space-y-4">
            {m.bio.split("\n\n").map((p, k) => (
              <p
                key={k}
                style={{
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "rgba(245,239,230,0.78)",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {m.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontWeight: 400,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "8px 14px",
                  border: "1px solid var(--line)",
                  color: "rgba(245,239,230,0.7)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </MouseGlowCard>
      </div>
    </motion.div>
  );
}

