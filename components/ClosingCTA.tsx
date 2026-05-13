"use client";

import { RevealWords, FadeUp } from "./Reveal";
import { RegistrationForm } from "./RegistrationForm";

export function ClosingCTA() {
  return (
    <section
      id="contact"
      className="section relative"
      style={{ background: "var(--onyx)" }}
    >
      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="display-bold text-cream">
            <RevealWords
              text="אם אתם רוצים לדעת לבנות דפי נחיתה עם מסרים מחודדים שמוכרים, נכסים דיגיטליים שיקדמו תנועה ועבודה עם כלי AI שייתנו לכם יכולת אמיתית לעבוד מהר יותר — זה המקום להתחיל ממנו."
              delay={0.1}
            />
          </h2>

          <FadeUp delay={0.5}>
            <RegistrationForm id="register-bottom" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
