import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-10 bg-gold-500" />
      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
        {children}
      </span>
    </div>
  );
}
