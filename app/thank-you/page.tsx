import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "תודה — Suits AI Bootcamp",
  description:
    "ההרשמה התקבלה. נשלח לך הודעה במייל עם כל הפרטים על המחזור הקרוב.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="relative">
        <ThankYouContent />
      </main>
      <Footer />
    </>
  );
}
