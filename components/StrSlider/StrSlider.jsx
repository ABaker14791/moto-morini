import React from "react";
import Image from "next/image";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
//  Images
import StrGray from "../../public/assets/str-index/Seimmezzo-str-gray.jpeg";
import StrWhite from "../../public/assets/str-index/Seimmezzo-str-white.jpeg";
import StrRed from "../../public/assets/str-index/Seimmezzo-str-red.jpeg";
//  Styles
import styles from "../../styles/BikeSlider.module.scss";
import "swiper/css";
import "swiper/css/pagination";

const StrSlider = () => {
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
          <Image src={StrGray} alt="moto morini Str" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={StrWhite} alt="moto morini Str" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={StrRed} alt="moto morini Str" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default StrSlider;
