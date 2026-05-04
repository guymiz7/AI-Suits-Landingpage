import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative">
        <svg
          width="34"
          height="34"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(201,169,97,0.25)]"
        >
          {/* Suit lapel monogram — stylized AI Suits mark */}
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#7a1f2b" />
              <stop offset="60%" stopColor="#5a141d" />
              <stop offset="100%" stopColor="#2a0a10" />
            </linearGradient>
            <linearGradient id="lg2" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#34343c" />
              <stop offset="100%" stopColor="#1a1a1d" />
            </linearGradient>
            <linearGradient id="lgGold" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#f5ecd9" />
              <stop offset="55%" stopColor="#d6bb7d" />
              <stop offset="100%" stopColor="#9a8042" />
            </linearGradient>
          </defs>
          {/* Left lapel — graphite */}
          <path
            d="M8 5 L20 14 L20 35 L8 28 Z"
            fill="url(#lg2)"
          />
          {/* Right lapel — bordeaux */}
          <path
            d="M32 5 L20 14 L20 35 L32 28 Z"
            fill="url(#lg)"
          />
          {/* Gold seam between lapels */}
          <line x1="20" y1="14" x2="20" y2="35" stroke="url(#lgGold)" strokeWidth="0.5" opacity="0.7" />
          {/* Gold tie pin */}
          <circle cx="20" cy="20" r="1.8" fill="url(#lgGold)" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-white">
          AI Suits
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-gold-400">
          tailored intelligence
        </span>
      </div>
    </div>
  );
}
