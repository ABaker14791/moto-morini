import React from "react";
// Styles
import styles from "../styles/VisitUs.module.scss";
// Components
import ContactForm from "../components/ContactForm/ContactForm";

const contact = () => {
  return (
    <div className={styles.container}>
      MAP
      <ContactForm />
    </div>
  );
};

export default contact;
