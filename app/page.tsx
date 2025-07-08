import { MainContent } from '@/components/main-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <MainContent>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">OFKM Dev Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Welcome to the OFKM development site. Explore my projects, component libraries, documentation, and development insights all in one place.</p>
        </div>

        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/components">Component Library</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Projects</h3>
            <p className="text-sm text-muted-foreground">Browse through my collection of web applications, tools, and experiments.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Components</h3>
            <p className="text-sm text-muted-foreground">Reusable React components with full documentation and examples.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Documentation</h3>
            <p className="text-sm text-muted-foreground">Comprehensive guides, API references, and technical documentation.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Open Source</h3>
            <p className="text-sm text-muted-foreground">All projects are open source and available on GitHub.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Modern Stack</h3>
            <p className="text-sm text-muted-foreground">Built with Next.js, React, TypeScript, and modern web technologies.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-muted-foreground">Mobile-first approach with beautiful, accessible user interfaces.</p>
          </div>
        </div>
      </div>
    </MainContent>
  );
}
