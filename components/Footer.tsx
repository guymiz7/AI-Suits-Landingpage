import { Logo } from "./Logo";

const slogans = [
  "חליפה חכמה לעסק שלך",
  "תופרים מערכת שעובדת",
  "שיווק, אוטומציה ו־AI במידה שלך",
  "לבנות נכון. לעבוד חכם.",
  "דיוק עסקי בעולם של AI",
  "תוצאה מתחילה במבנה נכון",
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-ink-900">
      {/* Marquee of slogans */}
      <div className="overflow-hidden border-b border-white/[0.05] py-6">
        <div className="flex animate-shimmer items-center gap-12 whitespace-nowrap font-display text-lg text-graphite-300 [background:linear-gradient(90deg,transparent,#ffffff,transparent)] [background-size:200%_100%] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]">
          {[...slogans, ...slogans, ...slogans].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>AI Suits — {s}</span>
              <span className="text-gold-500">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-luxe py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-md text-graphite-300">
              מותג הכשרה פרקטי שמכשיר בעלי עסקים, יזמים ואנשי ביצוע לבנות,
              ליישם ולשווק טוב יותר עם AI, אוטומציה ומערכות חכמות.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="pill">DigiTech</span>
              <span className="pill">OCT</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
                המותג
              </p>
              <ul className="mt-5 space-y-3 text-sm text-graphite-200">
                <li><a href="#about" className="hover:text-white">מהות</a></li>
                <li><a href="#value" className="hover:text-white">הצעת ערך</a></li>
                <li><a href="#differentiation" className="hover:text-white">בידול</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
                מוצרים
              </p>
              <ul className="mt-5 space-y-3 text-sm text-graphite-200">
                <li><a href="#products" className="hover:text-white">Bootcamp</a></li>
                <li><a href="#products" className="hover:text-white">Program</a></li>
                <li><a href="#products" className="hover:text-white">ליווי / יישום</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
                יצירת קשר
              </p>
              <ul className="mt-5 space-y-3 text-sm text-graphite-200">
                <li><a href="#contact" className="hover:text-white">הזמינו שיחה</a></li>
                <li><a href="#founders" className="hover:text-white">מובילי המותג</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-8 text-xs text-graphite-400 sm:flex-row">
          <p>© {new Date().getFullYear()} AI Suits · כל הזכויות שמורות.</p>
          <p>Tailored Intelligence · Made in Israel</p>
        </div>
      </div>
    </footer>
  );
}
