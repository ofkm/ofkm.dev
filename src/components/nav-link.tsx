import { Link } from '@tanstack/react-router';
import type * as React from 'react';

import { isExternal } from '~/config/nav';

type NavLinkProps = React.ComponentProps<'a'> & {
  /** A route path, or an absolute URL for off-site destinations. */
  href: string;
  activeClassName?: string;
  /**
   * Exact by default. Prefix matching would light up `/components` and
   * `/components/react` at the same time as `/components/react/<slug>`, which
   * reads as three simultaneous locations in the sidebar.
   */
  exact?: boolean;
};

/**
 * Bridges string hrefs from the nav config to the router's typed `to` prop, and
 * transparently falls back to a plain anchor for external destinations. The
 * single unavoidable cast lives here instead of at every call site.
 */
export function NavLink({ href, activeClassName, exact = true, children, ...props }: NavLinkProps) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href as never} activeOptions={{ exact }} activeProps={activeClassName ? { className: activeClassName, 'data-status': 'active' } : { 'data-status': 'active' }} {...props}>
      {children}
    </Link>
  );
}
