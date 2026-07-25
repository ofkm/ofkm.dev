import { createRouter } from '@tanstack/react-router';

import { CatchBoundary } from '~/components/catch-boundary';
import { NotFound } from '~/components/not-found';
import { routeTree } from './routeTree.gen';

export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: CatchBoundary,
    defaultNotFoundComponent: NotFound,
    scrollRestoration: true,
  });
}
