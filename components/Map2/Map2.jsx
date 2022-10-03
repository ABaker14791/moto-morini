import React from "react";
import styles from "./Map.module.scss";

const Map2 = () => {
  return (
    <div className={styles.map__container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.411540171787!2d-1.7769216841430622!3d53.83554388008445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be525c33b9a83%3A0xc2827a8a0a0169ab!2sAKA%20Automotive!5e0!3m2!1sen!2suk!4v1664816812573!5m2!1sen!2suk"
        width="600"
        height="450"
        //   style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map2;
