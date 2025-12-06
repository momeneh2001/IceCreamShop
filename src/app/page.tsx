import Header from "@/components/modules/header/Header";
import BestSellersSection from "@/components/template/bestSellersSection/BestSellersSection";
import DiscoverSection from "@/components/template/discoverSection/DiscoverSection";
import FeaturedProducts from "@/components/template/featuredProducts/FeaturedProducts";
import FeedbackSection from "@/components/template/FeedbackSection/FeedbackSection";
import HeroSection from "@/components/template/heroSection/HeroSection";
import IntroSection from "@/components/template/IntroSection/IntroSection";
import PromotionsSection from "@/components/template/PromotionsSection/PromotionsSection";


export default function Home() {
  return (
    <>
      <Header variant="glass" />
      <main>
        <HeroSection />
        <IntroSection/>
        <FeaturedProducts/>
        <DiscoverSection/>
        <PromotionsSection/>
        <BestSellersSection/>
        <FeedbackSection/>
      </main>
    </>
  );
}