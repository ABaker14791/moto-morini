import React from "react";
import Image from "next/image";
import styles from "../styles/SeiemmezzoDetails.module.scss";
//  Components
import StrSlider from "../components/StrSlider/StrSlider";
import ScrSlider from "../components/ScrSlider/ScrSlider";
import EnquireButton from "../components/EnquireButton/EnquireButton";
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
        <div className={styles.heading}>SEIEMMEZZO SCR / STR</div>
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
          <Image src={featureImg1} alt="" layout="responsive" />
        </div>
        <div className={styles.gallery__item}>
          <Image src={featureImg2} alt="" layout="responsive" />
        </div>
        <div className={styles.gallery__item}>
          <Image src={featureImg3} alt="" layout="responsive" />
        </div>
        <div className={styles.gallery__item}>
          <Image src={featureImg4} alt="" layout="responsive" />
        </div>
      </div>

      <EnquireButton />

      <div className={styles.media}>
        <Image src={galleryImg1} alt="" layout="responsive" />
      </div>
    </div>
  );
};

export default seiemmezzoDetails;
