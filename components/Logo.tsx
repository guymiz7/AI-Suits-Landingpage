import { cn } from "@/lib/utils";

/**
 * Minimalist couture-style wordmark, inspired by Chanel/Dior:
 * - Pure typography
 * - Wide letter-spacing
 * - Thin weight
 * - Tiny hairline divider
 */
export function Logo({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <div
      className={cn(
        "flex select-none items-center",
        isLg ? "gap-3" : "gap-2.5",
        className
      )}
    >
      <div className="flex flex-col items-center leading-none">
        <span
          className={cn(
            "font-display font-light text-white",
            isLg ? "text-3xl" : "text-xl"
          )}
          style={{ letterSpacing: "0.32em" }}
        >
          AI&nbsp;SUITS
        </span>
        <span
          className="mt-1.5 h-px w-full bg-gradient-to-l from-transparent via-white/40 to-transparent"
        />
        <span
          className={cn(
            "mt-1 font-light text-graphite-400",
            isLg ? "text-[10px]" : "text-[8px]"
          )}
          style={{ letterSpacing: "0.5em" }}
        >
          BOOTCAMP
        </span>
      </div>
    </div>
  );
}
