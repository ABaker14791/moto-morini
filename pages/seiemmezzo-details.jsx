import React from "react";
import Image from "next/image";
import styles from "../styles/SeiemmezzoDetails.module.scss";
//  Components
import StrSlider from "../components/StrSlider/StrSlider";
import ScrSlider from "../components/ScrSlider/ScrSlider";
// Images
import heroImg from "../public/assets/seiemmezzo-details/hero.jpeg";
import featureImg1 from "../public/assets/seiemmezzo-details/led-headlight.jpeg";
import featureImg2 from "../public/assets/seiemmezzo-details/dash.jpeg";
import featureImg3 from "../public/assets/seiemmezzo-details/seatbrown.jpeg";
import featureImg4 from "../public/assets/seiemmezzo-details/tank.jpeg";
import galleryImg1 from "../public/assets/seiemmezzo-details/Seimmezzo-dark-1-6fcca7ea.jpeg";
import seiemmezzoLogo from "../public/assets/Seiemmezzo-logo.png";

const seiemmezzoDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image src={heroImg} alt="" />
      </div>
      <div className={styles.logo}>
        <Image
          src={seiemmezzoLogo}
          width="500px"
          height="172px"
          alt="seiemmezzo logo"
        />
      </div>
      <div className={styles.sliderContainer}>
        <StrSlider />
        <ScrSlider />
      </div>
      <div className={styles.gallery}>
        <div className={styles.gallery__item}>
          <Image src={featureImg1} alt="" />
        </div>
        <div className={styles.gallery__item}>
          <Image src={featureImg2} alt="" />
        </div>
        <div className={styles.gallery__item}>
          <Image src={featureImg3} alt="" />
        </div>
        <div className={styles.gallery__item}>
          <Image src={featureImg4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default seiemmezzoDetails;
