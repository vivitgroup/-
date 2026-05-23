import Image from "next/image";

const socialLinks = [
  { name: "Facebook", href: "#", icon: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg> },
  { name: "X", href: "#", icon: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
  { name: "Instagram", href: "#", icon: <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
  { name: "LinkedIn", href: "#", icon: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg> },
];

const footerLinks = [
  { title: "عن بن صديق", links: ["قصتنا", "الفروع", "الوظائف", "المشاريع"] },
  { title: "المساعدة", links: ["تواصل معنا", "مركز الدعم", "تتبع طلبك", "الأسئلة الشائعة"] },
  { title: "القانونية", links: ["الشروط والأحكام", "سياسة الخصوصية", "حقوق المستهلك", "الإرجاع والاستبدال"] },
  { title: "أدوات", links: ["حاسبة الأقمشة", "مود بورد", "استديو AI", "استديو التصميم"] },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white font-tajawal">
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-6">
          <div className="flex gap-8 lg:gap-12 items-start">
            <div className="shrink-0 w-44 space-y-3">
              <div className="brightness-0 invert">
                <Image src="/logo.svg" alt="Bin Siddiq Fabric" width={110} height={55} className="h-11 w-auto object-contain" />
              </div>
              <p className="text-white/35 text-[11px] leading-relaxed">أقمشة فاخرة وجودة لا مثيل لها منذ عام ١٩٤٢</p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} title={s.name}
                    className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center hover:bg-brand text-white/30 hover:text-white transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-6">
              {footerLinks.map((col) => (
                <div key={col.title}>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-white/50 mb-2.5">{col.title}</h4>
                  <ul className="space-y-1.5">
                    {col.links.map((link) => (
                      <li key={link}><a href="#" className="text-white/40 hover:text-brand transition-colors text-[12px]">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="shrink-0 space-y-2">
              <a href="tel:+966920000531" className="flex items-center gap-2 group" dir="ltr">
                <svg className="w-3.5 h-3.5 text-brand/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                <span className="text-white/50 text-[12px] group-hover:text-white transition-colors">920 000 531</span>
              </a>
              <a href="https://wa.me/966546618873" className="flex items-center gap-2 group" dir="ltr">
                <svg className="w-3.5 h-3.5 text-green-500/50" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                <span className="text-white/50 text-[12px] group-hover:text-white transition-colors">054 661 8873</span>
              </a>
              <a href="mailto:info@binsiddiq.com" className="flex items-center gap-2 group" dir="ltr">
                <svg className="w-3.5 h-3.5 text-brand/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                <span className="text-white/50 text-[12px] group-hover:text-white transition-colors">info@binsiddiq.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            <p className="text-[10px] text-white/25">© 2026 Bin Siddiq Fabric. جميع الحقوق محفوظة.</p>
            <div className="flex gap-3 text-[10px] text-white/25">
              <a href="#" className="hover:text-white/50">الخصوصية</a>
              <a href="#" className="hover:text-white/50">الشروط</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4 pt-6 pb-24">
        <div className="mb-4 brightness-0 invert">
          <Image src="/logo.svg" alt="Bin Siddiq" width={90} height={45} className="h-9 w-auto" />
        </div>
        <p className="text-white/35 text-[11px] mb-4">أقمشة فاخرة وجودة لا مثيل لها منذ عام ١٩٤٢</p>
        <div className="flex gap-1.5 mb-4">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.href} className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:bg-brand transition-all">{s.icon}</a>
          ))}
        </div>
        <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between text-[9px] text-white/20">
          <p>© 2026 Bin Siddiq Fabric</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white/40">الخصوصية</a>
            <a href="#" className="hover:text-white/40">الشروط</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
