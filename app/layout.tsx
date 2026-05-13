import type { Metadata, Viewport } from "next";
import { Heebo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["200", "300", "400", "500"],
});

// Cormorant Garamond — used ONLY inside the Logo SVG
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400"],
  style: ["italic"],
});

const SITE_URL = "https://guymiz7.github.io/AI-Suits-Landingpage";
const SITE_TITLE = "Suits AI Bootcamp — בוטקמפ לבניית דפי מכירה עם AI";
const SITE_DESC =
  "בשני מפגשים ממוקדים בליווי מלא משלב ההתקנה — תלמדו לבנות דפי מכירה מקצועיים וממותגים, עם דיוק בהצעה, בתכנון ובאסטרטגיה. בלי רקע קודם, עם חיסכון בזמן, בכסף ובתלות באנשי מקצוע.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0b",
};

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s · Suits AI",
  },
  description: SITE_DESC,
  applicationName: "Suits AI",
  keywords: [
    "Suits AI",
    "AI Suits Bootcamp",
    "בוטקמפ AI",
    "דפי נחיתה",
    "דפי מכירה",
    "AI לעסקים",
    "אוטומציה",
    "מתן יעקובסון",
    "גיא מיזינסקי",
    "DigiTech",
    "OCT",
  ],
  authors: [{ name: "Suits AI" }],
  creator: "Suits AI",
  publisher: "Suits AI",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    title: SITE_TITLE,
    description:
      "שני מפגשים ממוקדים. תוצר אמיתי. יכולת שימושית. בלי רקע קודם — בליווי מלא משלב ההתקנה.",
    siteName: "Suits AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suits AI Bootcamp",
    description:
      "תהליך קצר. תוצר אמיתי. יכולת שימושית — בוטקמפ לבניית דפי מכירה עם AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  referrer: "strict-origin-when-cross-origin",
};

// === Structured data — Course + Event + Organization ===
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Suits AI Bootcamp",
    description:
      "בוטקמפ לבניית דפי מכירה מקצועיים בעזרת AI — שני מפגשים ממוקדים בליווי מלא.",
    provider: {
      "@type": "Organization",
      name: "Suits AI",
      url: SITE_URL,
    },
    inLanguage: "he",
    educationalLevel: "Beginner",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      startDate: "2026-05-25T18:00:00+03:00",
      endDate: "2026-05-27T19:30:00+03:00",
      location: { "@type": "VirtualLocation", url: SITE_URL },
      offers: {
        "@type": "Offer",
        price: "594",
        priceCurrency: "ILS",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Suits AI",
    url: SITE_URL,
    description: SITE_DESC,
    founder: [
      { "@type": "Person", name: "מתן יעקובסון" },
      { "@type": "Person", name: "גיא מיזינסקי" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Suits AI Bootcamp — מחזור מאי 2026",
    description:
      "בוטקמפ לבניית דפי מכירה מקצועיים עם AI. שני מפגשים ממוקדים בליווי מלא.",
    startDate: "2026-05-25T18:00:00+03:00",
    endDate: "2026-05-27T19:30:00+03:00",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: SITE_URL },
    inLanguage: "he",
    offers: {
      "@type": "Offer",
      name: "הטבת השקה",
      price: "594",
      priceCurrency: "ILS",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
      validFrom: new Date().toISOString(),
    },
    organizer: {
      "@type": "Organization",
      name: "Suits AI",
      url: SITE_URL,
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden font-sans">
        <a href="#main" className="skip-link">דלג לתוכן הראשי</a>
        <ScrollProgress />
        {children}
        {/* SEO — structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
