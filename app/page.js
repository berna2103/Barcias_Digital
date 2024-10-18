import Image from "next/image";
import HeroSection from "./Components/Hero/HeroSection";
import ServicesSection from "./Components/Services/ServicesSection.jsx"
import BarciaCarousel from "./Components/Carousel/Carousel";
import PricingModern from "./Components/Pricing/PricingModern";
import PricingSection from "./Components/Pricing/PricingSection";


export default function Home() {
  return (
    <div>
    {/* <div className="grid items-center justify-items-center min-h-screen min-w-screen p-8 pb-20 gap-16 sm:p-20">
       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
       <HeroSection />
       <ServicesSection />
       <PricingSection />
       <BarciaCarousel />
       
      {/* </main> */}

    </div>
  );
}
