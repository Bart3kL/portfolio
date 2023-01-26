import React from "react";

import ProjectsPageSingleTech from "../../Atoms/ProjectsPageSingleTech";
import ProjectsPageTechContent from "../../Atoms/ProjectsPageTechContent";
import { techStack } from "./untils";
import useFilter from "@/components/Hooks/useFilter";

import styles from "./rwd.module.scss";

const ProjectsPageFilterNav = () => {
  const { filteredProjects, tech, setTech } = useFilter();

  return (
    <>
      <div className={styles.wrapperTechList}>
        {techStack.map((option, i) => {
          return (
            <ProjectsPageSingleTech
              option={option}
              index={i}
              tech={tech}
              key={i}
              setTech={setTech}
            />
          );
        })}
      </div>
      <div className={styles.wrapperProjects}>
        {filteredProjects.map((project, i) => {
          return <ProjectsPageTechContent {...project} key={i} />;
        })}
      </div>
    </>
  );
};

export default ProjectsPageFilterNav;
