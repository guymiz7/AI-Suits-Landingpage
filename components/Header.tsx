"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "מהות" },
  { href: "#value", label: "הצעת הערך" },
  { href: "#products", label: "מוצרים" },
  { href: "#founders", label: "מובילי המותג" },
  { href: "#contact", label: "צור קשר" },
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
              className="rounded-full px-4 py-2 text-sm text-graphite-200 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary">
            <span>הזמינו פגישה</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rtl:rotate-180"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
