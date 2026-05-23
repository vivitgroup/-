"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cartContext";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { count } = useCart();

  const tabs = [
    { id: "home", label: "الرئيسية", href: "/", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
    { id: "fabrics", label: "الأقمشة", href: "/fabrics", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.651V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.244a1.5 1.5 0 0 1 1.06.44l1.19 1.19a3.004 3.004 0 0 1-.621 4.721" /></svg> },
    { id: "search", label: "بحث", href: "/search", isCenter: true, icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg> },
    { id: "cart", label: "سلتي", href: "/cart", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg> },
    { id: "profile", label: "حسابي", href: "/profile", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg> },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-black/8 pb-[max(env(safe-area-inset-bottom,0px),8px)] pt-2 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
      <div className="max-w-md mx-auto grid grid-cols-5 items-end px-1">
        {tabs.map((tab) =>
          tab.isCenter ? (
            <Link key={tab.id} href={tab.href} className="flex flex-col items-center justify-end gap-0.5 relative text-secondary/40">
              <div className="flex flex-col items-center -mt-5">
                <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center shadow-xl shadow-brand/30">
                  {tab.icon}
                </div>
                <span className="text-[10px] font-bold mt-1 text-brand">{tab.label}</span>
              </div>
            </Link>
          ) : (
            <Link key={tab.id} href={tab.href}
              className={`flex flex-col items-center justify-end gap-0.5 relative pb-1 transition-all ${
                pathname === tab.href ? "text-brand" : "text-secondary/40"
              }`}>
              <div className="relative">
                {tab.icon}
                {tab.id === "cart" && count > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand text-white text-[9px] font-black rounded-full flex items-center justify-center">
                    {Math.round(count)}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold truncate max-w-[56px] text-center">{tab.label}</span>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
