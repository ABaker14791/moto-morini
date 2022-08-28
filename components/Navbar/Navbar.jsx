import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/MM_Logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <div className={styles.nav}>
      <div className="nav__logo">
        <Link href="/">
          <a>
            <Image src={Logo} width="140px" height="80px" />
          </a>
        </Link>
      </div>
      <div onClick={toggle} className={styles.nav__button}>
        <FaBars />
      </div>

      <div className={styles.nav__menu}>
        <Link href="/">
          <a className={styles.nav__link}>Home</a>
        </Link>

        <Link href="/Heritage">
          <a className={styles.nav__link}>Heritage</a>
        </Link>

        <Link href="/Media">
          <a className={styles.nav__link}>Media</a>
        </Link>

        <Link href="/VisitUs">
          <a className={styles.nav__link}>Visit Us</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
