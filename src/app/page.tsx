import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import StatsAndPartners from "@/components/StatsAndPartners";
import EmiCalculator from "@/components/EmiCalculator";
import TrustSection from "@/components/TrustSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <StatsAndPartners />
      <EmiCalculator />
      <TrustSection />
      <ReviewsSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
