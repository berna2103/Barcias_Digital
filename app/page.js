import HeroSection from "./Components/Hero/HeroSection";
import ServicesSection from "./Components/Services/ServicesSection.jsx"
import BarciaCarousel from "./Components/Carousel/Carousel";
import PricingSection from "./Components/Pricing/PricingSection";


export default function Home() {
  return (
    <div>
       <HeroSection />
       <ServicesSection />
       <PricingSection />
       <BarciaCarousel />
    </div>
  );
}
