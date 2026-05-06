import type { Metadata } from "next";
import { Heebo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Suits AI Bootcamp — בוטקמפ לבניית דפי מכירה עם AI",
  description:
    "בשני מפגשים ממוקדים בליווי מלא משלב ההתקנה — תלמדו לבנות דפי מכירה מקצועיים וממותגים, עם דיוק בהצעה, בתכנון ובאסטרטגיה. בלי רקע קודם, עם חיסכון בזמן, בכסף ובתלות באנשי מקצוע.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    title: "Suits AI Bootcamp — בוטקמפ לבניית דפי מכירה עם AI",
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
  icons: {
    icon: "/favicon.ico",
  },
};

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
        {children}
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </body>
    </html>
  );
}
