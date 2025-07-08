'use client';

import { ComponentData } from '@/lib/component-registry';
import { MainContent } from './main-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from './code-block';
import { ComponentPreview } from './component-preview';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { CardDefault, CardWithFooter } from './examples/card-examples';

interface ComponentPageProps {
  component: ComponentData;
}

// Map example names to components
const exampleComponents: Record<string, Record<string, React.ComponentType>> = {
  card: {
    Default: CardDefault,
    'With Footer': CardWithFooter,
  },
};

export function ComponentPage({ component }: ComponentPageProps) {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <MainContent>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight">{component.name}</h1>
            <Badge variant="secondary">{component.category}</Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">{component.description}</p>
          <div className="flex gap-2">
            {component.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Installation */}
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
              <code className="text-sm">{component.installation}</code>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(component.installation)}>
                <Copy className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={component.usage} language="tsx" />
          </CardContent>
        </Card>

        {/* Examples */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Examples</h2>
          {component.examples.map((example, index) => {
            // Get the component based on the component name and example name
            const ExampleComponent = exampleComponents['card']?.[example.name];

            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{example.name}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="preview">
                    <TabsList>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                      <ComponentPreview>
                        {ExampleComponent ?
                          <ExampleComponent />
                        : <div>Component not found</div>}
                      </ComponentPreview>
                    </TabsContent>
                    <TabsContent value="code">
                      <CodeBlock code={example.code} language="tsx" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Props Table */}
        {component.props && (
          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Type</th>
                      <th className="text-left p-2">Default</th>
                      <th className="text-left p-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 font-mono text-sm">{prop.name}</td>
                        <td className="p-2 font-mono text-sm">{prop.type}</td>
                        <td className="p-2 font-mono text-sm">{prop.default || '-'}</td>
                        <td className="p-2 text-sm">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </MainContent>
  );
}
