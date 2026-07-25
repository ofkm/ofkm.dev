import shikiPlugin from '@shikijs/markdown-it';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

/**
 * The docs engine.
 *
 * Everything here runs on the server (route loaders call it through a server
 * function), so neither markdown-it nor Shiki reaches the browser.
 *
 * To document a project, drop markdown files in:
 *
 *   src/content/docs/<project-slug>/<page-slug>.md
 *
 * where `<project-slug>` matches a key in `~/config/projects`. `index.md`
 * becomes the project's docs landing page. Frontmatter:
 *
 *   ---
 *   title: Getting started
 *   description: Install tally and run your first count.
 *   order: 1
 *   ---
 *
 * Navigation, routing, the on-page contents list, prev/next links and
 * prerendering are all derived from that — nothing else to register.
 */

export interface DocFrontmatter {
  title: string;
  description?: string;
  /** Ascending. Pages without one sort last, then alphabetically by title. */
  order?: number;
}

export interface DocHeading {
  id: string;
  text: string;
  level: number;
}

export interface DocPage extends DocFrontmatter {
  project: string;
  /** '' for the project's index page. */
  slug: string;
  path: string;
  body: string;
}

export interface RenderedDoc extends Omit<DocPage, 'body'> {
  html: string;
  headings: Array<DocHeading>;
}

const files = import.meta.glob('../content/docs/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

/**
 * Minimal frontmatter reader: `key: value` pairs, one per line, optionally
 * quoted. Deliberately not a full YAML parser — the content is ours, and a
 * real parser would be a dependency for three keys.
 */
function parseFrontmatter(source: string): { data: Record<string, string | number>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { data: {}, body: source };

  const data: Record<string, string | number> = {};
  for (const line of (match[1] ?? '').split(/\r?\n/)) {
    const pair = /^([A-Za-z_][\w-]*)\s*:\s*(.*)$/.exec(line.trim());
    if (!pair) continue;

    const key = pair[1] as string;
    const raw = (pair[2] ?? '').trim().replace(/^['"]|['"]$/g, '');
    data[key] = raw !== '' && !Number.isNaN(Number(raw)) ? Number(raw) : raw;
  }

  return { data, body: source.slice(match[0].length) };
}

function toPage(filePath: string, source: string): DocPage | null {
  // ../content/docs/<project>/<name>.md
  const match = /\/content\/docs\/([^/]+)\/(.+)\.md$/.exec(filePath);
  if (!match) return null;

  const project = match[1] as string;
  const name = match[2] as string;
  const { data, body } = parseFrontmatter(source);
  const slug = name === 'index' ? '' : name;

  return {
    project,
    slug,
    path: slug ? `/docs/${project}/${slug}` : `/docs/${project}`,
    title: typeof data.title === 'string' && data.title ? data.title : name,
    description: typeof data.description === 'string' ? data.description : undefined,
    order: typeof data.order === 'number' ? data.order : undefined,
    body,
  };
}

const pages: Array<DocPage> = Object.entries(files)
  .map(([filePath, source]) => toPage(filePath, source))
  .filter((page): page is DocPage => page !== null);

function byOrder(a: DocPage, b: DocPage) {
  // The index page always leads.
  if (!a.slug) return -1;
  if (!b.slug) return 1;

  const left = a.order ?? Number.MAX_SAFE_INTEGER;
  const right = b.order ?? Number.MAX_SAFE_INTEGER;
  return left === right ? a.title.localeCompare(b.title) : left - right;
}

/** Every project slug that has at least one markdown file, in project order. */
export function documentedProjects(): Array<string> {
  return [...new Set(pages.map((page) => page.project))];
}

/** A project's pages, ordered for navigation. */
export function pagesFor(project: string): Array<Omit<DocPage, 'body'>> {
  return pages
    .filter((page) => page.project === project)
    .sort(byOrder)
    .map(({ body: _body, ...meta }) => meta);
}

let markdown: Promise<MarkdownIt> | null = null;

function getMarkdown() {
  markdown ??= (async () => {
    const md = MarkdownIt({ html: true, linkify: true, typographer: false });

    md.use(
      await shikiPlugin({
        themes: { light: 'github-light-default', dark: 'github-dark-default' },
        defaultColor: false,
      })
    );

    md.use(anchor, {
      level: [2, 3],
      slugify: (heading: string) =>
        heading
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-'),
      permalink: anchor.permalink.headerLink({ safariReaderFix: true }),
    });

    return md;
  })();

  return markdown;
}

/** Pulls h2/h3 out of the rendered HTML for the on-page contents list. */
function extractHeadings(html: string): Array<DocHeading> {
  const headings: Array<DocHeading> = [];
  const pattern = /<h([23])[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/g;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html)) !== null) {
    headings.push({
      level: Number(match[1]),
      id: match[2] as string,
      text: (match[3] ?? '').replace(/<[^>]+>/g, '').trim(),
    });
  }

  return headings;
}

export async function renderDoc(project: string, slug: string): Promise<RenderedDoc | null> {
  const page = pages.find((entry) => entry.project === project && entry.slug === slug);
  if (!page) return null;

  const md = await getMarkdown();
  const html = md.render(page.body);
  const { body: _body, ...meta } = page;

  return { ...meta, html, headings: extractHeadings(html) };
}
