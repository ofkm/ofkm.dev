'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarConfig } from '@/lib/sidebar-config';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 px-3 py-4 border-r bg-background overflow-y-auto">
      <div className="space-y-4">
        {sidebarConfig.map((section) => (
          <div key={section.title} className="space-y-3">
            <h4 className="px-2 text-sm font-semibold text-foreground">{section.title}</h4>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link key={item.href} href={item.href} className={cn('block px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent', pathname === item.href && 'text-foreground bg-accent')}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
