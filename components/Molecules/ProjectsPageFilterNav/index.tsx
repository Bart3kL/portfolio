import React, { useState, useMemo } from "react";
import styles from "./rwd.module.scss";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux, SiWebflow, SiTypescript, SiNextdotjs } from "react-icons/si";
import ProjectsPageSingleTech from "../../Atoms/ProjectsPageSingleTech";
import ProjectsPageTechContent from "../../Atoms/ProjectsPageTechContent";

const projects = [
  {
    name: "Blog",
    tech: [
      { name: "WebFlow", icon: <SiWebflow /> },
      { name: "React", icon: <FaReact /> },
    ],
    image: {
      src: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "",
    },
    description: "LoreLoremLoremLoremLorem Lorem LoremLorem LoremLoremm",
    href: "",
  },
  {
    name: "Shop",
    tech: [{ name: "WebFlow", icon: <SiWebflow /> }],
    image: {
      src: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "",
    },
    description: "LoreLoremLoremLoremLorem Lorem LoremLorem Lorem Loremm",
    href: "",
  },
  {
    name: "Bank",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "JS", icon: <DiJavascript1 /> },
    ],
    image: {
      src: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "",
    },
    description: "bank",
    href: "",
  },
];
const techStack = [
  {
    icon: "",
    label: "All",
  },
  {
    icon: <DiJavascript1 />,
    label: "JS",
  },
  {
    icon: <FaReact />,
    label: "React",
  },
  {
    icon: <SiWebflow />,
    label: "WebFlow",
  },
  {
    icon: <SiNextdotjs />,
    label: "Next",
  },
  {
    icon: <SiRedux />,
    label: "Redux",
  },
  {
    icon: <SiTypescript />,
    label: "TS",
  },
];
const ProjectsPageFilterNav = () => {
  const [tech, setTech] = useState({ tech: "All", index: 0 });

  const projectss = useMemo(() => {
    return projects.filter((project) => {
      if (tech.tech === "All") {
        return projects;
      }
      const movieGenre = project.tech.map((val) => val.name);
      return movieGenre.includes(tech.tech);
    });
  }, [tech]);

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
        {projectss.map((project, index) => {
          return <ProjectsPageTechContent {...project} key={index} />;
        })}
      </div>
    </>
  );
};

export default ProjectsPageFilterNav;
