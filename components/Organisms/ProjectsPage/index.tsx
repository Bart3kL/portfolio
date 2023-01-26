import React from "react";
import ProjectsPageFilterNav from "@/components/Molecules/ProjectsPageFilterNav";
import { IoMdArrowDropdown } from "react-icons/io";

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
