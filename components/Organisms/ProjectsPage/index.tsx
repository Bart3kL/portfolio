import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import ProjectsPageFilterNav from "@/components/Molecules/ProjectsPageFilterNav";

import styles from "./rwd.module.scss";

const HelloPage = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapperTitle}>
        <IoMdArrowDropdown />
        <p>projects</p>
      </h3>
      <ProjectsPageFilterNav />
    </div>
  );
};

export default HelloPage;
