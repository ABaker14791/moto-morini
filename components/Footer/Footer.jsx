import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import akaLogo from "../../public/akaLogoW.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__columns}>
        <div className={styles.footer__col}>
          <h3>MOTORCYCLES</h3>
          <Link href="/">
            <a className={styles.footer__link}>X-CAPE</a>
          </Link>
          <Link href="/">
            <a className={styles.footer__link}>Seiemmezzo</a>
          </Link>
        </div>
        <div className={`${styles.footer__col} ${styles.footer__brand}`}>
          <h3>Moto Morini</h3>
          <Image
            src={akaLogo}
            alt="aka automotive logo"
            width="204"
            height="34px"
          />
        </div>
        <div className={styles.footer__col}>
          <h3>CONTACT</h3>
          <li>right</li>
          <li>right</li>
          <li>right</li>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        Copyright AKA Automotive © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
