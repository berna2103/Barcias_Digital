import Image from 'next/image';
import styles from './HeroSection.module.css';
import Background from '../Background/Background';
import BookAppointmentButton from '../BookAppointmentButton/BookAppointmentButton';
const HeroSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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


  return (
    <section className={`${styles.hero}`}>
      <Background />

      <div className={styles.heroContent}>
        <h1 className={`${styles.heroHeadline}`}>
          <span className='text-red-500'>Elevate</span> Your <span className='text-red-500'>Business</span> with Our Digital Marketing and Branding Solutions
        </h1>
        <p className={styles.heroSubheadline}>
          We help businesses grow and succeed in the digital world.
        </p>
       
      <BookAppointmentButton />
      </div>
    
      <div className={styles.heroImage}>
        <Image
          src="/hero.png"
          alt="Digital marketing solutions"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default HeroSection;
