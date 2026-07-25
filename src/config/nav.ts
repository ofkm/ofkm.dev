import { projectEntries } from './projects';

export interface NavItem {
  title: string;
  href: string;
  items?: Array<NavItem>;
  /** Drives the status dot in the sidebar. */
  status?: 'active' | 'development' | 'archived';
}

export interface NavSection {
  title: string;
  items: Array<NavItem>;
}

const statusMap = {
  Active: 'active',
  'In Development': 'development',
  Archived: 'archived',
} as const;

export const navSections: Array<NavSection> = [
  {
    title: 'Start Here',
    items: [{ title: 'Introduction', href: '/' }],
  },
  {
    title: 'Projects',
    items: [
      { title: 'All projects', href: '/projects' },
      ...projectEntries.map(([slug, project]) => ({
        title: project.name,
        href: `/projects/${slug}`,
        status: statusMap[project.status],
      })),
    ],
  },
  {
    title: 'Reference',
    items: [{ title: 'Documentation', href: '/docs' }],
  },
];

export const headerNav = [
  { title: 'Projects', href: '/projects' },
  { title: 'Docs', href: '/docs' },
] as const;

export const isExternal = (href: string) => href.startsWith('http');
