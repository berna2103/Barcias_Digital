'use client'
import Image from 'next/image';
import styles from './HeroSection.module.css';
import Background from '../Background/Background';
import BookAppointmentButton from '../BookAppointmentButton/BookAppointmentButton';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const promotions = [
    {
      id: 1,
      headline: 'Get 10% off on all digital marketing services',
      subheadline: 'Use promo code: DIGIMARKET10',
    },
    {
      id: 2,
      headline: 'Free branding consultation for new clients',
      subheadline: 'Book an appointment today',
    },
    {
      id: 3,
      headline: 'Get a free website audit for your business',
      subheadline: 'Limited time offer',
    },
  ];

  const slides = [
    {
      id: 1,
      imgURL: '/hero/hero1.jpg',
      alt: `Carousel image 1`,
    },
    {
      id: 2,
      imgURL: '/hero/hero2.jpg',
      alt: `Carousel image 2`,
    },
    {
      id: 3,
      imgURL: '/hero/hero3.jpg',
      alt: `Carousel image 3`,
    },
    {
      id: 4,
      imgURL: '/hero/hero4.jpg',
      alt: `Carousel image 4`,
    },
    {
      id: 5,
      imgURL: '/hero/hero5.jpg',
      alt: `Carousel image 5`,
    },
    {
      id: 6,
      imgURL: '/hero/hero6.jpg',
      alt: `Carousel image 6`,
    },
    {
      id: 7,
      imgURL: '/hero/hero7.jpg',
      alt: `Carousel image 7`,
    },
    
  ];


  return (
    <div className='grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20'>
    <div className={`${styles.hero}`}>
      <Background />
      <div className="absolute -z-50  inset-0 bg-red-500 transform -skew-y-12 w-full h-full"></div>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroHeadline}`}>
          <span className='text-zinc-50'>Elevate</span> Your <span className='text-zinc-50'>Business</span> with Our Digital Marketing and Branding Solutions
        </h1>
        <p className={styles.heroSubheadline}>
          We help businesses grow and succeed in the digital world.
        </p>
       
      <BookAppointmentButton />
      </div>
      <div className={styles.heroImage}>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}>
          {slides.map(slide => 
            <Image 
              id={slide.id}  
              src= {slide.imgURL}
              alt={slide.alt}
              layout="responsive"
              width={500}
              height={300} />
          )}
        </Carousel>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
