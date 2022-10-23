import React from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import Head from "next/head";

// Iamges
// import showroomImg from "../public/assets/img_6992.jpeg";
import showroomImg from "../public/assets/IMG_2701.jpeg";
import charlieImg from "../public/assets/crhtrack.jpeg";
import craigImg from "../public/assets/ridingphoto1.png";

const Contact = () => {
  return (
    <>
      <Head>
        <title>About - Moto Morini - AKA Automotive</title>
        <meta name="description" content="Moto Morini West Yorkshire" />
      </Head>

      <div className={styles.container}>
        <h1>About Us</h1>
        <div className={styles.about__intro}>
          <div className={styles.introText}>
            <div className={styles.introTitle}>
              <h2>
                AKA Automotive – Enthusiast Driven - Moto Morini Main Dealer
              </h2>
            </div>
            <p>
              Situated in the heart of Shipley and only a stones throw away from
              the train station, feel free to contact us and arrange a visit.
              Our well stocked showroom is ready for you to come browse your
              next potential bike. Offering a range of new and used motorcycles
              such as Honda, Ducati, BMW, Triumph, MV Augusta, Lexmoto, Yamaha,
              Kawasaki & KTM. We also offer a range of accessories from notable
              brands such as Alpinestar, Muc-Off, HJC, Oxford Products, and MT
              Helmets.
            </p>
          </div>
          <div className={styles.introImg}>
            <Image src={showroomImg} alt="showroom" width={640} height={480} />
          </div>
        </div>
        <div className={styles.about__team}>
          <h2>Meet The Team</h2>
          <div className={styles.teamContainer}>
            <div className={styles.riderImg}>
              <Image src={craigImg} alt="" />
            </div>
            <div className={styles.riderDesc}>
              <h3>Craig Atkinson</h3>
              <ul>
                Craig ‘AKA’ Atkinson heading up the buying team. Craig brings a
                wealth of knowledge and a history of racing to the team
                including some fantastic accolades, take a look below!
                <li>
                  Manx GP Double Race Winner 2006 (Genuine in the week double)
                </li>
                <li>
                  Record of the Closest ever finish around the TT Course 0.01
                </li>
                <li>119.997 MPH Lap, Honda CBR600 RR in 2006</li>
                <li>IOM 100 Years Centenary</li>
                <li>Competitor NW200</li>
                <li>Competitor Ulster GP Competitor 2nd Fastest Newcomer</li>
                <li>Macau GP Competitor</li>
                <li>
                  American 3hr Endurance Podium Finisher with Milky Quayle
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.teamContainer}>
            <div className={styles.riderDesc}>
              <h3>Charlie Hopkins</h3>
              <p>
                Charlie heads up the sales operation, after having spent over 10
                years in sales management for a multitude of franchised car
                dealerships across Yorkshire. Charlie is here to ensure you
                obtain the deal that right for you and is also a motorcycle
                enthusiast.
              </p>
            </div>
            <div className={styles.riderImg}>
              <Image src={charlieImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
