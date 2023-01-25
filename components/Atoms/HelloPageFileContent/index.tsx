import React from "react";
import { Tab } from "@headlessui/react";
import styles from "./rwd.module.scss";

const HelloPageFileContent = ({ content, menu, fileName }: any) => {
  return (
    <Tab.Panels className={styles.wrapper}>
      <Tab.Panel>
        <div className={styles.wrapperFileName}>
          // {menu}{" "}
          <p className={styles.wrapperFileNameSubmenu}>/ {fileName}</p>
        </div>
        {content.map(({ text }: any, i: any) => (
          <div className={styles.wrapperContent} key={i}>
            <span>{i}</span>
            <p>{text}</p>
          </div>
        ))}
      </Tab.Panel>
    </Tab.Panels>
  );
};

export default HelloPageFileContent;
