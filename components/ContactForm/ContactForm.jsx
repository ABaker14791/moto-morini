import React, { useRef } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  return (
    <>
      <form
        method="post"
        onSubmit={handleOnSubmit}
        className={styles.contact__form}
      >
        <h3>Get in touch</h3>
        <p>Enter your Email below and we shall get back to you.</p>
        <div className={styles.contact__formGroup}>
          <label>Name</label>
          <input type="text" name="name" />
        </div>

        <div className={styles.contact__formGroup}>
          <label>Email</label>
          <input type="email" name="email" />
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
