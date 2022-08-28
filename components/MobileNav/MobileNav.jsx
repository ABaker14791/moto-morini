import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from "./MobileNav.module.scss";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? styles.containerOpen : styles.container}>
      <div onClick={toggle} className={styles.icon}>
        <FaTimes />
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a className={styles.link} onClick={toggle}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Heritage">
              <a className={styles.link} onClick={toggle}>
                Heritage
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Media">
              <a className={styles.link} onClick={toggle}>
                Media
              </a>
            </Link>
          </li>
          <li>
            <Link href="/VisitUs">
              <a className={styles.link} onClick={toggle}>
                Visit Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
