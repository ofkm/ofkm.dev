import { MainContent } from '@/components/main-content';
import { SelectionCard } from '@/components/selection-card';
import { Icons } from '@/components/icons';

const frameworks = [
  {
    name: 'React',
    description: 'Components built with React and TypeScript',
    icon: <Icons.react className="size-10" />,
    href: '/components/react',
  },
  {
    name: 'SvelteKit',
    description: 'Components built with SvelteKit and TypeScript',
    icon: <Icons.svelte className="size-10" />,
    href: 'https://shadcn.ofkm.dev',
  },
];

export default function ComponentsPage() {
  return (
    <MainContent>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Component Registries</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Choose your framework to view and use components built specifically for that technology.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Pick Your Framework</h2>
          <p className="text-muted-foreground">Start by selecting your framework of choice. Each registry contains components optimized for that specific technology.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {frameworks.map((framework) => (
            <SelectionCard key={framework.name} name={framework.name} description={framework.description} icon={framework.icon} href={framework.href} />
          ))}
        </div>
      </div>
    </MainContent>
  );
}
