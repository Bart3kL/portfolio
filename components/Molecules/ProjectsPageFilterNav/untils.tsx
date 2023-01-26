import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux, SiWebflow, SiTypescript, SiNextdotjs } from "react-icons/si";

export const projects = [
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
