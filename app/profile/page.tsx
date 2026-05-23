"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function ProfilePage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-secondary mb-2">مرحباً بك</h1>
            <p className="text-secondary/50 text-sm">سجل دخولك للوصول لطلباتك ومفضلتك</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-black/6 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-black/8">
              <button onClick={() => setTab("login")} className={`flex-1 py-4 text-sm font-bold transition-all ${
                tab === "login" ? "text-brand border-b-2 border-brand" : "text-secondary/50"
              }`}>تسجيل الدخول</button>
              <button onClick={() => setTab("register")} className={`flex-1 py-4 text-sm font-bold transition-all ${
                tab === "register" ? "text-brand border-b-2 border-brand" : "text-secondary/50"
              }`}>إنشاء حساب</button>
            </div>

            <div className="p-6 space-y-4">
              {tab === "register" && (
                <div>
                  <label className="text-xs font-bold text-secondary/60 block mb-1.5">الاسم الكامل</label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface" />
                </div>
              )}
              <div>
                <label className="text-xs font-bold text-secondary/60 block mb-1.5">
                  {tab === "login" ? "الجوال أو الإيميل" : "رقم الجوال"}
                </label>
                <input type="text" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface" />
              </div>
              {tab === "register" && (
                <div>
                  <label className="text-xs font-bold text-secondary/60 block mb-1.5">البريد الإلكتروني</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface" />
                </div>
              )}
              <div>
                <label className="text-xs font-bold text-secondary/60 block mb-1.5">كلمة المرور</label>
                <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-brand/40 bg-surface" />
              </div>

              {tab === "login" && (
                <div className="flex justify-end">
                  <button className="text-xs text-brand font-bold hover:underline">نسيت كلمة المرور؟</button>
                </div>
              )}

              <button className="w-full py-4 bg-brand text-white rounded-xl font-black hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 mt-2">
                {tab === "login" ? "تسجيل الدخول" : "إنشاء الحساب"}
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-black/8" /></div>
                <div className="relative text-center"><span className="bg-white px-3 text-xs text-secondary/30 font-medium">أو</span></div>
              </div>

              <a href={`https://wa.me/966546618873?text=مرحبا، أريد إنشاء حساب`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-green-500 text-green-600 font-bold text-sm hover:bg-green-50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                تسجيل عبر واتساب
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-secondary/30 mt-6">
            بالتسجيل أنت توافق على{" "}
            <a href="#" className="text-brand hover:underline">الشروط والأحكام</a>
            {" "}و{" "}
            <a href="#" className="text-brand hover:underline">سياسة الخصوصية</a>
          </p>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
