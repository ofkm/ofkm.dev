import { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Project One",
    description:
      "A utility library I built to simplify my development workflow and make common tasks more efficient.",
    tags: ["JavaScript", "TypeScript", "Node.js"],
    url: "https://github.com/OFKM/project-one",
    gradientClass: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "Project Two",
    description:
      "A modern UI component collection I use for my personal projects, built with accessibility in mind.",
    tags: ["React", "Tailwind CSS", "Accessibility"],
    url: "https://github.com/OFKM/project-two",
    gradientClass: "bg-gradient-to-r from-blue-600 to-cyan-600",
  },
  {
    name: "Project Three",
    description:
      "A CLI tool I developed to automate repetitive tasks in my development workflow.",
    tags: ["CLI", "Python", "DevOps"],
    url: "https://github.com/OFKM/project-three",
    gradientClass: "bg-gradient-to-r from-cyan-600 to-blue-500",
  },
];
