import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { branches, companyInfo } from "@/lib/data";

export default function BranchesPage() {
  const cities = [...new Set(branches.map((b) => b.city))];

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-20 pb-24 md:pb-0">
        {/* Header */}
        <div className="bg-secondary text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-3">فروعنا</h1>
            <p className="text-white/50">اعثر على أقرب فرع إليك</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          {cities.map((city) => (
            <div key={city} className="mb-12">
              <h2 className="text-xl font-black text-secondary mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand rounded-full inline-block" />
                {city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {branches.filter((b) => b.city === city).map((branch) => (
                  <div key={branch.id} className="bg-white rounded-2xl p-6 border border-black/6 hover:shadow-md transition-all">
                    <h3 className="font-black text-secondary text-base mb-1">{branch.name}</h3>
                    <p className="text-secondary/50 text-sm mb-4 leading-relaxed">{branch.address}</p>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                        </svg>
                        <span className="text-secondary/60 whitespace-pre-line">{branch.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm" dir="ltr">
                        <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span className="text-secondary/60">{branch.phone}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="flex-1 py-2.5 bg-secondary text-white text-xs font-bold rounded-xl text-center hover:bg-brand transition-all">
                        📍 الخريطة
                      </a>
                      <a href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noopener noreferrer"
                        className="flex-1 py-2.5 bg-green-500 text-white text-xs font-bold rounded-xl text-center hover:bg-green-600 transition-all">
                        💬 واتساب
                      </a>
                      <a href={`tel:${branch.phone}`}
                        className="flex-1 py-2.5 border border-black/10 text-secondary text-xs font-bold rounded-xl text-center hover:border-brand hover:text-brand transition-all">
                        📞 اتصال
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
