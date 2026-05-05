"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

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
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line-cream)" : "1px solid transparent",
      }}
    >
      {/* Document chrome strip — mono captions */}
      <div className="hidden lg:block" style={{ borderBottom: "1px solid rgba(245,239,230,0.06)" }}>
        <div className="container-page chrome py-2">
          <span>Suits AI · Bootcamp</span>
          <span>— תפור למידה</span>
          <span>MMXXVI</span>
        </div>
      </div>

      <div className="container-page flex h-20 items-center justify-between">
        <Logo size="default" />

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-serif text-base font-light transition-colors"
              style={{ color: "rgba(245,239,230,0.65)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,230,0.65)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="w-[100px]" aria-hidden="true" />
      </div>
    </header>
  );
}
