import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import TrustSection from "@/components/TrustSection";
import PromotionalCards from "@/components/PromotionalCards";
import InterestRatesSection from "@/components/InterestRatesSection";
import FinancialGuidanceSection from "@/components/FinancialGuidanceSection";
import FeaturesSection from "@/components/FeaturesSection";
import InsightsSection from "@/components/InsightsSection";
import BonusPointsSection from "@/components/BonusPointsSection";
import CommunitySection from "@/components/CommunitySection";
import HelpSection from "@/components/HelpSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <TrustSection />
        <PromotionalCards />
        <InterestRatesSection />
        <FinancialGuidanceSection />
        <FeaturesSection />
        <InsightsSection />
        <BonusPointsSection />
        <CommunitySection />
        <HelpSection />
      </main>
      <Footer />
    </div>
  );
}
