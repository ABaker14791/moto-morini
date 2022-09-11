import { useRef } from "react";
// Styles
import styles from "../styles/Home.module.scss";
// components
import XCapeSlider from "../components/XCapeSlider/XCapeSlider";
import XCapeGoldSlider from "../components/XCapeGoldSlider/XCapeGoldSlider";
import StrSlider from "../components/StrSlider/StrSlider";
import ScrSlider from "../components/ScrSlider/ScrSlider";

import Image from "next/image";
import Link from "next/link";
// Animation
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
// Logos
import xCapeLogo from "../public/assets/x_cape_logo.png";
import seiemmezzoLogo from "../public/assets/Seiemmezzo-logo.png";

const index = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.bike__wrapper}
        initial={{ y: "400px", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
      >
        <div className={styles.bike__logo}>
          <Image
            src={xCapeLogo}
            width="500px"
            height="119px"
            alt="x-cape logo"
          />
        </div>
        <div className={styles.bike__images}>
          <div className={styles.bike__img}>
            <XCapeSlider />
          </div>
          <div className={styles.bike__img}>
            <XCapeGoldSlider />
          </div>
        </div>
        <Link href="/xcape-details">
          <a className={styles.bike__button}>Discover more</a>
        </Link>
      </motion.div>

      <motion.div className={styles.bike__wrapper}>
        <div className={styles.bike__logo}>
          <Image
            src={seiemmezzoLogo}
            width="500px"
            height="172px"
            alt="seiemmezzo logo"
          />
        </div>
        <div className={styles.bike__images}>
          <div className={styles.bike__img}>
            SEIEMMEZZO STR
            <StrSlider />
          </div>
          <div className={styles.bike__img}>
            SEIEMMEZZO SCR
            <ScrSlider />
          </div>
        </div>
        <Link href="/seiemmezzo-details">
          <a className={styles.bike__button}>Discover more</a>
        </Link>
      </motion.div>
    </div>
  );
};

export default index;
