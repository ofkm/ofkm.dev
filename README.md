# ofkm.dev

The OFKM Technologies site: open-source, self-hosted projects and the documentation that goes with them.

## Stack

| Layer     | Choice                                                 |
| --------- | ------------------------------------------------------ |
| Framework | [TanStack Start](https://tanstack.com/start) on Vite 8 |
| UI        | React 19, Radix primitives                             |
| Styling   | Tailwind CSS v4 (CSS-first config)                     |
| Type      | Montserrat (display) + Geist / Geist Mono              |
| Packages  | pnpm                                                   |

Every page is pre-rendered at build time — the site ships as static HTML with no client-side data fetching.

## Getting started

```bash
pnpm install
```

```bash
pnpm dev
```

The dev server runs at http://localhost:3000.

### Scripts

| Script           | What it does                           |
| ---------------- | -------------------------------------- |
| `pnpm dev`       | Dev server with HMR                    |
| `pnpm build`     | Production build + prerender + sitemap |
| `pnpm preview`   | Serve the production build locally     |
| `pnpm typecheck` | `tsc --noEmit`                         |
| `pnpm format`    | Prettier write                         |

## Layout

```
src/
  routes/          file-based routes (the URL structure lives here)
  components/      site chrome + ui primitives
  config/          content: projects, navigation, site metadata
  content/docs/    project documentation, as markdown
  lib/             theme, the docs engine, helpers
  styles/app.css   design tokens and the whole visual system
```

### Adding a project

Add an entry to `src/config/projects.ts`. It appears on the home page and
`/projects`, gets its own `/projects/<slug>` page, and shows up in the sidebar —
all derived from that one file. Optional fields (`highlights`, `version`,
`license`) add the corresponding sections to the detail page when present.

### Documenting a project

Drop markdown files into `src/content/docs/<project-slug>/`, where the slug
matches a key in `src/config/projects.ts`:

```
src/content/docs/tally/
  index.md          -> /docs/tally
  installation.md   -> /docs/tally/installation
  usage.md          -> /docs/tally/usage
```

Each file starts with frontmatter:

```markdown
---
title: Usage
description: Counting a directory, specific paths, and per-directory totals.
order: 2
---
```

`title` is required; `description` becomes the meta description; `order` sorts
the page rail ascending (`index.md` always leads, pages without an `order` sort
last). That is the entire contract — routing, the page rail, the on-page
contents list, prev/next links, the `/docs` listing and prerendering are all
derived from the files on disk. There is nothing to register.

Markdown is rendered by [markdown-it](https://github.com/markdown-it/markdown-it)
with [Shiki](https://shiki.style) for code blocks, both running inside a server
function — so neither the parser, the highlighter, nor the raw markdown ends up
in the client bundle. The browser receives finished HTML.

A project with a `docsUrl` but no markdown directory is listed on `/docs` as an
external link instead, so the page covers everything either way.

## Design

The visual language is documented where it is enforced — `src/styles/app.css`.
In short: a near-neutral greyscale, hairline borders, soft rounded surfaces,
Montserrat for display headings, and blue reserved for whatever is interactive
or current. Both themes are first-class; dark is the default.

Two rules keep it coherent:

- **Colour means something.** Blue marks the current page, the primary action,
  and links. Green / amber / violet are reserved for status. Everything else is
  greyscale.
- **One container primitive.** The `.card` class in `app.css` is the only
  surface treatment; components compose it rather than inventing their own
  borders and radii.

## Licence

MIT
