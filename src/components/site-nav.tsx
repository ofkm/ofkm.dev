import { useRouterState } from '@tanstack/react-router';
import { ArrowUpRightIcon, ChevronRightIcon } from 'lucide-react';
import * as React from 'react';

import { NavLink } from '~/components/nav-link';
import { StatusDot } from '~/components/status-dot';
import { type NavItem, isExternal, navSections } from '~/config/nav';
import { cn } from '~/lib/utils';

const itemClass =
  'group flex items-center gap-2 rounded-sm px-3 py-1.5 text-[0.8125rem] text-dim transition-colors duration-150 hover:bg-raised hover:text-fg data-[status=active]:bg-raised data-[status=active]:font-medium data-[status=active]:text-fg';

function Leaf({ item, depth = 0, onNavigate }: { item: NavItem; depth?: number; onNavigate?: () => void }) {
  return (
    <NavLink href={item.href} onClick={onNavigate} className={cn(itemClass, depth > 0 && 'ml-3')}>
      <span className="truncate">{item.title}</span>
      {item.status && <StatusDot status={item.status} />}
      {isExternal(item.href) && <ArrowUpRightIcon className="size-3 shrink-0 text-faint" />}
    </NavLink>
  );
}

function Branch({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const containsCurrent = pathname === item.href || (item.items?.some((child) => child.href === pathname) ?? false);
  const [open, setOpen] = React.useState(containsCurrent);

  React.useEffect(() => {
    if (containsCurrent) setOpen(true);
  }, [containsCurrent]);

  return (
    <div>
      <div className="flex items-center">
        <Leaf item={{ ...item, items: undefined }} onNavigate={onNavigate} />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${item.title}`}
          className="ml-auto grid size-6 place-items-center rounded-sm text-faint transition-colors hover:text-fg"
        >
          <ChevronRightIcon className={cn('size-3.5 transition-transform duration-200 ease-[var(--ease-out-soft)]', open && 'rotate-90')} />
        </button>
      </div>

      {open && (
        <div className="mt-0.5 ml-3 border-l border-line pl-1.5">
          {item.items?.map((child) => (
            <Leaf key={child.href} item={child} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="px-3 py-8 lg:px-4">
      {navSections.map((section) => (
        <div key={section.title} className="mb-7 last:mb-0">
          <div className="mb-1.5 px-3 text-[0.8125rem] font-semibold text-fg">{section.title}</div>
          <div className="space-y-0.5">
            {section.items.map((item) => (item.items?.length ? <Branch key={item.href} item={item} onNavigate={onNavigate} /> : <Leaf key={item.href} item={item} onNavigate={onNavigate} />))}
          </div>
        </div>
      ))}
    </nav>
  );
}
