'use client';

import { ComponentData } from '@/config/react-component-registry';
import { MainContent } from './main-content';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from './code-block';
import { ComponentPreview } from './component-preview';
import { CardDefault, CardWithFooter } from './examples/card-examples';
import { CodeBlockCommand } from './command';

interface ComponentPageProps {
  component: ComponentData;
}

const exampleComponents: Record<string, Record<string, React.ComponentType>> = {
  card: {
    Default: CardDefault,
    'With Footer': CardWithFooter,
  },
};

export function ComponentPage({ component }: ComponentPageProps) {
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
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <CodeBlockCommand __npm__={`npx ${component.installation}`} __yarn__={`yarn ${component.installation}`} __pnpm__={`pnpm dlx ${component.installation}`} __bun__={`bunx --bun ${component.installation}`} />
        </div>

        {/* Usage */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Usage</h2>
          <Tabs defaultValue="preview">
            <TabsList className="bg-transparent p-0 gap-4">
              <TabsTrigger value="preview" className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-400 hover:text-gray-200 p-0 h-auto font-medium">
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-400 hover:text-gray-200 p-0 h-auto font-medium">
                Code
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <ComponentPreview>
                {(() => {
                  const firstExample = component.examples[0];
                  const ExampleComponent = exampleComponents['card']?.[firstExample?.name];
                  return ExampleComponent ? <ExampleComponent /> : <div>Component not found</div>;
                })()}
              </ComponentPreview>
            </TabsContent>
            <TabsContent value="code">
              <CodeBlock code={component.usage} language="svelte" showLineNumbers={true} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Examples
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
                      <CodeBlock code={example.code} language="tsx" showLineNumbers={true} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            );
          })}
        </div> */}
      </div>
    </MainContent>
  );
}
