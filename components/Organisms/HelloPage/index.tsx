import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import HelloPagePanelList from "@/components/Molecules/HelloPagePanelList";
import HelloPageSkillsetBar from "@/components/Atoms/HelloPageSkillset";

import styles from "./rwd.module.scss";

const HelloPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNav}>
        <div className={styles.wrapperNavBox}>
          <h3 className={styles.wrapperNavBoxTitle}>
            <IoMdArrowDropdown />
            <p>personal-info</p>
          </h3>
          <HelloPagePanelList />
        </div>
        <div className={styles.wrapperNavBox}>
          <h3 className={styles.wrapperNavBoxTitle}>
            <IoMdArrowDropdown />
            <p>skillset</p>
          </h3>
          <HelloPageSkillsetBar />
        </div>
      </div>
    </div>
  );
};

export default HelloPage;
