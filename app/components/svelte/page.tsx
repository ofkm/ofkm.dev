import { MainContent } from '@/components/main-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function SvelteComponentsPage() {
  return (
    <MainContent>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight">Svelte Components</h1>
            <Badge variant="secondary">🧡 Svelte</Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">A collection of reusable Svelte components built with TypeScript and Tailwind CSS.</p>
        </div>

        {/* Coming Soon */}
        <Card className="text-center py-12">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">Svelte components are currently in development. Check back soon!</p>
          </CardContent>
        </Card>
      </div>
    </MainContent>
  );
}
