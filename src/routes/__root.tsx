/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import type * as React from 'react';

import { CatchBoundary } from '~/components/catch-boundary';
import { NotFound } from '~/components/not-found';
import { SiteHeader } from '~/components/site-header';
import { SiteNav } from '~/components/site-nav';
import { site } from '~/config/site';
import { ThemeProvider, themeInitScript } from '~/lib/theme';
import appCss from '~/styles/app.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'color-scheme', content: 'dark light' },
      { title: site.title },
      { name: 'description', content: site.description },
      { name: 'author', content: site.author },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:url', content: site.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: site.title },
      { name: 'twitter:description', content: site.description },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'canonical', href: site.url },
    ],
  }),
  component: AppShell,
  errorComponent: CatchBoundary,
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sets the palette before first paint so there is no theme flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

/** The shared frame: sticky header, hairline-separated sidebar rail, content. */
function AppShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="relative z-10 flex flex-1">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-line md:block">
          <SiteNav />
        </aside>
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
