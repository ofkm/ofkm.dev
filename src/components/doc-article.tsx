import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

import { NavLink } from '~/components/nav-link';
import { ProjectMark } from '~/components/project-mark';
import type { DocHeading } from '~/lib/docs';
import type { Project } from '~/config/projects';
import { cn } from '~/lib/utils';

export interface DocNavItem {
  slug: string;
  path: string;
  title: string;
}

/**
 * Shared shell for a single documentation page: page rail, the rendered
 * article, an on-page contents list, and prev/next links. Used by every
 * project's docs, so a new project gets this for free.
 */
export function DocArticle({
  project,
  projectSlug,
  html,
  headings,
  nav,
  current,
}: {
  project: Project;
  projectSlug: string;
  html: string;
  headings: Array<DocHeading>;
  nav: Array<DocNavItem>;
  current: string;
}) {
  const index = nav.findIndex((item) => item.slug === current);
  const previous = index > 0 ? nav[index - 1] : undefined;
  const next = index >= 0 && index < nav.length - 1 ? nav[index + 1] : undefined;

  return (
    <div className="mx-auto flex w-full max-w-6xl gap-10 px-6 py-12 lg:px-10 lg:py-16">
      {/* Pages within this project */}
      <nav className="sticky top-24 hidden h-fit w-48 shrink-0 lg:block" aria-label={`${project.name} documentation`}>
        <div className="mb-2 flex items-center gap-2">
          <ProjectMark project={project} decorative className="size-4" />
          <span className="text-[0.8125rem] font-semibold">{project.name}</span>
        </div>
        <ul className="space-y-0.5">
          {nav.map((item) => (
            <li key={item.path}>
              <NavLink
                href={item.path}
                className={cn('block rounded-sm px-2.5 py-1.5 text-[0.8125rem] text-dim transition-colors hover:bg-raised hover:text-fg', item.slug === current && 'bg-raised font-medium text-fg')}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="min-w-0 flex-1">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-[0.8125rem] text-faint">
          <NavLink href="/docs" className="transition-colors hover:text-fg">
            Docs
          </NavLink>
          <span aria-hidden>/</span>
          <NavLink href={`/docs/${projectSlug}`} className="transition-colors hover:text-fg">
            {project.name}
          </NavLink>
        </div>

        <nav className="mb-8 flex gap-1.5 overflow-x-auto pb-1 lg:hidden" aria-label={`${project.name} documentation`}>
          {nav.map((item) => (
            <NavLink
              key={item.path}
              href={item.path}
              className={cn(
                'shrink-0 rounded-full border border-line px-3 py-1 text-[0.8125rem] text-dim transition-colors hover:text-fg',
                item.slug === current && 'border-transparent bg-raised font-medium text-fg'
              )}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />

        {(previous || next) && (
          <nav className="mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2" aria-label="Page navigation">
            {previous ? (
              <NavLink href={previous.path} className="card group flex flex-col gap-1 p-4 transition-colors hover:border-line-strong">
                <span className="flex items-center gap-1.5 text-xs text-faint">
                  <ArrowLeftIcon className="size-3" />
                  Previous
                </span>
                <span className="text-[0.875rem] font-medium transition-colors group-hover:text-signal">{previous.title}</span>
              </NavLink>
            ) : (
              <span />
            )}

            {next && (
              <NavLink href={next.path} className="card group flex flex-col items-end gap-1 p-4 text-right transition-colors hover:border-line-strong sm:col-start-2">
                <span className="flex items-center gap-1.5 text-xs text-faint">
                  Next
                  <ArrowRightIcon className="size-3" />
                </span>
                <span className="text-[0.875rem] font-medium transition-colors group-hover:text-signal">{next.title}</span>
              </NavLink>
            )}
          </nav>
        )}
      </div>

      {/* On this page */}
      <aside className="sticky top-24 hidden h-fit w-52 shrink-0 xl:block">
        {headings.length > 0 && (
          <>
            <div className="mb-2 text-[0.8125rem] font-semibold">On this page</div>
            <ul className="space-y-1 border-l border-line">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={cn(
                      '-ml-px block border-l border-transparent py-0.5 pl-3 text-[0.8125rem] text-dim transition-colors hover:border-line-strong hover:text-fg',
                      heading.level === 3 && 'pl-6'
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex items-center gap-1.5 text-[0.8125rem] text-faint transition-colors hover:text-fg">
            Source on GitHub
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        )}
      </aside>
    </div>
  );
}
