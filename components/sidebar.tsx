'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarConfig } from '@/config/sidebar-config';
import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon, ExternalLink } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Auto-expand items that contain the current path
  useEffect(() => {
    const newExpanded = new Set(expandedItems);
    sidebarConfig.forEach((section) => {
      section.items.forEach((item) => {
        if (item.items && item.items.some((subItem) => pathname === subItem.href)) {
          newExpanded.add(item.href);
        }
      });
    });
    setExpandedItems(newExpanded);
  }, [pathname]);

  const toggleExpanded = (href: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(href)) {
      newExpanded.delete(href);
    } else {
      newExpanded.add(href);
    }
    setExpandedItems(newExpanded);
  };

  const isExpanded = (href: string) => expandedItems.has(href);
  const isExternalLink = (href: string) => href.startsWith('http');

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        {sidebarConfig.map((section) => (
          <div key={section.title} className="px-3 py-2">
            <h2 className="mb-2 px-4 text-sm font-semibold tracking-tight">{section.title}</h2>
            <div className="space-y-1">
              {section.items.map((item) => (
                <div key={item.href}>
                  {
                    item.items && item.items.length > 0 ?
                      // Expandable item
                      <div>
                        <button
                          onClick={() => toggleExpanded(item.href)}
                          className={cn(
                            'w-full flex items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                          )}
                        >
                          <span className="flex items-center gap-2">
                            {item.title}
                            {isExternalLink(item.href) && <ExternalLink className="h-3 w-3" />}
                          </span>
                          <ChevronRightIcon className={cn('h-4 w-4 transition-transform duration-200', isExpanded(item.href) && 'rotate-90')} />
                        </button>
                        {isExpanded(item.href) && (
                          <div className="ml-6 mt-1 space-y-1 border-l border-border pl-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={cn(
                                  'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                  pathname === subItem.href ? 'bg-accent text-accent-foreground font-medium' : 'text-muted-foreground'
                                )}
                                {...(isExternalLink(subItem.href) && { target: '_blank', rel: 'noopener noreferrer' })}
                              >
                                {subItem.title}
                                {isExternalLink(subItem.href) && <ExternalLink className="h-3 w-3" />}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      // Regular link item
                    : <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                          pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                        )}
                        {...(isExternalLink(item.href) && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {item.title}
                        {isExternalLink(item.href) && <ExternalLink className="h-3 w-3" />}
                      </Link>

                  }
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
