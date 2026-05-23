export default function AIStudioBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14" id="studio">
      <section className="relative bg-secondary rounded-2xl lg:rounded-3xl overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute top-8 right-10 w-16 h-16 text-brand/10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
          </svg>
        </div>
        <div className="absolute bottom-6 left-12 w-8 h-8 text-brand/10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-10 md:py-14 gap-8 md:gap-6">
          <div className="max-w-lg text-center md:text-start">
            <span className="text-brand font-bold text-[10px] md:text-xs block mb-3 tracking-widest uppercase">
              مدعوم بالذكاء الاصطناعي
            </span>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-tight">
              جرّب استديو بن صديق بالذكاء الاصطناعي
            </h2>
            <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed">
              صمّم غرفتك افتراضياً وشاهد كيف ستبدو الأقمشة في منزلك
            </p>
          </div>
          <a
            href="#"
            className="group px-10 py-4 bg-brand text-white text-sm font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/25 flex-shrink-0 flex items-center gap-3"
          >
            جرب الآن
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
