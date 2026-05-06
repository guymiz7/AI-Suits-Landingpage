"use client";

/**
 * Standard pair of CTA buttons used throughout the page.
 * Per spec: identical sizing, primary in bordeaux, secondary in cream.
 */
export function CTAButtons({
  align = "center",
}: {
  align?: "center" | "start";
}) {
  return (
    <div
      className={`mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 ${
        align === "center" ? "items-center justify-center" : "items-stretch sm:items-start"
      }`}
    >
      <a href="#contact" className="btn btn-primary" aria-label="אני רוצה לשמור מקום">
        <span>אני רוצה לשמור מקום</span>
        <Arrow />
      </a>
      <a href="#info" className="btn btn-secondary" aria-label="שלחו לי את כל הפרטים">
        <span>שלחו לי את כל הפרטים</span>
      </a>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rtl-arrow"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
