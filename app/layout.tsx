import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AI Suits — חליפה חכמה לעסק שלך",
  description:
    "מותג הכשרה פרקטי שמכשיר בעלי עסקים, יזמים ואנשי ביצוע לבנות, ליישם ולשווק טוב יותר עם AI, אוטומציה ומערכות חכמות.",
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
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <body className="min-h-screen overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
