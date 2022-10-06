import React from "react";
// Styles
import styles from "../styles/VisitUs.module.scss";
// Components
import ContactForm from "../components/ContactForm/ContactForm";
import Map2 from "../components/Map2/Map2";
import ParkingMap from "../components/ParkingMap/ParkingMap";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact__row}>
        <Map2 />
        <ContactForm />
      </div>
      <div className={styles.contact__parkingMap}>
        <h3 className={styles.contact__parkingHeading}>Parking to the rear</h3>
        <p className={styles.contact__parkingText}>
          Parking can be found to the rear of the showroom from Otley Road.
        </p>
        <ParkingMap />
      </div>
    </div>
  );
};

export default Contact;
