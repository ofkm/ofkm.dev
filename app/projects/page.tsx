import { MainContent } from '@/components/main-content';
import { SelectionCard } from '@/components/selection-card';
import { projects } from '@/lib/project-config';
import Image from 'next/image';

function getProjectIcon(project: { name: string; logo: string }) {
  return (
    <div className="size-10 relative">
      <Image
        src={project.logo}
        alt={`${project.name} logo`}
        width={40}
        height={40}
        className="size-10 object-contain"
        style={{
          maskImage: `url(${project.logo})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${project.logo})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          backgroundColor: 'currentColor',
        }}
      />
    </div>
  );
}

export default function ProjectsPage() {
  const projectsArray = Object.entries(projects).map(([slug, project]) => ({
    name: project.name,
    description: project.description,
    icon: getProjectIcon(project),
    href: `/projects/${slug}`,
  }));

  return (
    <MainContent>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Explore my collection of web applications, tools, and experiments. Each project showcases different technologies and approaches.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {projectsArray.map((project) => (
            <SelectionCard key={project.name} name={project.name} description={project.description} icon={project.icon} href={project.href} />
          ))}
        </div>
      </div>
    </MainContent>
  );
}
