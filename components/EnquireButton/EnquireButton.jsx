import React from "react";
import styles from "../EnquireButton/EnquireButton.module.scss";
import Link from "next/link";

const EnquireButton = () => {
  return (
    <div className={styles.button__container}>
      <Link href="/contact">
        <a className={styles.enquireBtn}>Enquire Now</a>
      </Link>
    </div>
  );
};

export default EnquireButton;
