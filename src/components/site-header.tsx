import { Link } from '@tanstack/react-router';
import { MenuIcon, XIcon } from 'lucide-react';
import * as React from 'react';

import { Icons } from '~/components/icons';
import { SiteNav } from '~/components/site-nav';
import { ThemeToggle } from '~/components/theme-toggle';
import { Button } from '~/components/ui/button';
import { headerNav } from '~/config/nav';
import { site } from '~/config/site';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl">
        <div className="flex h-16 items-center gap-1 px-4 lg:px-6">
          <Link to="/" className="mr-6 flex items-center gap-2.5" aria-label={site.name}>
            <Icons.logo className="size-5 text-fg" />
            <span className="text-[0.9375rem] font-semibold tracking-[-0.01em]">
              ofkm<span className="text-faint">.dev</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-sm px-3 py-1.5 text-[0.8125rem] font-medium text-dim transition-colors hover:text-fg data-[status=active]:text-fg"
                activeProps={{ 'data-status': 'active' }}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <Button asChild variant="ghost" size="icon-sm" aria-label="GitHub">
              <a href={site.repo} target="_blank" rel="noreferrer noopener">
                <Icons.gitHub className="size-4" />
              </a>
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon-sm" className="md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto border-b border-line bg-bg md:hidden">
          <SiteNav onNavigate={() => setMenuOpen(false)} />
        </div>
      )}
    </>
  );
}
