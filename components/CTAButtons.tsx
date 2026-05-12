"use client";

import { MagneticLink } from "./MagneticLink";

/**
 * Used in sections that should drive the visitor to the Hero registration form.
 * Single CTA — scrolls smoothly to #register on the home page.
 */
export function CTAButtons({
  align = "center",
}: {
  align?: "center" | "start";
}) {
  return (
    <div
      className={`mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 ${
        align === "center"
          ? "items-center justify-center"
          : "items-stretch sm:items-start"
      }`}
    >
      <MagneticLink
        href="#register"
        className="btn btn-primary btn-shimmer"
        aria-label="לטופס ההרשמה למחזור הקרוב"
      >
        <span>אני רוצה לשמור מקום</span>
        <Arrow />
      </MagneticLink>
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
