"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { companyInfo } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ← هنا تضيف API call لإرسال الرسالة
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        <div className="bg-secondary text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-3">تواصل معنا</h1>
            <p className="text-white/50">نحن هنا للمساعدة — لا تتردد في التواصل</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-xl font-black text-secondary mb-6">بياناتنا</h2>
              {[
                { icon: "📞", title: "هاتف", value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                { icon: "💬", title: "واتساب", value: companyInfo.whatsapp, href: `https://wa.me/${companyInfo.whatsapp}` },
                { icon: "✉️", title: "إيميل", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                { icon: "📍", title: "العنوان", value: companyInfo.address, href: "#" },
              ].map((item) => (
                <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-black/6 hover:border-brand/30 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary/40 mb-0.5">{item.title}</p>
                    <p className="font-bold text-secondary group-hover:text-brand transition-colors text-sm">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* Social */}
              <div className="bg-white rounded-2xl p-5 border border-black/6">
                <p className="text-xs font-bold text-secondary/40 mb-3">تابعنا</p>
                <div className="flex gap-3">
                  {Object.entries(companyInfo.social).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-surface border border-black/8 flex items-center justify-center text-secondary/50 hover:bg-brand hover:text-white hover:border-brand transition-all text-sm font-bold capitalize">
                      {platform[0].toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-white rounded-2xl p-12 border border-black/6 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-black text-secondary mb-2">تم إرسال رسالتك!</h3>
                  <p className="text-secondary/50 text-sm mb-6">سنرد عليك خلال 24 ساعة</p>
                  <button onClick={() => setSent(false)} className="px-6 py-3 bg-brand text-white rounded-xl font-bold hover:bg-brand-dark transition-all">
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-black/6 space-y-4">
                  <h2 className="text-xl font-black text-secondary mb-6">أرسل رسالة</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "الاسم", type: "text", required: true },
                      { key: "phone", label: "الجوال", type: "tel", required: true },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="text-xs font-bold text-secondary/60 block mb-1.5">{f.label}</label>
                        <input type={f.type} required={f.required}
                          value={form[f.key as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-secondary/60 block mb-1.5">البريد الإلكتروني</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-secondary/60 block mb-1.5">الموضوع</label>
                    <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface">
                      <option value="">اختر الموضوع</option>
                      <option>استفسار عن منتج</option>
                      <option>طلب عرض سعر</option>
                      <option>شكوى أو ملاحظة</option>
                      <option>طلب مشاريع</option>
                      <option>أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-secondary/60 block mb-1.5">الرسالة</label>
                    <textarea rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-brand text-white rounded-xl font-black hover:bg-brand-dark transition-all shadow-lg shadow-brand/20">
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
