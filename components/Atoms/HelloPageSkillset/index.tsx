import React from "react";

import { skillSet } from "./untils";

import styles from "./rwd.module.scss";

const HelloPageSkillsetBar = () => {
  return (
    <ul className={styles.wrapper}>
      {skillSet.map(({ icon, name }, i) => (
        <li className={styles.wrapperBox} key={i}>
          <p className={styles.wrapperBoxIcon}>{icon}</p>
          <p className={styles.wrapperBoxName}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default HelloPageSkillsetBar;
