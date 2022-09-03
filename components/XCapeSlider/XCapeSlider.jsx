import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
import xCapeRed from "../../public/assets/x-cape-index/X-Cape_red.jpeg";
import xCapeWhite from "../../public/assets/x-cape-index/X-Cape_white.jpeg";
import styles from "./XCapeSlider.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Next imports

const XCapeSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySlide}>
          <Image src={xCapeRed} alt="moto morini x-cape" />
        </SwiperSlide>
        <SwiperSlide className={styles.mySlide}>
          <Image src={xCapeWhite} alt="moto morini x-cape" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default XCapeSlider;
