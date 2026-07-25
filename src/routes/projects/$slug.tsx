import { createFileRoute, notFound } from '@tanstack/react-router';
import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon } from 'lucide-react';

import { Icons } from '~/components/icons';
import { NavLink } from '~/components/nav-link';
import { Page, PageHeader, Section } from '~/components/page';
import { ProjectMark } from '~/components/project-mark';
import { Panel } from '~/components/panel';
import { StatusDot } from '~/components/status-dot';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { projects, statusDot, statusTone } from '~/config/projects';

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = projects[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [{ title: `${loaderData.project.name} — ofkm.dev` }, { name: 'description', content: loaderData.project.description }],
        }
      : {},
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <Page>
      <NavLink href="/projects" className="group mb-10 inline-flex items-center gap-1.5 text-[0.8125rem] text-faint transition-colors hover:text-fg">
        <ArrowLeftIcon className="size-3.5 transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:-translate-x-0.5" />
        All projects
      </NavLink>

      <div className="mb-6 flex animate-[rise_0.45s_var(--ease-out-soft)_backwards] items-center gap-4">
        <span className="card grid size-14 shrink-0 place-items-center">
          <ProjectMark project={project} className="size-8" />
        </span>
      </div>

      <PageHeader
        eyebrow={`${project.name} · since ${project.since}`}
        aside={
          <Badge variant={statusTone[project.status]}>
            <StatusDot status={statusDot[project.status]} />
            {project.status}
          </Badge>
        }
        title={project.description}
        lede={project.longDescription}
        actions={
          <>
            {project.docsUrl && (
              <Button asChild>
                <a href={project.docsUrl} target="_blank" rel="noreferrer noopener">
                  Documentation
                  <ArrowUpRightIcon />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                  <Icons.gitHub />
                  Source
                </a>
              </Button>
            )}
          </>
        }
      />

      {project.highlights && project.highlights.length > 0 && (
        <Section title="What it does">
          <ul className="grid gap-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-[0.875rem] leading-relaxed text-dim">
                <CheckIcon className="mt-1 size-3.5 shrink-0 text-signal" />
                {highlight}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Built with">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
        </div>
      </Section>

      {(project.version || project.license) && (
        <Section title="Details">
          <dl className="card grid gap-6 p-6 sm:grid-cols-3">
            <Detail label="Status" value={project.status} />
            {project.version && <Detail label="Latest release" value={project.version} />}
            {project.license && <Detail label="Licence" value={project.license} />}
          </dl>
        </Section>
      )}

      <Section title="Links">
        <Panel className="divide-y divide-line">
          {project.docsUrl && <LinkRow label="Documentation" href={project.docsUrl} />}
          {project.githubUrl && <LinkRow label="Source code" href={project.githubUrl} />}
          {project.liveUrl && <LinkRow label="Live site" href={project.liveUrl} />}
        </Panel>
      </Section>
    </Page>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.8125rem] text-faint">{label}</dt>
      <dd className="mt-1.5 text-[0.8125rem] font-medium">{value}</dd>
    </div>
  );
}

function LinkRow({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-raised">
      <span className="text-[0.875rem] transition-colors group-hover:text-signal">{label}</span>
      <span className="flex items-center gap-1.5 text-[0.8125rem] text-faint">
        {new URL(href).host}
        <ArrowUpRightIcon className="size-3.5" />
      </span>
    </a>
  );
}
