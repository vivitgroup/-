export default function CategoriesGrid() {
  const categories = [
    {
      slug: "upholstery",
      label: "الأكثر طلباً",
      title: "أقمشة التنجيد",
      image: "https://picsum.photos/seed/upholstery/800/1000",
      span: "col-span-2 row-span-2",
    },
    {
      slug: "curtains",
      label: "أناقة طبيعية",
      title: "أقمشة الستائر",
      image: "https://picsum.photos/seed/curtains/400/400",
      span: "col-span-1",
    },
    {
      slug: "accessories",
      label: "لمسة الكمال",
      title: "الإكسسوارات",
      image: "https://picsum.photos/seed/accessories/600/400",
      span: "col-span-2 md:col-span-1",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <section className="py-10 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-tajawal text-2xl md:text-4xl font-bold text-secondary">
            تشكيلات بن صديق
          </h2>
          <p className="text-secondary/50 text-xs md:text-sm mt-2 max-w-lg mx-auto">
            تصاميم مستوحاة من التراث العربي بلمسات عصرية تناسب منزلك
          </p>
        </div>

        <div
          className="grid grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4"
          style={{ height: "420px" }}
        >
          {/* Large card */}
          <a
            href="/fabrics"
            className="col-span-2 row-span-2 group relative rounded-2xl md:rounded-[1.5rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${categories[0].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-7">
              <p className="text-white/60 text-[10px] md:text-xs font-bold mb-1">
                {categories[0].label}
              </p>
              <h3 className="font-tajawal text-white text-base md:text-2xl font-bold">
                {categories[0].title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-white/80 text-xs font-bold mt-2 group-hover:text-brand transition-colors">
                تسوق الآن
                <svg className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </a>

          {/* Curtains card */}
          <a
            href="/fabrics"
            className="col-span-1 group relative rounded-2xl md:rounded-[1.5rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${categories[1].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
              <p className="text-white/60 text-[9px] md:text-xs font-bold mb-0.5">
                {categories[1].label}
              </p>
              <h3 className="font-tajawal text-white text-sm md:text-xl font-bold">
                {categories[1].title}
              </h3>
            </div>
          </a>

          {/* AI Studio card */}
          <div className="col-span-1 row-span-2 relative rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-brand flex flex-col items-center justify-center text-center p-4 md:p-8">
            {/* Decorative stars */}
            <div className="absolute top-4 right-4 w-8 h-8 text-white/20">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-4 w-5 h-5 text-white/10">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
              </svg>
            </div>
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/15 flex items-center justify-center mb-3 md:mb-5 backdrop-blur-sm">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
            </div>
            <h3 className="font-tajawal text-white text-sm md:text-2xl font-bold mb-1 md:mb-2">
              صمم منزلك
            </h3>
            <p className="text-white/60 text-[9px] md:text-sm mb-3 md:mb-5 max-w-[200px] leading-relaxed hidden sm:block">
              استخدم الذكاء الاصطناعي لتجربة الأقمشة في غرفتك
            </p>
            <a
              href="#studio"
              className="px-4 md:px-6 py-1.5 md:py-2.5 bg-white text-brand font-bold text-xs md:text-sm rounded-lg md:rounded-xl hover:bg-white/90 transition-all shadow-lg"
            >
              جرب الآن
            </a>
          </div>

          {/* Accessories card */}
          <a
            href="/fabrics"
            className="col-span-2 md:col-span-1 group relative rounded-2xl md:rounded-[1.5rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${categories[2].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
              <p className="text-white/60 text-[9px] md:text-xs font-bold mb-0.5">
                {categories[2].label}
              </p>
              <h3 className="font-tajawal text-white text-sm md:text-xl font-bold">
                {categories[2].title}
              </h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
