"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ProductCard from "@/components/ui/ProductCard";
import { getProductById, products } from "@/lib/data";
import { useCart } from "@/lib/cartContext";
import { useFavorites } from "@/lib/favoritesContext";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { toggle, isFav } = useFavorites();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-secondary/40 mb-8 font-medium">
            <Link href="/" className="hover:text-brand">الرئيسية</Link>
            <span>/</span>
            <Link href="/fabrics" className="hover:text-brand">الأقمشة</Link>
            <span>/</span>
            <span className="text-secondary">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white">
                <div className="w-full h-full bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url(${product.images[activeImg]})` }} />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button key={i} onClick={() => setActiveImg(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        i === activeImg ? "border-brand" : "border-transparent"
                      }`}>
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <span className="text-brand text-xs font-bold tracking-widest uppercase">{product.collection}</span>
                <h1 className="text-2xl md:text-3xl font-black text-secondary mt-1">{product.name}</h1>
                <p className="text-secondary/50 text-sm mt-1">{product.nameEn}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand">{product.price}</span>
                <span className="text-secondary/50 font-bold">ر.س / متر</span>
              </div>

              {/* Stock status */}
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-400"}`} />
                <span className={`text-sm font-bold ${product.inStock ? "text-green-600" : "text-red-500"}`}>
                  {product.inStock ? "متوفر في المخزون" : "نفذ المخزون"}
                </span>
              </div>

              {/* Colors */}
              <div>
                <p className="text-sm font-bold text-secondary mb-3">
                  اللون: <span className="text-brand">{product.colorNames[selectedColor]}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((c, i) => (
                    <button key={i} onClick={() => setSelectedColor(i)} title={product.colorNames[i]}
                      className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                        i === selectedColor ? "border-brand scale-110 shadow-md" : "border-transparent"
                      }`}
                      style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-sm font-bold text-secondary mb-3">الكمية (بالمتر)</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQty(Math.max(0.5, qty - 0.5))}
                    className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-secondary hover:border-brand hover:text-brand transition-all font-bold text-lg">
                    −
                  </button>
                  <span className="w-16 text-center font-black text-lg text-secondary">{qty} م</span>
                  <button onClick={() => setQty(qty + 0.5)}
                    className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-secondary hover:border-brand hover:text-brand transition-all font-bold text-lg">
                    +
                  </button>
                </div>
                <p className="text-secondary/40 text-xs mt-2">الحد الأدنى: 0.5 متر</p>
              </div>

              {/* Total */}
              <div className="bg-surface rounded-xl p-4 border border-black/6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-secondary/60">الإجمالي</span>
                  <span className="text-xl font-black text-brand">{(product.price * qty).toFixed(2)} ر.س</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <button onClick={handleAdd} disabled={!product.inStock}
                  className={`flex-1 py-4 rounded-xl font-black text-sm transition-all ${
                    !product.inStock ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : added ? "bg-green-500 text-white scale-95"
                    : "bg-brand text-white hover:bg-brand-dark active:scale-95 shadow-lg shadow-brand/20"
                  }`}>
                  {added ? "✓ تمت الإضافة!" : product.inStock ? "أضف إلى السلة" : "غير متاح"}
                </button>
                <button onClick={() => toggle(product.id)}
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all ${
                    isFav(product.id) ? "border-brand bg-brand/10 text-brand" : "border-black/15 text-secondary/50 hover:border-brand hover:text-brand"
                  }`}>
                  <svg className={`w-5 h-5 ${isFav(product.id) ? "fill-brand" : "fill-none"}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>

              {/* WhatsApp order */}
              <a href={`https://wa.me/966546618873?text=مرحبا، أريد الاستفسار عن: ${product.name} (${product.id})`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-green-500 text-green-600 font-bold text-sm hover:bg-green-50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                استفسر عبر واتساب
              </a>

              {/* Specs */}
              <div className="border-t border-black/8 pt-6 space-y-3">
                <h3 className="font-bold text-secondary mb-4">المواصفات</h3>
                {[
                  { label: "الخامة", value: product.material },
                  { label: "العرض", value: `${product.width} سم` },
                  { label: "الوزن", value: `${product.weight} جم/م²` },
                  { label: "الاستخدام", value: product.category === "upholstery" ? "تنجيد" : product.category === "curtains" ? "ستائر" : "وسائد" },
                  { label: "كود المنتج", value: product.id },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between text-sm">
                    <span className="text-secondary/50 font-medium">{spec.label}</span>
                    <span className="font-bold text-secondary">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="border-t border-black/8 pt-6">
                <h3 className="font-bold text-secondary mb-3">الوصف</h3>
                <p className="text-secondary/60 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-black text-secondary mb-6">منتجات مشابهة</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
