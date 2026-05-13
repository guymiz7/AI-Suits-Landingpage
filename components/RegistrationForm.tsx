"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

/**
 * Registration form — replaces the 2 CTA buttons.
 *
 * Flow: form submit → payment provider → /thank-you/
 *
 * The PAYMENT_URL is a placeholder. To connect a real Israeli payment
 * gateway (Tranzila / Cardcom / Sumit / PayPlus etc.), replace the URL
 * and forward the form fields as required by the provider's API.
 *
 * For the initial deployment we redirect to /thank-you/ directly so the
 * full UX flow can be demonstrated end-to-end.
 */
const PAYMENT_PROVIDER_URL: string | null = null; // TODO: set when a payment gateway is provisioned

export function RegistrationForm({
  id = "register",
}: {
  id?: string;
} = {}) {
  const router = useRouter();
  const [data, setData] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);

  const update = (k: "name" | "phone" | "email", v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Persist the lead client-side so the thank-you page can greet by name
    try {
      sessionStorage.setItem("suitsai_lead", JSON.stringify(data));
    } catch {}

    // If a real payment gateway is configured, forward to it.
    if (PAYMENT_PROVIDER_URL) {
      const params = new URLSearchParams({
        name: data.name,
        phone: data.phone,
        email: data.email,
        amount: "594",
        currency: "ILS",
        successUrl: `${window.location.origin}${window.location.pathname.replace(
          /\/?$/,
          "/"
        )}thank-you/`,
      });
      window.location.href = `${PAYMENT_PROVIDER_URL}?${params.toString()}`;
      return;
    }

    // Otherwise: brief pseudo-processing then go to thank-you
    await new Promise((r) => setTimeout(r, 700));
    router.push("/thank-you");
  }

  return (
    <motion.form
      id={id}
      onSubmit={handleSubmit}
      className="registration-form"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      aria-label="טופס הרשמה לבוטקמפ Suits AI"
    >
      {/* Limited-time offer badge */}
      <div className="form-banner">
        <span className="banner-pulse" aria-hidden="true" />
        <span className="banner-label">הטבה לזמן מוגבל</span>
      </div>

      {/* Price row */}
      <div className="form-prices">
        <span className="price-old" aria-label="מחיר מקורי">
          ₪1,299
        </span>
        <span className="price-new" aria-label="מחיר אחרי הטבה">
          <span className="price-currency">₪</span>594
        </span>
      </div>

      <p className="form-intro">
        שריינו את מקומכם במחזור הקרוב
      </p>

      {/* Fields */}
      <div className="form-fields">
        <div className="field-group">
          <label htmlFor={`${id}-name`} className="sr-only">
            שם מלא
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            placeholder="שם מלא"
            required
            autoComplete="name"
            minLength={2}
            maxLength={80}
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="form-input"
            disabled={loading}
          />
        </div>
        <div className="field-group">
          <label htmlFor={`${id}-phone`} className="sr-only">
            טלפון
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="טלפון"
            required
            autoComplete="tel"
            pattern="[0-9\-\+\s]{9,15}"
            maxLength={20}
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="form-input"
            disabled={loading}
          />
        </div>
        <div className="field-group">
          <label htmlFor={`${id}-email`} className="sr-only">
            אימייל
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            placeholder="אימייל"
            required
            autoComplete="email"
            maxLength={120}
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="form-input"
            disabled={loading}
          />
        </div>
      </div>

      <button
        type="submit"
        className="form-submit btn-shimmer"
        disabled={loading}
      >
        <span>{loading ? "מעבר לתשלום…" : "אני רוצה לשמור מקום"}</span>
        {!loading && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "scaleX(-1)" }}
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        )}
      </button>

      <p className="form-disclaimer">
        לאחר ההרשמה תועברו לעמוד תשלום מאובטח.
      </p>

      <p className="form-consent">
        בלחיצה על הכפתור הנכם מאשרים שקראתם את{" "}
        <Link href="/privacy" target="_blank" rel="noopener noreferrer">
          מדיניות הפרטיות
        </Link>{" "}
        ואת{" "}
        <Link href="/terms" target="_blank" rel="noopener noreferrer">
          התקנון
        </Link>
        , ומסכימים לקבל הודעות תפעוליות הקשורות לבוטקמפ.
      </p>
    </motion.form>
  );
}
