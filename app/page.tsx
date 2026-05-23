import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import TrustBadges from "@/components/TrustBadges";
import CategoriesGrid from "@/components/CategoriesGrid";
import ProjectsBanner from "@/components/ProjectsBanner";
import Collections from "@/components/Collections";
import WhyGuthmi from "@/components/WhyGuthmi";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import AIStudioBanner from "@/components/AIStudioBanner";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero — full screen, no top padding needed */}
      <HeroSlider />

      {/* Below hero */}
      <div className="pb-20 md:pb-0">
        <TrustBadges />
        <CategoriesGrid />

        <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <ProjectsBanner />

        <Collections />
        <WhyGuthmi />
        <AboutSection />
        <Newsletter />
        <Testimonials />
        <AIStudioBanner />
        <Footer />
      </div>

      <MobileBottomNav />
    </main>
  );
}
