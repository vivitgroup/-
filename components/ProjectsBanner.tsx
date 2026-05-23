export default function ProjectsBanner() {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center scale-110"
          style={{ backgroundImage: "url(https://picsum.photos/seed/projects/1920/900)" }}
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-brand font-bold text-[10px] md:text-xs block mb-4 tracking-widest uppercase">
          أقمشة فاخرة
        </span>
        <h2
          className="text-white text-2xl md:text-4xl lg:text-6xl font-black max-w-4xl mb-6"
          style={{ lineHeight: 1.5 }}
        >
          لمشاريعك الكبري
        </h2>
        <p className="text-white/50 text-sm md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          نخدم الفنادق والمطاعم والقصور - أكثر من ٨٠ عاماً من الخبرة
        </p>
        <a
          href="#"
          className="inline-block border-2 border-white/30 text-white px-10 py-4 rounded-full text-xs md:text-sm font-bold hover:bg-white hover:text-secondary transition-all duration-300"
        >
          اكتشف حلول المشاريع
        </a>
      </div>
    </section>
  );
}
