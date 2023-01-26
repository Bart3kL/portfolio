import React from "react";

import { ProjectsPageSingleTechProps } from "@/types/ProjectsPageSingleTech/types";

import styles from "./rwd.module.scss";

const ProjectsPageSingleTech = ({
  option,
  index,
  tech,
  setTech,
}: ProjectsPageSingleTechProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        checked={tech.index === index}
        onChange={() => setTech({ tech: option.label, index: index })}
        className={styles.wrapperInput}
      />
      <div className={styles.wrapperName}>
        <p className={styles.wrapperNameIcon}>{option.icon}</p>
        <p>{option.label}</p>
      </div>
    </div>
  );
};

export default ProjectsPageSingleTech;
