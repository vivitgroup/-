"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { useCart } from "@/lib/cartContext";
import { shippingSettings } from "@/lib/data";

export default function CartPage() {
  const { items, removeItem, updateQty, total, clearCart } = useCart();
  const shipping = total > shippingSettings.freeAbove ? 0 : shippingSettings.flatRate;
  const vat = (total + shipping) * 0.15;
  const grandTotal = total + shipping + vat;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar />
        <div className="pt-20 pb-24 md:pb-0 flex flex-col items-center justify-center min-h-[70vh] px-4">
          <div className="text-7xl mb-6">🛒</div>
          <h2 className="text-2xl font-black text-secondary mb-3">السلة فارغة</h2>
          <p className="text-secondary/50 text-sm mb-8">لم تقم بإضافة أي منتجات بعد</p>
          <Link href="/fabrics" className="px-8 py-4 bg-brand text-white rounded-xl font-bold hover:bg-brand-dark transition-all">
            تصفح الأقمشة
          </Link>
        </div>
        <Footer />
        <MobileBottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-black text-secondary">سلة الشراء</h1>
            <button onClick={clearCart} className="text-sm text-secondary/40 hover:text-brand transition-colors font-medium">
              مسح الكل
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="bg-white rounded-2xl p-4 md:p-6 border border-black/6 flex gap-4">
                  <Link href={`/fabrics/${item.product.id}`} className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.product.image})` }} />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-brand text-[10px] font-bold tracking-wider uppercase">{item.product.collection}</span>
                        <h3 className="font-bold text-secondary text-sm md:text-base leading-tight">{item.product.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-4 h-4 rounded-full border border-black/10"
                            style={{ backgroundColor: item.product.colors[item.colorIndex] }} />
                          <span className="text-secondary/50 text-xs">{item.product.colorNames[item.colorIndex]}</span>
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.product.id)} className="text-secondary/30 hover:text-brand transition-colors flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 border border-black/10 rounded-lg overflow-hidden">
                        <button onClick={() => updateQty(item.product.id, Math.max(0.5, item.quantity - 0.5))}
                          className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface font-bold text-base">−</button>
                        <span className="w-12 text-center text-sm font-bold">{item.quantity}م</span>
                        <button onClick={() => updateQty(item.product.id, item.quantity + 0.5)}
                          className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface font-bold text-base">+</button>
                      </div>
                      <span className="font-black text-brand text-base">
                        {(item.product.price * item.quantity).toFixed(2)} ر.س
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 border border-black/6 sticky top-24">
                <h3 className="font-black text-secondary text-lg mb-6">ملخص الطلب</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary/60 font-medium">المجموع الفرعي</span>
                    <span className="font-bold">{total.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary/60 font-medium">الشحن</span>
                    <span className={`font-bold ${shipping === 0 ? "text-green-600" : ""}`}>
                      {shipping === 0 ? "مجاني" : `${shipping} ر.س`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-green-600 text-xs font-medium">🎉 حصلت على شحن مجاني!</p>
                  )}
                  {shipping > 0 && (
                    <p className="text-secondary/40 text-xs">أضف {(shippingSettings.freeAbove - total).toFixed(0)} ر.س للشحن المجاني</p>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary/60 font-medium">ضريبة القيمة المضافة (15%)</span>
                    <span className="font-bold">{vat.toFixed(2)} ر.س</span>
                  </div>
                  <div className="border-t border-black/8 pt-3 flex justify-between">
                    <span className="font-black text-secondary">الإجمالي</span>
                    <span className="font-black text-brand text-xl">{grandTotal.toFixed(2)} ر.س</span>
                  </div>
                </div>
                <Link href="/checkout"
                  className="block w-full py-4 bg-brand text-white text-center rounded-xl font-black hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 mb-3">
                  إتمام الشراء
                </Link>
                <Link href="/fabrics" className="block w-full py-3 text-center text-sm font-bold text-secondary/60 hover:text-brand transition-colors">
                  متابعة التسوق
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
