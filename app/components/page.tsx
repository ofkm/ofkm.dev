import { MainContent } from '@/components/main-content';
import { Icons } from '@/components/icons';
import Link from 'next/link';

const frameworks = [
  {
    name: 'React',
    description: 'Components built with React and TypeScript',
    icon: <Icons.react className="h-10 w-10" />,
    href: '/components/react',
  },
  {
    name: 'Svelte',
    description: 'Components built with Svelte and TypeScript',
    icon: <Icons.svelte className="h-10 w-10" />,
    href: '/components/svelte',
  },
];

export default function ComponentsPage() {
  return (
    <MainContent>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Component Registries</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Choose your framework to view and use components built specifically for that technology.</p>
        </div>

        {/* Framework Selection */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Pick Your Framework</h2>
          <p className="text-muted-foreground">Start by selecting your framework of choice. Each registry contains components optimized for that specific technology.</p>
        </div>

        {/* Framework Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {frameworks.map((framework) => (
            <Link key={framework.name} href={framework.href} className="bg-surface text-surface-foreground hover:bg-surface/80 flex w-full flex-col items-center rounded-xl p-6 transition-colors sm:p-10">
              {framework.icon}
              <p className="mt-2 font-medium">{framework.name}</p>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold mb-4">What's included?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">React Registry</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Components built with React 18+</li>
                <li>• TypeScript support</li>
                <li>• Tailwind CSS styling</li>
                <li>• Radix UI primitives</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Svelte Registry</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Components built with Svelte 4+</li>
                <li>• TypeScript support</li>
                <li>• Tailwind CSS styling</li>
                <li>• Custom Svelte primitives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
}
