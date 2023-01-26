import React, { ReactNode } from "react";
export interface ProjectsPageSingleTechProps {
  index: number;
  tech: { tech: string; index: number };
  option: { icon: string | ReactNode; label: string };
  setTech: ({ tech, index }: { tech: string; index: number }) => void;
}
