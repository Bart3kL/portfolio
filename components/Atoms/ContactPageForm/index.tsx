import React from "react";
import { clsx } from "clsx";

import styles from "./rwd.module.scss";

const ContactPageForm = () => {
  return (
    <form
      action="https://formspree.io/f/meqwejag"
      method="POST"
      className={styles.wrapper}
    >
      <div className={styles.wrapperBox}>
        <label htmlFor="name">_name</label>
        <input
          type="text"
          id="name"
          name="name"
          required={true}
          className={styles.wrapperBoxInput}
        />
      </div>
      <div className={styles.wrapperBox}>
        <label htmlFor="email">_email</label>
        <input
          type="email"
          id="email"
          name="email"
          required={true}
          className={styles.wrapperBoxInput}
        />
      </div>
      <div className={styles.wrapperBox}>
        <label htmlFor="textarea">_message</label>
        <textarea
          id="textarea"
          name="message"
          required={true}
          className={clsx(styles.wrapperBoxTextarea, styles.wrapperBoxInput)}
        />
      </div>
      <button className={styles.wrapperButton}>_submit-message</button>
    </form>
  );
};

export default ContactPageForm;
