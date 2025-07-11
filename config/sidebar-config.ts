import { reactComponentRegistry } from './react-component-registry';
import { svelteComponentRegistry } from './svelte-component-registry';

export interface SidebarItem {
  title: string;
  href: string;
  items?: SidebarItem[];
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const reactComponents = Object.entries(reactComponentRegistry).map(([key, component]) => ({
  title: component.name,
  href: `/components/react/${key}`,
}));

const svelteComponents = Object.entries(svelteComponentRegistry).map(([key, component]) => ({
  title: component.name,
  href: `/components/svelte/${key}`,
}));

export const sidebarConfig: SidebarSection[] = [
  {
    title: 'Getting Started',
    items: [{ title: 'Introduction', href: '/' }],
  },
  {
    title: 'Component Registries',
    items: [
      { title: 'Overview', href: '/components' },
      {
        title: 'React',
        href: '/components/react',
        items: reactComponents,
      },
      {
        title: 'SvelteKit',
        href: 'https://shadcn.ofkm.dev',
      },
    ],
  },
  {
    title: 'Projects',
    items: [
      { title: 'Arcane', href: '/projects/arcane' },
      { title: 'Pocket ID', href: '/projects/pocket-id' },
    ],
  },
];
