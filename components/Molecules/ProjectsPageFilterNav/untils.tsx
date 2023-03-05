import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiWebflow,
  SiTypescript,
  SiNextdotjs,
  SiCss3,
  SiContentful,
  SiPrisma,
} from "react-icons/si";

export const projects = [
  {
    name: "Blog",
    tech: [{ name: "WebFlow", icon: <SiWebflow /> }],
    image: {
      src: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "",
    },
    description: "Blog osobisty dotyczący programowania",
    href: "https://www.jestemprogramista.pl/",
  },
  {
    name: "Polyglot",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "JS", icon: <DiJavascript1 /> },
      { name: "Next", icon: <SiNextdotjs /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Contentful", icon: <SiContentful /> },
    ],
    image: {
      src: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "",
    },
    description: "Platforma do nauki angielskiego.",
    href: "https://github.com/Bart3kL/Polyglot",
  },
];
export const techStack = [
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
