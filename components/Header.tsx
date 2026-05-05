"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#what-you-get", label: "התוצרים" },
  { href: "#audience", label: "קהל יעד" },
  { href: "#bootcamp", label: "הבוטקמפ" },
  { href: "#founders", label: "מנטורים" },
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
          ? "border-b border-cream/10 bg-onyx/85 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      {/* Document chrome — mono caption strip */}
      <div className="hidden border-b border-cream/[0.06] py-2 lg:block">
        <div className="container-luxe flex items-center justify-between">
          <span className="caption-mono">Suits AI · Bootcamp · MMXXVI</span>
          <span className="caption-mono">— תפור למידה</span>
        </div>
      </div>

      <div className="container-luxe flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-serif text-base font-light text-graphite-200 transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="w-[180px]" aria-hidden="true" />
      </div>
    </header>
  );
}
