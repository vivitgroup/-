"use client";
import { useRef, useState } from "react";

const collections = [
  { name: "مجموعة مكعب", image: "https://picsum.photos/seed/col1/300/400" },
  { name: "مجموعة أرسيليا", image: "https://picsum.photos/seed/col2/300/400" },
  { name: "مجموعة ديزرت روز", image: "https://picsum.photos/seed/col3/300/400" },
  { name: "مجموعة نخلة", image: "https://picsum.photos/seed/col4/300/400" },
  { name: "مجموعة بلومينج جريس", image: "https://picsum.photos/seed/col5/300/400" },
  { name: "مجموعة جاردان", image: "https://picsum.photos/seed/col6/300/400" },
  { name: "مجموعة هدوء", image: "https://picsum.photos/seed/col7/300/400" },
  { name: "مجموعة ويسبر", image: "https://picsum.photos/seed/col8/300/400" },
  { name: "مجموعة سينسوري جاردن", image: "https://picsum.photos/seed/col9/300/400" },
  { name: "مجموعة سيرين", image: "https://picsum.photos/seed/col10/300/400" },
];

export default function Collections() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (dir: "next" | "prev") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === "next" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 lg:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 lg:mb-8 gap-4">
          <div className="text-right">
            <span className="text-brand font-bold text-[11px] md:text-xs block mb-3 tracking-widest uppercase">
              اكتشف أحدث
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-brand">
              مجموعاتنا
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollTo("prev")}
              className="w-10 h-10 rounded-full border border-secondary/15 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all text-secondary/40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("next")}
              className="w-10 h-10 rounded-full border border-secondary/15 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all text-secondary/40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        >
          {collections.map((col, i) => (
            <a
              key={col.name}
              href="#"
              className="flex-shrink-0 w-[200px] md:w-[240px] lg:w-[270px] snap-center group cursor-pointer block"
              onClick={() => setActive(i)}
            >
              <div className="relative transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500 aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${col.image})` }}
                  />
                </div>
              </div>
              <div className="text-center mt-5">
                <h3 className="text-sm md:text-[15px] font-bold text-secondary group-hover:text-brand transition-colors leading-tight">
                  {col.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {collections.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-7 bg-brand" : "w-1.5 bg-secondary/15"
              }`}
            />
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-6">
          <a
            href="#"
            className="block w-full text-center py-4 bg-brand text-white font-bold text-sm md:text-base rounded-xl hover:bg-brand/90 transition-colors shadow-md"
          >
            استكشف أحدث المجموعات
          </a>
        </div>
      </div>
    </section>
  );
}
