export interface SidebarItem {
  title: string;
  href: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export const sidebarConfig: SidebarSection[] = [
  {
    title: 'Getting Started',
    items: [{ title: 'Introduction', href: '/' }],
  },
  {
    title: 'Component Registries',
    items: [
      { title: 'Overview', href: '/components' },
      { title: 'React', href: '/components/react' },
      { title: 'Svelte', href: '/components/svelte' },
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
