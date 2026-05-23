"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { id: 1, image: "https://picsum.photos/seed/fabric1/1920/1080", label: "حصرياً بن صديق", title: "عالم بن صديق للأقمشة الفاخرة", desc: "اكتشف تشكيلتنا المميزة من أجود الأقمشة", btn: "تصفح التشكيلة" },
  { id: 2, image: "https://picsum.photos/seed/fabric2/1920/1080", label: "تشكيلة جديدة", title: "لمسات كلاسيكية لمنزلك", desc: "حول منزلك إلى تحفة فنية مع أحدث مجموعاتنا", btn: "تصفح التشكيلة" },
  { id: 3, image: "https://picsum.photos/seed/fabric3/1920/1080", label: "أناقة بلا حدود", title: "أقمشة تروي حكاية", desc: "أجود الأقمشة من مصادر عالمية لمساحات تعكس شخصيتك", btn: "اكتشف المزيد" },
  { id: 4, image: "https://picsum.photos/seed/fabric4/1920/1080", label: "تشكيلات مختارة", title: "تشكيلات حصرية", desc: "خامات راقية وتفاصيل ترفع أناقة المجلس والصالون", btn: "تصفح التشكيلة" },
  { id: 5, image: "https://picsum.photos/seed/fabric5/1920/1080", label: "الفخامة الحديثة", title: "صُنعت بإتقان لك", desc: "ثمانية عقود من الخبرة في خدمة أرقى الأذواق", btn: "اعرف أكثر" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100dvh" }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((slide, i) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <div className={`absolute inset-0 ${i === current ? "ken-burns" : ""}`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="text-brand font-bold text-xs tracking-widest uppercase block mb-4 opacity-90">{slide.label}</span>
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-black mb-4 leading-tight max-w-4xl">{slide.title}</h1>
            <p className="text-white/70 text-sm md:text-lg max-w-xl mb-8">{slide.desc}</p>
            <a href="#" className="px-8 py-3 bg-brand text-white font-bold rounded-full text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand/30 hover:scale-105">
              {slide.btn}
            </a>
          </div>
        </div>
      ))}

      <button onClick={prev} aria-label="Previous"
        className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-brand hover:border-brand hover:text-white transition-all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M9 18l6-6-6-6" /></svg>
      </button>
      <button onClick={next} aria-label="Next"
        className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-brand hover:border-brand hover:text-white transition-all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M15 18l-6-6 6-6" /></svg>
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 ${i === current ? "w-12 bg-brand" : "w-6 bg-white/40 hover:bg-white/70"}`} />
        ))}
      </div>

      <style jsx>{`@media (max-width: 768px) { section { height: 78vh !important; min-height: 420px; } }`}</style>
    </section>
  );
}
