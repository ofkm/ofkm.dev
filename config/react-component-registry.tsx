import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface ComponentData {
  name: string;
  description: string;
  category: string;
  tags: string[];
  code: string;
  examples: {
    name: string;
    description: string;
    code: string;
  }[];
  installation: string;
  usage: string;
  props?: {
    name: string;
    type: string;
    description: string;
    default?: string;
  }[];
}

export const reactComponentRegistry: Record<string, ComponentData> = {
  card: {
    name: 'Card',
    description: 'Displays a card with header, content, and footer.',
    category: 'Layout',
    tags: ['card', 'container', 'layout'],
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  )
}`,
    examples: [
      {
        name: 'Default',
        description: 'A basic card example.',
        code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
</Card>`,
      },
      {
        name: 'With Footer',
        description: 'A card with header, content, and footer.',
        code: `<Card>
  <CardHeader>
    <CardTitle>Card with Footer</CardTitle>
    <CardDescription>This card has a footer section.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
      },
    ],
    installation: `shadcn@latest add card`,
    usage: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'`,
  },
};
