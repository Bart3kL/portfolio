import React from "react";

import HomePageNameBlock from "@/components/Molecules/HomePageNameBlock";
import HomePageImageBlock from "@/components/Molecules/HomePageImageBlock";

import styles from "./rwd.module.scss";

const HelloPage = () => {
  return (
    <div className={styles.wrapper}>
      <HomePageNameBlock />
      <HomePageImageBlock />
    </div>
  );
};

export default HelloPage;
