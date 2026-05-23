"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(https://picsum.photos/seed/newsletter/1920/800)" }}
        />
        <div className="absolute inset-0 bg-secondary/85 backdrop-blur-sm" />
      </div>

      {/* Decorative line */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-brand/50 to-transparent" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <span className="text-brand font-bold text-[11px] md:text-xs block mb-4 tracking-widest uppercase">
          ابقَ على اطلاع
        </span>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-5" style={{ lineHeight: 1.5 }}>
          كن أول من يعرف
        </h2>
        <p className="text-white/50 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
          اشترك في نشرتنا البريدية لتصلك أحدث المجموعات والعروض الحصرية
        </p>

        {submitted ? (
          <div className="py-4 px-8 bg-brand/20 border border-brand/30 rounded-xl text-white font-bold">
            شكراً! تم الاشتراك بنجاح ✓
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="بريدك الإلكتروني"
              required
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium focus:outline-none focus:border-brand/50 focus:bg-white/15 transition-all backdrop-blur-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-brand text-white rounded-xl font-bold text-sm hover:bg-brand/90 transition-all shadow-lg shadow-brand/25 active:scale-95 whitespace-nowrap"
            >
              اشتراك
            </button>
          </form>
        )}

        <p className="text-white/25 text-[10px] md:text-xs mt-5">
          بالاشتراك، أنت توافق على سياسة الخصوصية الخاصة بنا
        </p>
      </div>
    </section>
  );
}
