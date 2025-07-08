import { ComponentPage } from '@/components/component-page';
import { componentRegistry } from '@/lib/component-registry';
import { notFound } from 'next/navigation';

interface ComponentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = componentRegistry[slug];

  if (!component) {
    notFound();
  }

  return <ComponentPage component={component} />;
}

// Generate static paths for all components
export async function generateStaticParams() {
  return Object.keys(componentRegistry).map((slug) => ({
    slug,
  }));
}
