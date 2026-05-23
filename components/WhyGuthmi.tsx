const pillars = [
  {
    num: "01",
    title: "أقمشة عالمية",
    desc: "نستورد أجود الأقمشة من أرقى المصانع الأوروبية والعالمية",
    image: "https://picsum.photos/seed/why1/600/800",
  },
  {
    num: "02",
    title: "خبرة ٨٠ عاماً",
    desc: "ثمانية عقود من التميز في صناعة الأقمشة والمفروشات الفاخرة",
    image: "https://picsum.photos/seed/why2/600/800",
  },
  {
    num: "03",
    title: "تصاميم حصرية",
    desc: "مجموعات حصرية صُممت خصيصاً لتناسب الذوق العربي الرفيع",
    image: "https://picsum.photos/seed/why3/600/800",
  },
];

export default function WhyGuthmi() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14 lg:mb-20">
          <span className="text-brand font-bold text-[11px] md:text-xs block mb-3 tracking-widest uppercase">
            لماذا بن صديق
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary leading-tight">
            معايير جودتنا
          </h2>
        </div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
          {pillars.map((p) => (
            <div key={p.num} className="group cursor-pointer">
              <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-md mb-6 hover:shadow-xl transition-all duration-500">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-60" />
                <div className="absolute top-5 right-5">
                  <span className="text-white/20 text-5xl md:text-6xl font-black leading-none">
                    {p.num}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-secondary text-lg md:text-xl font-black group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="text-secondary/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
