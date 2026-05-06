"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { href: "#what-you-get", label: "התוצרים" },
  { href: "#mentors", label: "המנטורים" },
  { href: "#audience", label: "למי זה מתאים" },
  { href: "#curriculum", label: "התוכנית" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(245,239,230,0.08)"
          : "1px solid transparent",
      }}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" aria-label="Suits AI — חזרה לראש העמוד">
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-light text-cream-dim transition-colors hover:text-cream"
              style={{ color: "rgba(245,239,230,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5EFE6")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245,239,230,0.7)")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="פתח תפריט"
          aria-expanded={mobileOpen}
          className="lg:hidden"
          style={{ color: "var(--cream)", padding: 8 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "rgba(10,10,11,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(245,239,230,0.08)",
          }}
        >
          <nav className="container-page flex flex-col py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b py-4 text-base font-light"
                style={{
                  color: "rgba(245,239,230,0.85)",
                  borderColor: "rgba(245,239,230,0.06)",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
