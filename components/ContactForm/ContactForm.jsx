import React, { useRef } from "react";
import styles from "./ContactForm.module.scss";
// import emailjs from '@emailjs/browser'; TODO: Install and setup emailJS

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
        <h3>Get in touch</h3>
        <p>Enter yout Email below and we shall get back to you.</p>
        <div className={styles.contact__formGroup}>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>

        <div className={styles.contact__formGroup}>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>

        <div className={styles.contact__formGroup}>
          <label>Message</label>
          <textarea name="message" />
        </div>

        <input className={styles.contact__button} type="submit" value="Send" />
      </form>
    </>
  );
};

export default ContactForm;
