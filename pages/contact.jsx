import React from "react";
// Styles
import styles from "../styles/VisitUs.module.scss";
// Components
import Map from "../components/Map/ContactMap";
import ContactForm from "../components/ContactForm/ContactForm";
import Map2 from "../components/Map2/Map2";

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* <Map /> */}
      <Map2 />
      <ContactForm />
    </div>
  );
};

export default Contact;
