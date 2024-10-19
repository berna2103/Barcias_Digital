// pages/-app.js
"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


const slides = [
  { id: 1, image: "/service/storefront.png", title: "" },
  { id: 2, image: "/service/whitevan.png", title: "" },
  { id: 3, image: "/service/shirts.png", title: "" },
  { id: 4, image: "/service/stickers.png", title: "" },
];

const BarciaCarousel = () => {
  return (
<div >
    <div className={`grid grid-cols-2 sm:grid-cols-1 items-center mt-32 sm:pt-20 mx-10`}>
  <Carousel autoPlay infiniteLoop showStatus transitionTime={1000}>
    {slides.map((slide) => (
      <div key={slide.id}>
        <Image src={slide.image} alt={slide.alt} width={500} height={300} />
      </div>
    ))}
  </Carousel>
  <div className="pl-10">
    <h2 className="text-4xl font-bold text-left">
      Branding That Stands Out Everywhere
    </h2>
    <p className="text-xl text-gray-600 mt-10 text-left">
      From vans to websites, we ensure your brand is consistently represented
      across all touchpoints. Stand out with our comprehensive branding
      solutions.
    </p>
  </div>
  </div>
</div>

  );
};

export default BarciaCarousel;
