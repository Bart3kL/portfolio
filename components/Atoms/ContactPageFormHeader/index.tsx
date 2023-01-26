import React from "react";

import styles from "./rwd.module.scss";

const ContactPageFormHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h1>_GET-IN-TOUCH</h1>
      <div className={styles.wrapperDescription}>
        <p>{"<p>"}</p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you! <p>{"<p>"}</p>
      </div>
    </div>
  );
};

export default ContactPageFormHeader;
