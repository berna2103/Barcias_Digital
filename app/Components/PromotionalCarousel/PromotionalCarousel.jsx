'use client'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from '../Hero/HeroSection.module.css'


const PromotionsCarousel = ({ promotions }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <Slider {...settings}>
      {promotions.map((promotion) => (
        <div key={promotion.id} className={styles.promotion}>
          <Image
            src={promotion.image}
            alt={promotion.headline}
            layout="responsive"
            width={500}
            height={300}
          />
          <h2 className={styles.promotionHeadline}>{promotion.headline}</h2>
          <p className={styles.promotionSubheadline}>{promotion.subheadline}</p>
        </div>
      ))}
    </Slider>
  );
};

export default PromotionsCarousel