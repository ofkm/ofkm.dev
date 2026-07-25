export type ProjectStatus = 'Active' | 'In Development' | 'Archived';

export interface Project {
  name: string;
  /** Short line used on cards and in the sidebar. */
  description: string;
  longDescription: string;
  /** Bullet points shown under "What it does". */
  highlights?: Array<string>;
  technologies: Array<string>;
  githubUrl?: string;
  docsUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  /** Omit when the project has no mark of its own; a monogram is used instead. */
  logo?: string;
  since: string;
  /** Latest released version, if the project publishes one. */
  version?: string;
  license?: string;
}

export const projects: Record<string, Project> = {
  arcane: {
    name: 'Arcane',
    description: 'Modern Docker Management, Designed for Everyone.',
    longDescription:
      'Arcane is a self-hosted Docker management platform with a Go backend and a SvelteKit front end. It covers the whole surface of a Docker host — containers, images, volumes, networks and Compose projects — and scales up to multiple hosts and full Swarm clusters from a single interface, without giving up the clarity that makes it approachable on day one.',
    highlights: [
      'Containers, images, volumes, networks and Compose projects in one place',
      'Full Docker Swarm support: nodes, services, stacks, tasks, secrets and configs',
      'Manage many hosts at once through lightweight remote agents',
      'Event-driven image update checks, with optional auto-update and self-update',
      'Local accounts and OIDC, with role-based access control and API keys',
      'Webhooks, notifications, an activity centre and a template browser',
      'A companion CLI (arcane-cli) for scripting and automation',
    ],
    technologies: ['Go', 'SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/getarcaneapp/arcane',
    docsUrl: 'https://getarcane.app',
    status: 'Active',
    logo: '/project-logos/arcane.svg',
    since: '2025',
    version: 'v2.5.0',
    license: 'BSD-3-Clause',
  },
  'go-gaze': {
    name: 'Gaze',
    description: 'Filesystem watching for Go, without cgo.',
    longDescription:
      'Gaze is a filesystem watcher written in pure Go — no cgo, no C dependencies — with native backends for Linux, macOS and Windows. Point it at a directory or a single file, give it a config if you need filtering or callbacks, and it handles the watcher goroutines for you.',
    highlights: [
      'Pure Go with platform backends for Linux, macOS and Windows',
      'Watch a directory recursively, a single file, or many roots from one watcher',
      'Exclude paths by glob, by path prefix, or with your own predicate',
      'Event and error callbacks, or log through log/slog instead',
      'A reusable Config that can create any number of watchers',
      'Bounded event queue and optional symlink following',
    ],
    technologies: ['Go'],
    githubUrl: 'https://github.com/ofkm/go-gaze',
    docsUrl: 'https://gaze.ofkm.dev',
    status: 'In Development',
    logo: '/project-logos/gaze.svg',
    since: '2026',
    version: 'v0.1.3',
    license: 'BSD-3-Clause',
  },
  goerrkit: {
    name: 'goerrkit',
    description: 'Structured errors for Go.',
    longDescription:
      'goerrkit is a small library for errors that carry more than a string: a typed code, a message that is safe to show a user, arbitrary metadata, and a stack trace. It stays compatible with the standard library, so errors.Is and errors.As keep working exactly as you expect.',
    highlights: [
      'Typed error codes you can switch on instead of matching strings',
      'A public-safe message kept separate from internal detail',
      'Structured metadata attached to any error',
      'Stack traces captured at the point of failure',
      'Full errors.Is / errors.As / Join interoperability',
      'Try, Catch and Must helpers, plus HTTP transport helpers',
    ],
    technologies: ['Go'],
    githubUrl: 'https://github.com/ofkm/goerrkit',
    docsUrl: 'https://goerrkit.ofkm.dev',
    status: 'In Development',
    logo: '/project-logos/goerrkit.svg',
    since: '2026',
    version: 'v0.1.0',
    license: 'MIT',
  },
  tally: {
    name: 'tally',
    description: 'Source code line analyzer, inspired by cloc.',
    longDescription:
      'tally is a command-line tool that counts what is actually in a codebase: files, blank lines, comment lines and code lines, broken down by language. It is written in Rust and scans in parallel, so pointing it at a large repository stays fast.',
    highlights: [
      'Per-language totals for files, blank, comment and code lines',
      'Around 45 languages recognised out of the box',
      'Run it bare to count the current directory, or pass specific paths',
      'A --tree flag adds per-directory totals underneath each language',
      'Skips .git, node_modules, target and dist without being told',
      'Parallel scanning built on rayon, memchr and aho-corasick',
    ],
    technologies: ['Rust'],
    githubUrl: 'https://github.com/ofkm/tally',
    status: 'In Development',
    logo: '/project-logos/tally.svg',
    since: '2026',
    version: 'v0.4.0',
    license: 'MIT',
  },
  svelockerui: {
    name: 'Svelocker UI',
    description: 'Modern Docker Registry UI',
    longDescription: 'A simple, modern UI for browsing a private Docker registry — images, tags and manifests — built with SvelteKit and TypeScript. No longer maintained.',
    technologies: ['SvelteKit', 'Go', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ofkm/svelockerui',
    docsUrl: 'https://svelockerui.ofkm.dev',
    status: 'Archived',
    logo: '/project-logos/svelocker.png',
    since: '2024',
  },
};

export const projectEntries = Object.entries(projects);

/** Badge tone per status. */
export const statusTone: Record<ProjectStatus, 'ok' | 'info' | 'warn'> = {
  Active: 'ok',
  'In Development': 'info',
  Archived: 'warn',
};

/** Indicator variant per status. */
export const statusDot: Record<ProjectStatus, 'active' | 'development' | 'archived'> = {
  Active: 'active',
  'In Development': 'development',
  Archived: 'archived',
};
