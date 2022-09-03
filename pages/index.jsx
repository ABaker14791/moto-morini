import { useRef } from "react";
// Styles
import styles from "../styles/Home.module.scss";
// components
import XCapeSlider from "../components/XCapeSlider/XCapeSlider";

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
// Bike images
import xCapeRed from "../public/assets/x-cape-index/X-Cape_red.jpeg";
import xCapeGold from "../public/assets/x-cape-index/X-Cape_gold.jpeg";
import seiScrBlack from "../public/assets/scr-index/Seimmezzo-scr-black.jpeg";
import seiStrWhite from "../public/assets/str-index/Seimmezzo-str-white.jpeg";

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
            <Image src={xCapeGold} alt="motomorini x-cape gold edition" />
          </div>
        </div>
        <p>
          The All New Moto Morini X-Cape 650 really is stunning and packed with
          high end tech and features that only enhance the overall riding
          experience!
        </p>
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
          <Image src={seiStrWhite} alt="seiemmezzo street white" />
          <Image src={seiScrBlack} alt="seiemmezzo scrambler bike" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, possimus?
          Dolor corrupti alias, blanditiis in libero illo. In odit, dolor minus
          excepturi pariatur quia veniam adipisci! Officiis, consectetur ipsum.
          Praesentium.
        </p>
        <Link href="/">
          <a className={styles.bike__button}>Discover more</a>
        </Link>
      </motion.div>
    </div>
  );
};

export default index;
