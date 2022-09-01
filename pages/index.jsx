import { useRef } from "react";
// Styles
import styles from "../styles/Home.module.scss";
// Next imports
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
import seiemmezzoImage from "../public/assets/moto-morini_05_seiemmezzo-bianca-lato-sx-34.jpeg";
import xCapeImage from "../public/assets/X-Cape_index.jpeg";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bike__wrapper}>
        <motion.div
          className={styles.bike__text}
          initial={{ x: "-400px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
        >
          <div className={styles.bike__logo}>
            <Image
              src={xCapeLogo}
              width="500px"
              height="119px"
              alt="x-cape logo"
            />
          </div>
          <p>
            The All New Moto Morini X-Cape 650 really is stunning and packed
            with high end tech and features that only enhance the overall riding
            experience!
          </p>
        </motion.div>
        <motion.div
          className={styles.bike__image}
          initial={{ y: "400px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
        >
          <Image src={xCapeImage} alt="moto morini x-cape" />
        </motion.div>
        <Link href="/xcape-details">
          <a className={styles.bike__button}>Discover more</a>
        </Link>
      </div>

      <div className={styles.bike__wrapper}>
        <motion.div className={styles.bike__text}>
          <div className={styles.bike__logo}>
            <Image
              src={seiemmezzoLogo}
              width="500px"
              height="172px"
              alt="seiemmezzo logo"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            possimus? Dolor corrupti alias, blanditiis in libero illo. In odit,
            dolor minus excepturi pariatur quia veniam adipisci! Officiis,
            consectetur ipsum. Praesentium.
          </p>
        </motion.div>

        <Image src={seiemmezzoImage} alt="seiemmezzo bike" />
        <Link href="/">
          <a className={styles.bike__button}>Discover more</a>
        </Link>
      </div>
    </div>
  );
};

export default index;
