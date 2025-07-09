import { ComponentPage } from '@/components/component-page';
import { reactComponentRegistry } from '@/config/react-component-registry';
import { notFound } from 'next/navigation';

interface ComponentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = reactComponentRegistry[slug];

  if (!component) {
    notFound();
  }

  return <ComponentPage component={component} slug={slug} />;
}

// Generate static paths for all components
export async function generateStaticParams() {
  return Object.keys(reactComponentRegistry).map((slug) => ({
    slug,
  }));
}
