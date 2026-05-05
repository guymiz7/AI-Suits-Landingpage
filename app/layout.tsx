import type { Metadata } from "next";
import { Heebo, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["200", "300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "AI Suits Bootcamp — בונים דפי מכירה מקצועיים עם AI",
  description:
    "בשני מפגשים ממוקדים תלמדו לבנות דפי מכירה מקצועיים וממותגים, עם דיוק בהצעה, בתכנון ובאסטרטגיה — בלי רקע קודם, בחיסכון בזמן ובכסף.",
  keywords: [
    "AI Suits",
    "AI",
    "בוטקמפ",
    "דפי נחיתה",
    "אוטומציה",
    "הכשרה",
    "בעלי עסקים",
  ],
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
      className={`${heebo.variable} ${cormorant.variable} ${mono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden font-sans font-light">
        {children}
      </body>
    </html>
  );
}
