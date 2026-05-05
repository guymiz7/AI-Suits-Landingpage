import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: "var(--onyx)", borderTop: "1px solid var(--line-cream)" }}
    >
      <div className="container-page" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Logo size="lg" />
            <p
              className="font-serif mt-8"
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: 28,
                lineHeight: 1.3,
                color: "var(--cream-warm)",
                maxWidth: "32ch",
              }}
            >
              חליפה חכמה לעסק שלך.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:grid-cols-2">
            <div>
              <p className="caption">— הבוטקמפ</p>
              <ul style={{ listStyle: "none", marginTop: 16, padding: 0, display: "grid", gap: 8 }}>
                <li>
                  <a href="#what-you-get" className="font-serif" style={{ fontSize: 16, fontWeight: 300, color: "var(--cream)" }}>
                    התוצרים
                  </a>
                </li>
                <li>
                  <a href="#audience" className="font-serif" style={{ fontSize: 16, fontWeight: 300, color: "var(--cream)" }}>
                    קהל יעד
                  </a>
                </li>
                <li>
                  <a href="#bootcamp" className="font-serif" style={{ fontSize: 16, fontWeight: 300, color: "var(--cream)" }}>
                    התוכן
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="caption">— הצוות</p>
              <ul style={{ listStyle: "none", marginTop: 16, padding: 0, display: "grid", gap: 8 }}>
                <li>
                  <a href="#founders" className="font-serif" style={{ fontSize: 16, fontWeight: 300, color: "var(--cream)" }}>
                    מתן יעקובסון
                  </a>
                </li>
                <li>
                  <a href="#founders" className="font-serif" style={{ fontSize: 16, fontWeight: 300, color: "var(--cream)" }}>
                    גיא מיזינסקי
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-serif" style={{ fontSize: 16, fontWeight: 300, color: "var(--cream)" }}>
                    הזמינו פגישה
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="hairline" style={{ marginTop: 60, marginBottom: 32 }} />

        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div
            className="font-serif"
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(80px, 11vw, 160px)",
              lineHeight: 0.9,
              color: "var(--bordeaux-cream)",
            }}
          >
            S<span style={{ color: "var(--cream)" }}>a</span>
          </div>
          <div>
            <p className="caption">— Edition I / 2026</p>
            <p className="font-serif mt-3" style={{ fontWeight: 300, fontSize: 18, lineHeight: 1.4 }}>
              Authored by מתן יעקובסון · גיא מיזינסקי
            </p>
          </div>
        </div>

        <div className="chrome" style={{ marginTop: 60, opacity: 0.55 }}>
          <span>© {new Date().getFullYear()} Suits AI · All rights reserved</span>
          <span>Made in Israel</span>
        </div>
      </div>
    </footer>
  );
}
