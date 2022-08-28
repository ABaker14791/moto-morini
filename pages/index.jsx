// Styles
import styles from "../styles/Home.module.scss";
// Nex imports
import Image from "next/image";
import Link from "next/link";
// Logos
import xCapeLogo from "../public/assets/x_cape_logo.png";
import seiemmezzoLogo from "../public/assets/Seiemmezzo-logo.png";
// Bike images
import seiemmezzoImage from "../public/assets/moto-morini_05_seiemmezzo-bianca-lato-sx-34.jpeg";
import xCapeImage from "../public/assets/x-Cape__0013.jpeg";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bike__wrapper}>
        <div className={styles.bike__logo}>
          <Image src={xCapeLogo} width="500px" height="119px" />
        </div>
        <p>
          The All New Moto Morini X-Cape 650 really is stunning and packed with
          high end tech and features that only enhance the overall riding
          experience!
        </p>
        <Image src={xCapeImage} />
        <Link href="/XCapeDetails">
          <a className={styles.bike__button}>Discover more</a>
        </Link>
      </div>

      <div className={styles.bike__wrapper}>
        <div className={styles.bike__logo}>
          <Image src={seiemmezzoLogo} width="500px" height="172px" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, possimus?
          Dolor corrupti alias, blanditiis in libero illo. In odit, dolor minus
          excepturi pariatur quia veniam adipisci! Officiis, consectetur ipsum.
          Praesentium.
        </p>
        <Image src={seiemmezzoImage} />
        <Link href="/">
          <a className={styles.bike__button}>Discover more</a>
        </Link>
      </div>
    </div>
  );
};

export default index;
