import { cn } from "@/lib/utils";

/**
 * Brand Book wordmark — exactly as in the screenshot:
 *   "Suits" upright Cormorant Garamond Light
 *   "AI" italic Cormorant Garamond
 *   No pill, no underline, no decorations.
 */
export function Logo({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg" | "xl" | "display";
}) {
  const sizes: Record<string, string> = {
    default: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl",
    display: "text-[clamp(72px,13vw,200px)]",
  };

  return (
    <span
      className={cn(
        "inline-block select-none font-serif font-light leading-[0.9] text-cream",
        sizes[size],
        className
      )}
      style={{ letterSpacing: "-0.025em" }}
    >
      Suits<em className="font-serif italic font-light">AI</em>
    </span>
  );
}
