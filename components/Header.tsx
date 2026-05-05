"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#what-you-get", label: "מה תקבלו" },
  { href: "#audience", label: "למי זה מתאים" },
  { href: "#bootcamp", label: "הבוטקמפ" },
  { href: "#founders", label: "מי אנחנו" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.05] bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-light text-graphite-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Empty right slot — clean, minimalist (no top CTA per spec) */}
        <div className="w-[120px] lg:w-[120px]" aria-hidden="true" />
      </div>
    </header>
  );
}
