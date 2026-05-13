import { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <section
      className="relative"
      style={{ paddingTop: 160, paddingBottom: 96 }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        style={{
          height: 480,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,26,43,0.22), transparent 60%)",
        }}
      />

      <div className="container-page" style={{ maxWidth: 880 }}>
        <p
          className="eyebrow-bordeaux"
          style={{ marginBottom: 18 }}
        >
          {eyebrow}
        </p>

        <h1
          className="display-hero text-cream"
          style={{ marginBottom: 18 }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 13,
            fontWeight: 300,
            letterSpacing: "0.04em",
            color: "rgba(245,239,230,0.5)",
            marginBottom: 56,
          }}
        >
          עדכון אחרון: {lastUpdated}
        </p>

        <hr className="hairline" style={{ marginBottom: 56 }} />

        <div className="legal-prose">{children}</div>
      </div>
    </section>
  );
}
