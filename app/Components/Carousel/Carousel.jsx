// pages/-app.js
'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Carousel.modules.css'
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const slides = [
    {id: 1,
     image: '/service/storefront.png',
     title: ''
    },
    {id: 2,
        image: '/service/whitevan.png',
        title: ''
       },
       {id: 3,
        image: '/service/shirts.png',
        title: ''
       },
       {id: 4,
        image: '/service/stickers.png',
        title: ''
       },
]

const BarciaCarousel = () => {
    return (
        <div className={`${styles.heroContent} rounded  bg-zinc-50`}>
            <h2 className="text-4xl font-bold m-10 text-center mb-10 mt-20">Branding That Stands Out Everywhere</h2>
            <p className="text-xl text-gray-600 m-10 text-center mb-20">
              From vans to websites, we ensure your brand is consistently represented across all touchpoints. Stand out with our comprehensive branding solutions.
            </p>
            <Carousel autoPlay
            infiniteLoop
            showStatus
            transitionTime={1000} >
               {slides.map(slide => (
                <div>
                    <img  layout="responsive" src={slide.image} alt={slide.alt} />
                </div>
               ))}
            </Carousel>
        </div>
    );
};

export default BarciaCarousel;