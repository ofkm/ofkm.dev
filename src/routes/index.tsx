import { createFileRoute } from '@tanstack/react-router';
import { ArrowRightIcon } from 'lucide-react';

import { NavLink } from '~/components/nav-link';
import { ProjectMark } from '~/components/project-mark';
import { Page, PageHeader, Section } from '~/components/page';
import { StatusDot } from '~/components/status-dot';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { projectEntries, statusDot, statusTone } from '~/config/projects';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({ meta: [{ title: 'ofkm.dev — open-source projects by OFKM' }] }),
});

const specs = [
  { label: 'Built with', value: 'Go · SvelteKit · TypeScript' },
  { label: 'Hosting', value: 'Self-hosted, always' },
  { label: 'Licence', value: 'Open source' },
];

function Home() {
  return (
    <Page>
      <PageHeader
        title={
          <>
            Open-source tools for <span className="text-signal">running your own</span> infrastructure.
          </>
        }
        lede="This is where OFKM's work lives — self-hosted software built because the alternative was paying for something worse. Everything here is open source, and the source is one click away."
        actions={
          <>
            <Button asChild>
              <NavLink href="/projects">See projects</NavLink>
            </Button>
            <Button asChild variant="outline">
              <NavLink href="/docs">Read the docs</NavLink>
            </Button>
          </>
        }
      />

      <Section title="Projects">
        <div className="grid gap-3">
          {projectEntries.map(([slug, project], i) => (
            <NavLink
              key={slug}
              href={`/projects/${slug}`}
              className="card group flex items-center gap-4 p-5 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out-soft)] hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
              style={{ animation: `rise 0.45s var(--ease-out-soft) ${200 + i * 60}ms backwards` }}
            >
              <ProjectMark project={project} decorative className="size-8 shrink-0" />

              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-[0.9375rem] font-medium">{project.name}</span>
                  <Badge variant={statusTone[project.status]}>
                    <StatusDot status={statusDot[project.status]} />
                    {project.status}
                  </Badge>
                </span>
                <span className="mt-1 block text-[0.8125rem] leading-relaxed text-dim">{project.description}</span>
              </span>

              <ArrowRightIcon className="size-4 shrink-0 text-faint transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5" />
            </NavLink>
          ))}
        </div>
      </Section>

      <Section title="At a glance">
        <dl className="card grid gap-6 p-6 sm:grid-cols-3">
          {specs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-[0.8125rem] text-faint">{spec.label}</dt>
              <dd className="mt-1.5 text-[0.8125rem] font-medium">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </Page>
  );
}
