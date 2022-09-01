import React, { useEffect, useState, useRef } from "react";
import xCapePhotos from "../xCapeImages";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/xCapeDetails.module.scss";

const XCapeDetails = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.innerCarousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {xCapePhotos.map((xCapePhoto) => {
            return (
              <motion.div className={styles.carousel__item} key={xCapePhoto}>
                <Image src={xCapePhoto} alt="x-cape gallery" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <div>
        <li>7″ Colour TFT Dash</li>
        <li>Gold Spoked Wheels</li>
        <li>Music & Phone Connectivity</li>
        <li>Double USB Charger</li>
        <li>LED Lights</li>
        <li>Marzocchi Forks</li>
        <li>Brembo Brakes</li>
        <li>Bosch EFI</li>
        <li>Pirelli Tyres</li>
        <li>Switchable ABS</li>
      </div>

      <p>Bike details page</p>
      <p>editions / colors</p>
      <p>specs</p>
      <p>image slider / image gallery</p>
      <p>Press photos</p>
      <p>videos</p>
      <p>Enquire now button / contact form</p>
    </div>
  );
};

export default XCapeDetails;
