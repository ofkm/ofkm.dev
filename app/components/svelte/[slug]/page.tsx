import { ComponentPage } from '@/components/component-page';
import { svelteComponentRegistry } from '@/config/svelte-component-registry';
import { notFound } from 'next/navigation';

interface ComponentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = svelteComponentRegistry[slug];

  if (!component) {
    notFound();
  }

  return <ComponentPage component={component} slug={slug} />;
}

export async function generateStaticParams() {
  return Object.keys(svelteComponentRegistry).map((slug) => ({
    slug,
  }));
}
