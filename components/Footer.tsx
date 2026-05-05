import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-ink-900">
      <div className="container-luxe py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Logo />
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-graphite-300 sm:text-[15px]">
              בוטקמפ פרקטי שמכשיר אתכם לבנות דפי מכירה מקצועיים וממותגים — עם
              דיוק בהצעה, בתכנון ובאסטרטגיה, בעזרת AI.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="pill">DigiTech</span>
              <span className="pill">Group OCT</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:grid-cols-3">
            <div>
              <p
                className="luxury-caps text-[10px] text-bordeaux-300"
                style={{ letterSpacing: "0.45em" }}
              >
                הבוטקמפ
              </p>
              <ul className="mt-5 space-y-3 text-sm font-light text-graphite-200">
                <li><a href="#what-you-get" className="hover:text-white">מה תקבלו</a></li>
                <li><a href="#audience" className="hover:text-white">למי זה מתאים</a></li>
                <li><a href="#bootcamp" className="hover:text-white">התוכן</a></li>
              </ul>
            </div>
            <div>
              <p
                className="luxury-caps text-[10px] text-bordeaux-300"
                style={{ letterSpacing: "0.45em" }}
              >
                המנטורים
              </p>
              <ul className="mt-5 space-y-3 text-sm font-light text-graphite-200">
                <li><a href="#founders" className="hover:text-white">מתן יעקובסון</a></li>
                <li><a href="#founders" className="hover:text-white">גיא מיזינסקי</a></li>
              </ul>
            </div>
            <div>
              <p
                className="luxury-caps text-[10px] text-bordeaux-300"
                style={{ letterSpacing: "0.45em" }}
              >
                הרשמה
              </p>
              <ul className="mt-5 space-y-3 text-sm font-light text-graphite-200">
                <li><a href="#contact" className="hover:text-white">שמרו לי מקום</a></li>
                <li><a href="#contact-info" className="hover:text-white">שלחו לי פרטים</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-8 text-xs font-light text-graphite-400 sm:flex-row">
          <p>© {new Date().getFullYear()} AI Suits Bootcamp · כל הזכויות שמורות.</p>
          <p style={{ letterSpacing: "0.2em" }}>MADE IN ISRAEL</p>
        </div>
      </div>
    </footer>
  );
}
