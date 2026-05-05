import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: "var(--onyx)", borderTop: "1px solid var(--line-cream)" }}
    >
      <div
        className="container-page flex flex-col items-center"
        style={{ paddingTop: 80, paddingBottom: 60, gap: 32 }}
      >
        <Logo size="lg" />

        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-heebo), sans-serif",
            fontWeight: 200,
            fontSize: 22,
            lineHeight: 1.3,
            color: "var(--cream-warm)",
            letterSpacing: "-0.005em",
          }}
        >
          חליפה חכמה לעסק שלך.
        </p>

        <hr className="hairline" style={{ width: 80, marginTop: 8, marginBottom: 8 }} />

        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--smoke)",
            fontWeight: 400,
          }}
        >
          © {new Date().getFullYear()} Suits AI · כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}
