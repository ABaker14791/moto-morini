import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import akaLogo from "../../public/akaLogoW.svg";
import moriniLogo from "../../public/assets/MM_Logo.png";
import {
  FaFacebookSquare,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__columns}>
        <div className={styles.footer__col}>
          <h3>MOTORCYCLES</h3>
          <Link href="/xcape-details">
            <a className={styles.footer__link}>X-CAPE</a>
          </Link>
          <Link href="/">
            <a className={styles.footer__link}>Seiemmezzo STR</a>
          </Link>
          <Link href="/">
            <a className={styles.footer__link}>Seiemmezzo SCR</a>
          </Link>
        </div>
        <div className={`${styles.footer__col} ${styles.footer__brand}`}>
          <div className={styles.moriniLogo}>
            <Image
              src={moriniLogo}
              width="140px"
              height="80px"
              alt="moto morini west yorkshire"
            />
          </div>
          <div className={styles.akaLogo}>
            <Image
              src={akaLogo}
              alt="aka automotive logo"
              width="204"
              height="34px"
            />
          </div>
        </div>
        <div className={`${styles.footer__col} ${styles.footer__contact}`}>
          <h3>Contact Us</h3>
          <li>
            <FaPhone />
            &nbsp;01274 583903
          </li>
          <li>
            <FaEnvelope />
            &nbsp;sales@akaautomotive.co.uk
          </li>
          <li>
            <FaFacebookSquare />
            &nbsp;Facebook
          </li>
          <li>
            <FaMapMarkerAlt />
            &nbsp;AKA Automotive, Otley Rd, Shipley, BD17 7DU
          </li>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        Copyright AKA Automotive © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
