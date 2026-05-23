"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ProductCard from "@/components/ui/ProductCard";
import { searchProducts, Product } from "@/lib/data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    if (q) setResults(searchProducts(q));
    else setResults([]);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Search box */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input value={query} onChange={e => setQuery(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") window.location.href = `/search?q=${query}`; }}
                placeholder="ابحث عن أقمشة، ألوان، مجموعات..."
                className="w-full pr-12 pl-5 py-4 rounded-2xl border-2 border-black/8 bg-white text-base focus:outline-none focus:border-brand/40 shadow-sm font-medium" />
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {["مخمل","جاكار","ستائر","شانيل","بلاك أوت","قطن"].map(tag => (
                <a key={tag} href={`/search?q=${tag}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    query === tag ? "bg-brand text-white border-brand" : "bg-white text-secondary/60 border-black/8 hover:border-brand hover:text-brand"
                  }`}>
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {query && (
            <p className="text-secondary/50 text-sm mb-6 font-medium">
              {results.length} نتيجة لـ &ldquo;{query}&rdquo;
            </p>
          )}

          {results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {results.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : query ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-secondary/60 mb-2">لا توجد نتائج</h3>
              <p className="text-secondary/40 text-sm mb-6">جرب بحث بكلمة أخرى</p>
              <a href="/fabrics" className="px-6 py-3 bg-brand text-white rounded-xl font-bold hover:bg-brand-dark transition-all">
                تصفح جميع الأقمشة
              </a>
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-secondary/40 font-medium">اكتب كلمة للبحث</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
