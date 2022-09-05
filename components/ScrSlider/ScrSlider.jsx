import React from "react";
import Image from "next/image";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
//  Images
import ScrBlack from "../../public/assets/scr-index/Seimmezzo-scr-black.jpeg";
import ScrBlue from "../../public/assets/scr-index/Seimmezzo-scr-blue.jpeg";
import ScrGreen from "../../public/assets/scr-index/Seimmezzo-scr-green.jpeg";
//  Styles
import styles from "../../styles/BikeSlider.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ScrSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, EffectFade]}
        navigation={true}
        speed={1200}
        slidesPerView={1}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySlide}>
          <Image src={ScrBlack} alt="moto morini Scr" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={ScrBlue} alt="moto morini Scr" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={ScrGreen} alt="moto morini Scr" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ScrSlider;
