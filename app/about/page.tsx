import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { companyInfo } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        {/* Hero */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://picsum.photos/seed/about-hero/1920/600)" }} />
          <div className="absolute inset-0 bg-secondary/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-3">من نحن</h1>
            <p className="text-white/60 text-sm md:text-base max-w-lg">{companyInfo.tagline}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <span className="text-brand font-bold text-xs tracking-widest uppercase block mb-3">قصتنا</span>
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-5">حكاية نسجها الشغف</h2>
              <div className="space-y-4 text-secondary/60 text-sm md:text-base leading-relaxed">
                <p>
                  {/* ← ضع قصة الشركة هنا */}
                  تأسست شركة {companyInfo.nameAr} في عام {companyInfo.foundingYear}، لتبدأ معها رحلة مميزة من النمو والتوسع في عالم الأقمشة الفاخرة.
                </p>
                <p>
                  بشغف حقيقي لإضفاء الأناقة على حياة الناس، نقدم أجود أنواع الأقمشة المستوردة من أرقى المصانع العالمية، لنصنع منزلك قصة من الجمال والدفء.
                </p>
                <p>
                  {/* ← أضف المزيد من تاريخ الشركة هنا */}
                  نفخر بخدمة آلاف العملاء في المملكة العربية السعودية والخليج العربي، مقدمين تجربة تسوق استثنائية تجمع بين الجودة العالية والأسعار المناسبة.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://picsum.photos/seed/about-story/600/750)" }} />
              <div className="absolute -bottom-4 -left-4 bg-brand text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-black">{companyInfo.foundingYear}</div>
                <div className="text-white/70 text-xs font-bold mt-1">سنة التأسيس</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { num: "80+", label: "سنة خبرة" },
              { num: "25+", label: "فرع في المملكة" },
              { num: "500+", label: "موظف وموظفة" },
              { num: "50K+", label: "كود أقمشة" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-black/6">
                <div className="text-3xl font-black text-brand mb-1">{stat.num}</div>
                <div className="text-secondary/50 text-sm font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-black text-secondary text-center mb-8">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "⭐", title: "الجودة أولاً", desc: "نختار أجود الخامات من أرقى المصانع العالمية لضمان رضاك التام" },
                { icon: "🤝", title: "الثقة والأمانة", desc: "نبني علاقات طويلة الأمد مع عملائنا مبنية على الصدق والشفافية" },
                { icon: "✨", title: "الابتكار المستمر", desc: "نواكب أحدث صيحات الموضة العالمية ونقدمها بلمسة عربية أصيلة" },
              ].map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-black/6 text-center">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-black text-secondary mb-2">{v.title}</h3>
                  <p className="text-secondary/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">تواصل معنا</h2>
            <p className="text-white/50 text-sm mb-6">نحن هنا لمساعدتك في اختيار أفضل الأقمشة لمنزلك</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-all">
                💬 واتساب
              </a>
              <a href={`tel:${companyInfo.phone}`}
                className="px-6 py-3 bg-white text-secondary rounded-xl font-bold text-sm hover:bg-brand hover:text-white transition-all">
                📞 {companyInfo.phone}
              </a>
              <a href="/contact"
                className="px-6 py-3 bg-brand text-white rounded-xl font-bold text-sm hover:bg-brand-dark transition-all">
                ✉️ راسلنا
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
