import { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Svelocker UI",
    description:
      "A Simple and Modern Docker Registry UI built with Typescript, and SvelteKit",
    tags: ["Typescript", "GoLang", "SvelteKit"],
    url: "https://github.com/ofkm/svelocker-ui",
    gradientClass:
      "bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600",
    imageUrl: "/svelockerui.png",
  },
  {
    name: "Arcane",
    description:
      "Simple and Elegant Docker Management UI written in Typescript and SvelteKit",
    tags: ["SvelteKit", "Tailwind CSS", "Typescript"],
    url: "https://github.com/ofkm/arcane",
    gradientClass:
      "bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500",
    imageUrl: "/arcane.png",
  },
];
