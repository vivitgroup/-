"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ProductCard from "@/components/ui/ProductCard";
import { useFavorites } from "@/lib/favoritesContext";
import { products } from "@/lib/data";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h1 className="text-2xl md:text-3xl font-black text-secondary mb-8">
            المفضلة
            {favProducts.length > 0 && (
              <span className="text-brand text-lg font-bold mr-2">({favProducts.length})</span>
            )}
          </h1>

          {favProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {favProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-7xl mb-6">🤍</div>
              <h2 className="text-xl font-bold text-secondary/60 mb-3">لا توجد منتجات في المفضلة</h2>
              <p className="text-secondary/40 text-sm mb-8">اضغط على أيقونة القلب على أي منتج لحفظه</p>
              <Link href="/fabrics" className="px-8 py-4 bg-brand text-white rounded-xl font-bold hover:bg-brand-dark transition-all">
                تصفح الأقمشة
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
