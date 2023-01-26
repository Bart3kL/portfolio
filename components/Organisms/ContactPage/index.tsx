import React from "react";

import ContactPageLeftPanel from "@/components/Atoms/ContactPageLeftPanel";
import ContactPageWrapper from "@/components/Molecules/ContactPageWrapper";

import styles from "./rwd.module.scss";

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <ContactPageLeftPanel />
      <ContactPageWrapper />
    </div>
  );
};

export default ContactPage;
