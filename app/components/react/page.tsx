import { MainContent } from '@/components/main-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { reactComponentRegistry } from '@/config/react-component-registry';
import Link from 'next/link';

export default function ReactComponentsPage() {
  const components = Object.entries(reactComponentRegistry);

  return (
    <MainContent>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight">React Components</h1>
            <Badge variant="secondary">⚛️ React</Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">A collection of reusable React components built with TypeScript and Tailwind CSS.</p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map(([key, component]) => (
            <Link key={key} href={`/components/react/${key}`}>
              <Card className="transition-all duration-200 hover:shadow-md cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                    <Badge variant="outline">{component.category}</Badge>
                  </div>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {component.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainContent>
  );
}
