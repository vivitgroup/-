"use client";
import { useEffect, useRef, useState } from "react";

function useCounter(target: number, suffix: string, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (2000 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return `${count}${suffix}`;
}

const stats = [
  { end: 25, suffix: "+", label: "فرع في المملكة" },
  { end: 500, suffix: "+", label: "موظف وموظفة" },
  { end: 50, suffix: "K+", label: "كود أقمشة" },
  { end: 80, suffix: "+", label: "عاماً من التميز" },
];

function StatItem({ end, suffix, label, inView }: { end: number; suffix: string; label: string; inView: boolean }) {
  const value = useCounter(end, suffix, inView);
  return (
    <div className="space-y-1">
      <div className="text-brand font-black text-3xl md:text-4xl leading-none">{value}</div>
      <div className="text-secondary/40 text-xs md:text-sm font-bold">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative lg:order-2">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://picsum.photos/seed/about/600/750)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-brand-dark text-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-[200px]">
                <div className="text-4xl md:text-5xl font-black leading-none">١٩٤٢</div>
                <div className="text-white/70 text-xs md:text-sm font-bold mt-2">سنة التأسيس</div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-brand/20 rounded-3xl -z-10" />
            </div>
          </div>
          <div className="space-y-8 lg:order-1" ref={ref}>
            <div>
              <span className="text-brand font-bold text-[11px] md:text-xs block mb-3 tracking-widest uppercase">قصتنا</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary leading-tight">حكاية نسجها الشغف</h2>
            </div>
            <p className="text-secondary/60 text-sm md:text-base lg:text-lg leading-[2] font-medium">
              تأسست شركة بن صديق للأقمشة في عام 1942، لتبدأ معها رحلة مميزة من النمو والتوسع. بشغف لإضفاء الألوان على حياة الناس من خلال أرقى أنواع الأقمشة، وصناعة قصص من الأناقة والدفء، والجمال الخالد.
            </p>
            <div className="grid grid-cols-2 gap-6 py-8">
              {stats.map((s) => <StatItem key={s.label} {...s} inView={inView} />)}
            </div>
            <a href="#" className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-xl font-bold text-sm hover:bg-brand transition-all duration-300 shadow-lg">
              اعرف المزيد عنا
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
