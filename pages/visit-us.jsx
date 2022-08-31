import React from "react";
// Styles
import styles from "../styles/VisitUs.module.scss";
// Components
import ContactForm from "../components/ContactForm/ContactForm";

const VisitUs = () => {
  return (
    <div className={styles.container}>
      MAP
      <ContactForm />
    </div>
  );
};

export default VisitUs;
