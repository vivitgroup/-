"use client";
import Link from "next/link";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cartContext";
import { useFavorites } from "@/lib/favoritesContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, isFav } = useFavorites();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-black/6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <Link href={`/fabrics/${product.id}`} className="block relative overflow-hidden aspect-square">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-brand text-white text-[10px] font-black px-2.5 py-1 rounded-full">جديد</span>
          )}
          {product.isBestseller && (
            <span className="bg-secondary text-white text-[10px] font-black px-2.5 py-1 rounded-full">الأكثر طلباً</span>
          )}
          {!product.inStock && (
            <span className="bg-gray-400 text-white text-[10px] font-black px-2.5 py-1 rounded-full">نفذ المخزون</span>
          )}
        </div>
        {/* Fav button */}
        <button
          onClick={(e) => { e.preventDefault(); toggle(product.id); }}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <svg className={`w-4 h-4 ${isFav(product.id) ? "fill-brand text-brand" : "fill-none text-secondary/50"}`}
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </Link>

      {/* Info */}
      <div className="p-4">
        {/* Collection tag */}
        <span className="text-brand text-[10px] font-bold tracking-wider uppercase">{product.collection}</span>
        <Link href={`/fabrics/${product.id}`}>
          <h3 className="font-bold text-secondary text-sm mt-0.5 mb-1 hover:text-brand transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Colors */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.slice(0, 4).map((c, i) => (
            <div key={i} title={product.colorNames[i]}
              className="w-4 h-4 rounded-full border border-black/10 cursor-pointer hover:scale-125 transition-transform"
              style={{ backgroundColor: c }} />
          ))}
          {product.colors.length > 4 && (
            <span className="text-[10px] text-secondary/40 font-bold self-center">+{product.colors.length - 4}</span>
          )}
        </div>

        {/* Price + add to cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-brand font-black text-lg">{product.price}</span>
            <span className="text-secondary/40 text-xs font-bold mr-1">ر.س / متر</span>
          </div>
          <button
            onClick={() => product.inStock && addItem(product, 1, 0)}
            disabled={!product.inStock}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              product.inStock
                ? "bg-brand text-white hover:bg-brand-dark active:scale-95"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "أضف للسلة" : "غير متاح"}
          </button>
        </div>
      </div>
    </div>
  );
}
