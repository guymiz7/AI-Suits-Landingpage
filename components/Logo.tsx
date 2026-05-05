import { cn } from "@/lib/utils";

/**
 * Brand Book wordmark:
 * - "Suits" in Cormorant Garamond Light
 * - "AI" in JetBrains Mono inside a hairline-bordered pill
 * - Small italic "ai" embedded in the wordmark on alternate variant
 */
export function Logo({
  className,
  size = "default",
  variant = "wordmark",
}: {
  className?: string;
  size?: "default" | "lg" | "xl";
  variant?: "wordmark" | "italic";
}) {
  const sizeClasses = {
    default: { suits: "text-2xl", ai: "text-[9px]", padding: "px-2 py-0.5" },
    lg: { suits: "text-4xl", ai: "text-[11px]", padding: "px-2.5 py-1" },
    xl: { suits: "text-6xl", ai: "text-[14px]", padding: "px-3 py-1" },
  };
  const s = sizeClasses[size];

  if (variant === "italic") {
    // Wordmark with embedded italic em — like "Suits AI"
    return (
      <div className={cn("flex select-none items-baseline gap-2", className)}>
        <span
          className={cn("font-serif font-light leading-none text-cream", s.suits)}
          style={{ letterSpacing: "-0.02em" }}
        >
          Suits<em className="not-italic font-serif italic text-bordeaux-300">AI</em>
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex select-none items-baseline gap-3", className)}>
      <span
        className={cn(
          "font-serif font-light leading-none text-cream",
          s.suits
        )}
        style={{ letterSpacing: "-0.02em" }}
      >
        Suits
      </span>
      <span
        className={cn(
          "inline-flex items-center justify-center border border-cream/70 font-mono uppercase text-cream",
          s.ai,
          s.padding
        )}
        style={{ letterSpacing: "0.3em", paddingTop: "2px" }}
      >
        AI
      </span>
    </div>
  );
}
