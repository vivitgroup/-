"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ProductCard from "@/components/ui/ProductCard";
import { products, Product } from "@/lib/data";

const categories = [
  { id: "all", label: "الكل" },
  { id: "upholstery", label: "التنجيد" },
  { id: "curtains", label: "الستائر" },
  { id: "pillows", label: "المخدات" },
  { id: "accessories", label: "الإكسسوارات" },
];

const sortOptions = [
  { id: "default", label: "الافتراضي" },
  { id: "price-asc", label: "السعر: من الأقل" },
  { id: "price-desc", label: "السعر: من الأعلى" },
  { id: "new", label: "الأحدث" },
];

export default function FabricsPage() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Product[]>(products);

  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    const q = searchParams.get("q") || "";
    setCategory(cat);
    setSearch(q);
  }, [searchParams]);

  useEffect(() => {
    let result = [...products];
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (search) result = result.filter((p) => p.name.includes(search) || p.nameEn.toLowerCase().includes(search.toLowerCase()));
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "new") result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));
    setFiltered(result);
  }, [category, sort, search]);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        {/* Header */}
        <div className="bg-secondary text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-3">معرض الأقمشة</h1>
            <p className="text-white/50 text-sm md:text-base">اكتشف أجود الأقمشة الفاخرة للتنجيد والستائر</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
            {/* Category tabs */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((c) => (
                <button key={c.id} onClick={() => setCategory(c.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    category === c.id ? "bg-brand text-white shadow-md" : "bg-white text-secondary/60 hover:text-brand border border-black/8"
                  }`}>
                  {c.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="بحث..."
                  className="pr-9 pl-4 py-2 rounded-xl border border-black/8 bg-white text-sm focus:outline-none focus:border-brand/40 w-48" />
              </div>
              {/* Sort */}
              <select value={sort} onChange={e => setSort(e.target.value)}
                className="px-3 py-2 rounded-xl border border-black/8 bg-white text-sm text-secondary focus:outline-none focus:border-brand/40">
                {sortOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-secondary/40 text-sm mb-6 font-medium">
            {filtered.length} منتج
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-secondary/60 mb-2">لا توجد نتائج</h3>
              <p className="text-secondary/40 text-sm">جرب تغيير الفلتر أو البحث بكلمة أخرى</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
