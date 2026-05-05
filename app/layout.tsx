import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Suits Bootcamp — בונים דפי מכירה מקצועיים עם AI",
  description:
    "בשני מפגשים ממוקדים תלמדו לבנות דפי מכירה מקצועיים וממותגים, עם דיוק בהצעה, בתכנון ובאסטרטגיה — בלי רקע קודם, בחיסכון בזמן ובכסף.",
  keywords: [
    "AI Suits",
    "AI",
    "אוטומציה",
    "הכשרה",
    "בעלי עסקים",
    "מערכות",
    "שיווק",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen overflow-x-hidden font-sans font-light">
        {children}
      </body>
    </html>
  );
}
