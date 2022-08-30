import React from "react";
import xCapePhotos from "../xCapeImages";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/xCapeDetails.module.scss";

const XCapeDetails = () => {
  return (
    <div>
      <motion.div className={styles.carousel}>
        <motion.div className={styles.innerCarousel}>
          {xCapePhotos.map((xCapePhoto) => {
            return (
              <motion.div className={styles.carousel__item}>
                <Image src={xCapePhoto} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <p>Bike details page</p>
      <p>models</p>
      <p>specs</p>
      <p>image slider / image gallery</p>
      <p>Press photos</p>
      <p>videos</p>
      <p>Enquire now button / contact form</p>
    </div>
  );
};

export default XCapeDetails;
