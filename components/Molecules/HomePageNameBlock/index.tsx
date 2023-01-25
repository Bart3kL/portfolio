import React from "react";

import HomePageDescription from "@/components/Atoms/HomePageDescription";

import styles from "./rwd.module.scss";

const HomePageGameBlock = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <p className={styles.wrapperContentWelcome}>Hi all. I am</p>
        <h1 className={styles.wrapperContentName}>
          Bartosz
          <br /> Lewandowski
        </h1>
        <h2 className={styles.wrapperContentProfession}>
          <p>{`>`}</p> Front-end developer
        </h2>
      </div>
      <div className={styles.wrapperBackground}></div>
      <HomePageDescription />
    </section>
  );
};

export default HomePageGameBlock;
