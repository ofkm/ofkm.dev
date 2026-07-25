import type { Project } from '~/config/projects';
import { cn } from '~/lib/utils';

/**
 * A project's logo, or a monogram when it doesn't have one. Keeps every
 * project row the same shape whether or not it has been branded yet.
 */
export function ProjectMark({ project, className, decorative = false }: { project: Project; className?: string; decorative?: boolean }) {
  if (project.logo) {
    return <img src={project.logo} alt={decorative ? '' : `${project.name} logo`} aria-hidden={decorative || undefined} className={cn('object-contain', className)} />;
  }

  return (
    <span
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : `${project.name} logo`}
      className={cn('grid shrink-0 place-items-center rounded-md bg-raised text-dim', className)}
    >
      <span className="font-display text-[0.5em] leading-none font-bold tracking-[-0.02em]">{project.name.slice(0, 2).toLowerCase()}</span>
    </span>
  );
}
