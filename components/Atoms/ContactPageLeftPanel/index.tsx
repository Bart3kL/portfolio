import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import ContactPageFaq from "../ContactPageFaq";

import styles from "./rwd.module.scss";

const ContactPageLeftPanel = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapperTitle}>
        <IoMdArrowDropdown />
        <p>contacts</p>
      </h3>
      <div className={styles.wrapperDetails}>
        <p className={styles.wrapperDetailsIcon}>
          <MdEmail />
        </p>
        <a href="http://">blewandowski.2221@gmail.com</a>
      </div>

      <div className={styles.wrapperFaq}>
        <ContactPageFaq />
      </div>
    </div>
  );
};

export default ContactPageLeftPanel;
