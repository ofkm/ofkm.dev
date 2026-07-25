import { createFileRoute, notFound } from '@tanstack/react-router';

import { DocArticle } from '~/components/doc-article';
import { projects } from '~/config/projects';
import { getDocPage } from '~/lib/docs-rpc';

export const Route = createFileRoute('/docs/$project/')({
  loader: async ({ params }) => {
    const project = projects[params.project];
    if (!project) throw notFound();

    const result = await getDocPage({ data: { project: params.project, slug: '' } });
    if (!result) throw notFound();

    return { project, projectSlug: params.project, ...result };
  },
  component: DocIndex,
  head: ({ loaderData }) =>
    loaderData
      ? { meta: [{ title: `${loaderData.page.title} — ${loaderData.project.name} docs` }, ...(loaderData.page.description ? [{ name: 'description', content: loaderData.page.description }] : [])] }
      : {},
});

function DocIndex() {
  const { project, projectSlug, page, nav } = Route.useLoaderData();

  return <DocArticle project={project} projectSlug={projectSlug} html={page.html} headings={page.headings} nav={nav} current="" />;
}
