import { cn } from "@/lib/utils";

/**
 * Suits AI — wordmark.
 * Per branding/logo example.png: italic serif (Cormorant Garamond),
 * light weight, both words italic. Cream on dark.
 *
 * Inline SVG so it scales crisply at any size while still being responsive.
 */
export function Logo({
  className,
  size = "md",
  color = "var(--cream)",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "display";
  color?: string;
}) {
  // Heights are responsive via clamp() for the display variant.
  const heightCss: Record<string, string> = {
    sm: "28px",
    md: "40px",
    lg: "56px",
    xl: "84px",
    display: "clamp(64px, 12vw, 168px)",
  };
  const h = heightCss[size];

  return (
    <span
      className={cn("inline-block max-w-full", className)}
      style={{ height: h, lineHeight: 0 }}
      role="img"
      aria-label="Suits AI"
    >
      <svg
        viewBox="0 0 360 120"
        height="100%"
        width="auto"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block", maxWidth: "100%" }}
      >
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-serif), 'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight={300}
          fontSize="92"
          fill={color}
          letterSpacing="-1"
        >
          Suits AI
        </text>
      </svg>
    </span>
  );
}
