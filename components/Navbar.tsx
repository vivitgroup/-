"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cartContext";
import { useFavorites } from "@/lib/favoritesContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { count } = useCart();
  const { favorites } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "الأقمشة", dropdown: [
      { label: "أقمشة التنجيد", href: "/fabrics?category=upholstery" },
      { label: "أقمشة الستائر", href: "/fabrics?category=curtains" },
      { label: "المخدات", href: "/fabrics?category=pillows" },
      { label: "الإكسسوارات", href: "/fabrics?category=accessories" },
    ]},
    { label: "الستائر", dropdown: [
      { label: "مخمل", href: "/fabrics?category=curtains&q=مخمل" },
      { label: "شيفون", href: "/fabrics?category=curtains&q=شيفون" },
      { label: "بلاك أوت", href: "/fabrics?category=curtains&q=بلاك أوت" },
      { label: "قطن", href: "/fabrics?category=curtains&q=قطن" },
    ]},
    { label: "الخدمات", dropdown: [
      { label: "استديو AI", href: "/#studio" },
      { label: "حاسبة الأقمشة", href: "/#studio" },
      { label: "مود بورد", href: "/#studio" },
    ]},
  ];

  return (
    <>
      <header className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-white border-gray-100 shadow-sm" : "bg-transparent border-white/10"
      }`}>
        <div className="w-full px-6 lg:px-12 h-20 flex items-center gap-4 relative">
          <Link href="/" className="flex items-center shrink-0 z-50">
            <div className={scrolled ? "" : "brightness-0 invert"}>
              <Image src="/logo.svg" alt="Bin Siddiq Fabric" width={120} height={60} className="h-12 w-auto object-contain" />
            </div>
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-1 h-full mx-4">
            {navLinks.map((link) => (
              <div key={link.label} className="relative h-full flex items-center">
                {link.dropdown ? (
                  <div className="relative" onMouseEnter={() => setActiveDropdown(link.label)} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className={`px-4 h-full text-sm font-bold tracking-wide transition-colors flex items-center gap-1 py-2 ${
                      scrolled ? "text-secondary/70 hover:text-brand" : "text-white/80 hover:text-white"
                    }`}>
                      {link.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50">
                        {link.dropdown.map((item) => (
                          <Link key={item.label} href={item.href} className="block px-4 py-2.5 text-sm text-secondary/70 hover:text-brand hover:bg-surface transition-colors">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href!} className={`px-4 text-sm font-bold tracking-wide transition-colors py-2 ${
                    scrolled ? "text-secondary hover:text-brand" : "text-white/90 hover:text-white"
                  }`}>{link.label}</Link>
                )}
              </div>
            ))}
            <Link href="/#studio" className={`mx-2 px-5 py-2 rounded-full text-xs font-black transition-all ${
              scrolled ? "bg-brand text-white hover:bg-brand-dark" : "bg-white text-brand hover:bg-white/90"
            }`}>استديو AI</Link>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <button onClick={() => setSearchOpen(true)} className={`transition-colors ${scrolled ? "text-secondary/60 hover:text-brand" : "text-white/80 hover:text-white"}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </button>
            <div className={`h-5 w-px ${scrolled ? "bg-gray-200" : "bg-white/20"}`} />
            <Link href="/favorites" className={`relative transition-colors ${scrolled ? "text-secondary/60 hover:text-brand" : "text-white/80 hover:text-white"}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              {favorites.length > 0 && <span className="absolute -top-1 -left-1 w-4 h-4 bg-brand text-white text-[9px] font-black rounded-full flex items-center justify-center">{favorites.length}</span>}
            </Link>
            <Link href="/cart" className={`relative transition-colors ${scrolled ? "text-secondary/60 hover:text-brand" : "text-white/80 hover:text-white"}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg>
              {count > 0 && <span className="absolute -top-1 -left-1 w-4 h-4 bg-brand text-white text-[9px] font-black rounded-full flex items-center justify-center">{Math.round(count)}</span>}
            </Link>
            <Link href="/profile" className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
              scrolled ? "bg-brand text-white border-brand hover:bg-brand-dark" : "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
            }`}>تسجيل الدخول</Link>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
              <input autoFocus value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && searchQuery) { window.location.href = `/search?q=${searchQuery}`; setSearchOpen(false); }}}
                placeholder="ابحث عن أقمشة، ألوان، مجموعات..."
                className="flex-1 text-base font-medium text-secondary outline-none placeholder:text-secondary/30" />
              <button onClick={() => setSearchOpen(false)} className="text-secondary/40 hover:text-brand">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["مخمل","جاكار","ستائر","شانيل","بلاك أوت"].map(tag => (
                <Link key={tag} href={`/search?q=${tag}`} onClick={() => setSearchOpen(false)}
                  className="px-3 py-1.5 bg-surface rounded-full text-xs font-bold text-secondary/60 hover:bg-brand hover:text-white transition-all">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between h-14 px-4">
          <button onClick={() => setDrawerOpen(true)} className="w-9 h-9 flex items-center justify-center text-secondary/70">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/logo.svg" alt="Bin Siddiq" width={90} height={45} className="h-9 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(true)} className="text-secondary/60">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </button>
            <Link href="/cart" className="relative text-secondary/60">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg>
              {count > 0 && <span className="absolute -top-1 -left-1 w-4 h-4 bg-brand text-white text-[9px] font-black rounded-full flex items-center justify-center">{Math.round(count)}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-secondary/40" onClick={() => setDrawerOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Image src="/logo.svg" alt="Bin Siddiq" width={90} height={45} className="h-9 w-auto" />
              <button onClick={() => setDrawerOpen(false)} className="w-8 h-8 flex items-center justify-center text-secondary/40">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "جميع الأقمشة", href: "/fabrics" },
                { label: "أقمشة التنجيد", href: "/fabrics?category=upholstery" },
                { label: "الستائر", href: "/fabrics?category=curtains" },
                { label: "المفضلة", href: "/favorites" },
                { label: "سلة الشراء", href: "/cart" },
                { label: "فروعنا", href: "/branches" },
                { label: "تواصل معنا", href: "/contact" },
                { label: "من نحن", href: "/about" },
              ].map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-bold text-secondary/70 hover:bg-surface hover:text-brand transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-6">
              <Link href="/profile" onClick={() => setDrawerOpen(false)}
                className="block w-full text-center py-3 bg-brand text-white rounded-xl font-bold text-sm hover:bg-brand-dark transition-colors">
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
