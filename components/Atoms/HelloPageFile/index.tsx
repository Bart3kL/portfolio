import React from "react";
import { Tab } from "@headlessui/react";
import { AiFillFile } from "react-icons/ai";

import styles from "./rwd.module.scss";

const HelloPageFile = ({ setSubmenuName, name }: any) => {
  return (
    <Tab.List className={styles.wrapper} onClick={() => setSubmenuName(name)}>
      <Tab className={styles.wrapperTab}>
        <AiFillFile />
        <span>{name}</span>
      </Tab>
    </Tab.List>
  );
};

export default HelloPageFile;
