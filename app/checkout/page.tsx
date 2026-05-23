"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { useCart } from "@/lib/cartContext";
import { shippingSettings } from "@/lib/data";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", address: "", notes: "", payment: "cod",
  });

  const shipping = total > shippingSettings.freeAbove ? 0 : shippingSettings.flatRate;
  const vat = (total + shipping) * 0.15;
  const grandTotal = total + shipping + vat;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ← هنا تقدر تضيف API call لإرسال الطلب
    clearCart();
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar />
        <div className="pt-20 pb-24 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-secondary mb-3">تم إرسال طلبك بنجاح! 🎉</h2>
          <p className="text-secondary/50 text-sm mb-2">سيتواصل معك فريقنا خلال 24 ساعة لتأكيد الطلب</p>
          <p className="text-secondary/40 text-xs mb-8">سيصلك الطلب خلال {shippingSettings.estimatedDays}</p>
          <Link href="/" className="px-8 py-4 bg-brand text-white rounded-xl font-bold hover:bg-brand-dark transition-all">
            العودة للرئيسية
          </Link>
        </div>
        <Footer />
        <MobileBottomNav />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-secondary mb-4">السلة فارغة</h2>
          <Link href="/fabrics" className="px-6 py-3 bg-brand text-white rounded-xl font-bold">تسوق الآن</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <h1 className="text-2xl md:text-3xl font-black text-secondary mb-8">إتمام الشراء</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <div className="lg:col-span-3 space-y-6">
                {/* Personal Info */}
                <div className="bg-white rounded-2xl p-6 border border-black/6">
                  <h3 className="font-black text-secondary text-base mb-5">بيانات الشخصية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "الاسم الكامل", type: "text", required: true },
                      { key: "phone", label: "رقم الجوال", type: "tel", required: true },
                      { key: "email", label: "البريد الإلكتروني", type: "email", required: false },
                    ].map((field) => (
                      <div key={field.key} className={field.key === "name" ? "md:col-span-2" : ""}>
                        <label className="text-xs font-bold text-secondary/60 block mb-1.5">{field.label}</label>
                        <input type={field.type} required={field.required}
                          value={form[field.key as keyof typeof form]}
                          onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/50 bg-surface" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-2xl p-6 border border-black/6">
                  <h3 className="font-black text-secondary text-base mb-5">عنوان التوصيل</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-secondary/60 block mb-1.5">المدينة</label>
                      <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required
                        className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/50 bg-surface">
                        <option value="">اختر المدينة</option>
                        {["الرياض","جدة","الدمام","مكة المكرمة","المدينة المنورة","الطائف","تبوك","أبها","الخبر","حائل"].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-secondary/60 block mb-1.5">العنوان التفصيلي</label>
                      <textarea rows={3} required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })}
                        placeholder="الحي، الشارع، رقم المبنى..."
                        className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/50 bg-surface resize-none" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-secondary/60 block mb-1.5">ملاحظات إضافية (اختياري)</label>
                      <textarea rows={2} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}
                        placeholder="أي تعليمات خاصة للتوصيل..."
                        className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/50 bg-surface resize-none" />
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white rounded-2xl p-6 border border-black/6">
                  <h3 className="font-black text-secondary text-base mb-5">طريقة الدفع</h3>
                  <div className="space-y-3">
                    {[
                      { id: "cod", label: "الدفع عند الاستلام", desc: "ادفع نقداً عند استلام طلبك", icon: "💵" },
                      { id: "bank", label: "تحويل بنكي", desc: "سيتم إرسال بيانات الحساب بعد الطلب", icon: "🏦" },
                      { id: "whatsapp", label: "طلب عبر واتساب", desc: "سيتواصل معك فريقنا لإتمام الطلب", icon: "💬" },
                    ].map((method) => (
                      <label key={method.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        form.payment === method.id ? "border-brand bg-brand/5" : "border-black/8 hover:border-brand/30"
                      }`}>
                        <input type="radio" name="payment" value={method.id} checked={form.payment === method.id}
                          onChange={() => setForm({ ...form, payment: method.id })} className="accent-brand w-4 h-4" />
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <p className="font-bold text-secondary text-sm">{method.label}</p>
                          <p className="text-secondary/50 text-xs">{method.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 border border-black/6 sticky top-24">
                  <h3 className="font-black text-secondary text-base mb-5">ملخص الطلب</h3>
                  <div className="space-y-3 mb-5 max-h-60 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3 items-center">
                        <div className="w-12 h-12 rounded-lg bg-cover bg-center flex-shrink-0"
                          style={{ backgroundImage: `url(${item.product.image})` }} />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-secondary truncate">{item.product.name}</p>
                          <p className="text-secondary/40 text-xs">{item.quantity} م</p>
                        </div>
                        <span className="font-bold text-brand text-sm flex-shrink-0">{(item.product.price * item.quantity).toFixed(0)} ر.س</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-black/8 pt-4 space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-secondary/60">المجموع</span><span className="font-bold">{total.toFixed(2)} ر.س</span></div>
                    <div className="flex justify-between text-sm"><span className="text-secondary/60">الشحن</span><span className={`font-bold ${shipping === 0 ? "text-green-600" : ""}`}>{shipping === 0 ? "مجاني" : `${shipping} ر.س`}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-secondary/60">ضريبة 15%</span><span className="font-bold">{vat.toFixed(2)} ر.س</span></div>
                    <div className="flex justify-between border-t border-black/8 pt-2 mt-2">
                      <span className="font-black text-secondary">الإجمالي</span>
                      <span className="font-black text-brand text-xl">{grandTotal.toFixed(2)} ر.س</span>
                    </div>
                  </div>
                  <button type="submit"
                    className="mt-5 w-full py-4 bg-brand text-white rounded-xl font-black hover:bg-brand-dark transition-all shadow-lg shadow-brand/20">
                    تأكيد الطلب
                  </button>
                  <p className="text-center text-secondary/30 text-xs mt-3">🔒 معاملاتك آمنة ومحمية</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
