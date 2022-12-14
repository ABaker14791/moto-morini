import React from "react";
import Image from "next/image";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
//  Images
import xCapeRed from "../../public/assets/x-cape-index/X-Cape_red.jpeg";
import xCapeWhite from "../../public/assets/x-cape-index/X-Cape_white.jpeg";
import xCapeGray from "../../public/assets/x-cape-index/X-Cape_gray.jpeg";
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
          <Image src={xCapeRed} alt="moto morini x-cape" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={xCapeWhite} alt="moto morini x-cape" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={xCapeGray} alt="moto morini x-cape" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default XCapeSlider;
