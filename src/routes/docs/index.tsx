import { createFileRoute } from '@tanstack/react-router';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

import { NavLink } from '~/components/nav-link';
import { Page, PageHeader, Section } from '~/components/page';
import { ProjectMark } from '~/components/project-mark';
import { projectEntries, projects } from '~/config/projects';
import { getDocProjects } from '~/lib/docs-rpc';

export const Route = createFileRoute('/docs/')({
  loader: async () => ({ hosted: await getDocProjects() }),
  component: Docs,
  head: () => ({ meta: [{ title: 'Documentation — ofkm.dev' }] }),
});

function Docs() {
  const { hosted } = Route.useLoaderData();

  // Projects whose docs live elsewhere still deserve a way in.
  const external = projectEntries.filter(([slug, project]) => project.docsUrl && !hosted.includes(slug));

  return (
    <Page>
      <PageHeader eyebrow="Documentation" title="Guides and references." lede="Documentation for OFKM projects. Some lives here; the larger projects have documentation sites of their own." />

      {hosted.length > 0 && (
        <Section title="Here on ofkm.dev">
          <div className="grid gap-3">
            {hosted.map((slug) => {
              const project = projects[slug];
              if (!project) return null;

              return (
                <NavLink
                  key={slug}
                  href={`/docs/${slug}`}
                  className="card group flex items-center gap-4 p-5 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out-soft)] hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
                >
                  <ProjectMark project={project} decorative className="size-8 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.9375rem] font-medium">{project.name}</span>
                    <span className="mt-1 block text-[0.8125rem] leading-relaxed text-dim">{project.description}</span>
                  </span>
                  <ArrowRightIcon className="size-4 shrink-0 text-faint transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5" />
                </NavLink>
              );
            })}
          </div>
        </Section>
      )}

      {external.length > 0 && (
        <Section title="Elsewhere" description="These projects have their own documentation sites.">
          <div className="grid gap-3">
            {external.map(([slug, project]) => (
              <a
                key={slug}
                href={project.docsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="card group flex items-center gap-4 p-5 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out-soft)] hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
              >
                <ProjectMark project={project} decorative className="size-8 shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.9375rem] font-medium">{project.name}</span>
                  <span className="mt-1 block text-[0.8125rem] text-faint">{project.docsUrl?.replace('https://', '')}</span>
                </span>
                <ArrowUpRightIcon className="size-4 shrink-0 text-faint transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </Section>
      )}
    </Page>
  );
}
