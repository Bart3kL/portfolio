import React, { ReactNode } from "react";

export interface ProjectsPageTechContentProps {
  name: string;
  tech: { name: string; icon: ReactNode }[];
  image: {
    src: string;
    alt: string;
  };
  description: string;
  href: string;
}
