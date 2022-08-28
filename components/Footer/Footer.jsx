import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__left}>
        <li>Left</li>
        <li>Left</li>
        <li>Left</li>
        <li>Left</li>
      </div>
      <div className={styles.footer__mid}>
        <li>middle</li>
        <li>middle</li>
        <li>middle</li>
        <li>middle</li>
      </div>
      <div className={styles.footer__right}>
        <li>right</li>
        <li>right</li>
        <li>right</li>
        <li>right</li>
      </div>
    </div>
  );
};

export default Footer;
