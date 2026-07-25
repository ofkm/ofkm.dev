import { createFileRoute } from '@tanstack/react-router';
import { ArrowRightIcon } from 'lucide-react';

import { NavLink } from '~/components/nav-link';
import { ProjectMark } from '~/components/project-mark';
import { Page, PageHeader } from '~/components/page';
import { StatusDot } from '~/components/status-dot';
import { Badge } from '~/components/ui/badge';
import { type Project, projectEntries, statusDot, statusTone } from '~/config/projects';

export const Route = createFileRoute('/projects/')({
  component: ProjectsIndex,
  head: () => ({ meta: [{ title: 'Projects — ofkm.dev' }] }),
});

function ProjectsIndex() {
  return (
    <Page>
      <PageHeader eyebrow="Projects" title="Things built, and still being built." lede="Open-source tools from OFKM. Each one started as something I needed and didn't want to keep re-solving." />

      <div className="grid gap-3 sm:grid-cols-2">
        {projectEntries.map(([slug, project], i) => (
          <ProjectCard key={slug} slug={slug} project={project} index={i} />
        ))}
      </div>
    </Page>
  );
}

function ProjectCard({ slug, project, index }: { slug: string; project: Project; index: number }) {
  return (
    <NavLink
      href={`/projects/${slug}`}
      className="card group flex flex-col p-6 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out-soft)] hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
      style={{ animation: `rise 0.45s var(--ease-out-soft) ${index * 70}ms backwards` }}
    >
      <ProjectMark project={project} decorative className="size-9" />

      <h2 className="mt-5 text-lg font-semibold tracking-[-0.01em]">{project.name}</h2>
      <p className="mt-1.5 flex-1 text-[0.8125rem] leading-relaxed text-dim">{project.description}</p>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Badge variant={statusTone[project.status]}>
          <StatusDot status={statusDot[project.status]} />
          {project.status}
        </Badge>
        <ArrowRightIcon className="size-4 text-faint transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5" />
      </div>
    </NavLink>
  );
}
