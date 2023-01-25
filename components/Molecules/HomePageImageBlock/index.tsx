import React from "react";

import styles from "./rwd.module.scss";

const HomePageImageBlock = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperGradinet}></div>
      <div className={styles.wrapperImage}></div>
    </section>
  );
};

export default HomePageImageBlock;
