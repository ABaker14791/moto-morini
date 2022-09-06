import React from "react";
import Image from "next/image";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
//  Images
import xCapeGold from "../../public/assets/X-cape-gold-index/X-Cape_gold.jpeg";
import xCapeGold2 from "../../public/assets/x-cape-gold-index/X-Cape_gold2.jpeg";
//  Styles
import styles from "../../styles/BikeSlider.module.scss";
import "swiper/css";
import "swiper/css/pagination";

const XCapeSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, EffectFade]}
        speed={1200}
        slidesPerView={1}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySlide}>
          <Image src={xCapeGold} alt="moto morini x-cape" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={xCapeGold2} alt="moto morini x-cape" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default XCapeSlider;
