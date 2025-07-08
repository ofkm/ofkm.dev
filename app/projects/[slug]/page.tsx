import { MainContent } from '@/components/main-content';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/project-config';
import { Badge } from '@/components/ui/badge';
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon, Archive } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to get status styling and icon
function getStatusConfig(status: string) {
  switch (status) {
    case 'Active':
      return {
        icon: <CheckIcon className="size-4 mr-1" />,
        className: 'bg-green-500 text-white dark:bg-green-600',
      };
    case 'Archived':
      return {
        icon: <Archive className="size-4 mr-1" />,
        className: 'bg-yellow-500 text-white dark:bg-yellow-600',
      };
    case 'In Development':
      return {
        icon: <AlertCircleIcon className="size-4 mr-1" />,
        className: 'bg-blue-500 text-white dark:bg-blue-600',
      };
    default:
      return {
        icon: <BadgeCheckIcon className="size-4 mr-1" />,
        className: 'bg-gray-500 text-white dark:bg-gray-600',
      };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const statusConfig = getStatusConfig(project.status);

  return (
    <MainContent>
      <div className="space-y-8">
        <div className="space-y-4">
          <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 size-4" />
            Back to Projects
          </Link>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Image src={project.logo} alt={`${project.name} logo`} width={64} height={64} className="rounded-lg" />
              <div>
                <h1 className="text-4xl font-bold tracking-tight">{project.name}</h1>
                <p className="text-xl text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {project.docsUrl && (
            <Button size="lg" asChild>
              <Link href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 size-4" />
                Documentation
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="lg" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Icons.gitHub className="mr-2 size-4" />
                View Source
              </Link>
            </Button>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Status</h3>
              <Badge variant="secondary" className={statusConfig.className}>
                {statusConfig.icon}
                {project.status}
              </Badge>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Links</h3>
              <div className="space-y-2">
                {project.docsUrl && (
                  <Link href={project.docsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <ExternalLink className="mr-2 size-4" />
                    Documentation
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <Icons.gitHub className="mr-2 size-4" />
                    Source Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
}
