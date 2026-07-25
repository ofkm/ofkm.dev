import { createServerFn } from '@tanstack/react-start';

import { documentedProjects, pagesFor, renderDoc } from './docs';

/**
 * Server boundary for the docs engine. Route loaders import these directly;
 * `createServerFn` compiles the handler bodies away on the client and leaves
 * an RPC stub, so markdown-it, Shiki and the raw markdown never reach the
 * browser — it only ever receives rendered HTML.
 *
 * Note the filename: Start's import protection denies `*.server.*` modules to
 * client code, and route files count as client code, so this cannot be named
 * `docs.server.ts` even though that is what it is.
 */

export const getDocPage = createServerFn({ method: 'GET' })
  .validator((input: { project: string; slug: string }) => input)
  .handler(async ({ data }) => {
    const page = await renderDoc(data.project, data.slug);
    if (!page) return null;

    return { page, nav: pagesFor(data.project) };
  });

export const getDocProjects = createServerFn({ method: 'GET' }).handler(() => documentedProjects());
