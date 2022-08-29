import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__col}>
        <h3>MOTORCYCLES</h3>
        <Link href="/">
          <a className={styles.footer__link}>X-CAPE</a>
        </Link>
        <Link href="/">
          <a className={styles.footer__link}>Seiemmezzo</a>
        </Link>
      </div>
      <div className={styles.footer__col}>
        <h3>QUICK LINKS</h3>
        <li>middle</li>
        <li>middle</li>
        <li>middle</li>
      </div>
      <div className={styles.footer__col}>
        <h3>CONTACT</h3>
        <li>right</li>
        <li>right</li>
        <li>right</li>
      </div>
    </div>
  );
};

export default Footer;
