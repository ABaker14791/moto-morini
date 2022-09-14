import React from "react";
// Styles
import styles from "../styles/VisitUs.module.scss";
// Components
import Map from "../components/Map/ContactMap";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Map />
      <ContactForm />
    </div>
  );
};

export default Contact;
