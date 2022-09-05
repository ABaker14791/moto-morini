import React from "react";
import styles from "../styles/About.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <div className={styles.about__intro}>
        <h2>AKA Automotive – Enthusiast Driven</h2>
        <p>
          Situated in the heart of Shipley and only a stones throw away from the
          train station, feel free to contact us and arrange a visit. Our well
          stocked showroom is ready for you to come browse your next potential
          bike. Offering a range of new and used motorcycles such as Honda,
          Ducati, BMW, Triumph, MV Augusta, Lexmoto, Yamaha, Kawasaki & KTM. We
          also offer a range of accessories from notable brands such as
          Alpinestar, Muc-Off, HJC, Oxford Products, and MT Helmets.
        </p>
      </div>
      <div className={styles.about__team}>
        <h2>Meet The Team</h2>
        <div className={styles.teamContainer}>
          <div>img</div>
          <h3>Craig Atkinson</h3>
          <p>
            Craig ‘AKA’ Atkinson heading up the buying team. Craig brings a
            wealth of knowledge and a history of racing to the team including
            some fantastic accolades, take a look below! Manx GP Double Race
            Winner 2006 (Genuine in the week double) Record of the Closest ever
            finish around the TT Course 0.01 119.997 MPH Lap, Honda CBR600 RR in
            2006 IOM 100 Years Centenary Competitor NW200 Competitor Ulster GP
            Competitor 2nd Fastest Newcomer Macau GP Competitor American 3hr
            Endurance Podium Finisher with Milky Quayle
          </p>
        </div>
        <div className={styles.teamContainer}>
          <div>img</div>
          <h3>Charlie Hopkins</h3>
          <p>
            Charlie heads up the sales operation, after having spent over 10
            years in sales management for a multitude of franchised car
            dealerships across Yorkshire. Charlie is here to ensure you obtain
            the deal that right for you and is also a motorcycle enthusiast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
