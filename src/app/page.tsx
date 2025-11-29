import Header from "@/components/modules/header/Header";
import FeaturedProducts from "@/components/template/featuredProducts/FeaturedProducts";
import HeroSection from "@/components/template/heroSection/HeroSection";
import IntroSection from "@/components/template/IntroSection/IntroSection";


export default function Home() {
  return (
    <>
      <Header variant="glass" />
      <main>
        <HeroSection />
        <IntroSection/>
        <FeaturedProducts/>
      </main>
    </>
  );
}
