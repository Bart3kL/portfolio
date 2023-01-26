import React from "react";
import ContactPageFormHeader from "../../Atoms/ContactPageFormHeader";
import ContactPageForm from "../../Atoms/ContactPageForm";
import styles from "./rwd.module.scss";

const ContactPageWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperForm}>
        <ContactPageFormHeader />
        <ContactPageForm />
      </div>
    </div>
  );
};

export default ContactPageWrapper;
