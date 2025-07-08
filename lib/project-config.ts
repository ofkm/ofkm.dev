export interface Project {
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  docsUrl?: string;
  liveUrl?: string;
  status: 'Active' | 'Archived' | 'In Development';
  logo: string;
}

export const projects: Record<string, Project> = {
  arcane: {
    name: 'Arcane',
    description: 'Modern Docker Management, Designed for Everyone.',
    longDescription: 'Arcane is a modern Docker management tool that simplifies container orchestration and deployment. It features an intuitive UI. Perfect for beginners or experienced docker users looking for a streamlined experience.',
    technologies: ['SvelteKit', 'Go', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ofkm/arcane',
    docsUrl: 'https://arcane.ofkm.dev',
    status: 'Active',
    logo: '/project-logos/arcane.svg',
  },
  svelockerui: {
    name: 'Svelocker UI',
    description: 'Modern Docker Registry UI',
    longDescription: 'A Simple and Modern Docker Registry UI built with Typescript, and SvelteKit',
    technologies: ['SvelteKit', 'Go', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ofkm/svelockerui',
    docsUrl: 'https://svelockerui.ofkm.dev',
    status: 'Archived',
    logo: '/project-logos/svelocker.png',
  },
};
