import React, { useState, useMemo } from "react";
import { projects } from "../Molecules/ProjectsPageFilterNav/untils";

const useFilter = () => {
  const [tech, setTech] = useState({ tech: "All", index: 0 });
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (tech.tech === "All") {
        return projects;
      }
      const movieGenre = project.tech.map((val: { name: string }) => val.name);
      return movieGenre.includes(tech.tech);
    });
  }, [tech]);

  return { filteredProjects, tech, setTech };
};

export default useFilter;
