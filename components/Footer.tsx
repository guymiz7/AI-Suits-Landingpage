import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--onyx)",
        borderTop: "1px solid var(--line-soft)",
      }}
    >
      <div className="container-page" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="flex flex-col items-center gap-7">
          <Logo size="md" />

          <nav
            aria-label="קישורים תחתונים"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            <a href="/privacy" className="footer-link">מדיניות פרטיות</a>
            <span aria-hidden="true" style={{ color: "rgba(245,239,230,0.25)" }}>·</span>
            <a href="/accessibility" className="footer-link">נגישות</a>
          </nav>

          <hr className="hairline" style={{ width: 80 }} />

          <p
            className="text-center"
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245,239,230,0.5)",
            }}
          >
            © {new Date().getFullYear()} Suits AI · כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
}
