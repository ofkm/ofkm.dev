import * as React from 'react';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href="https://github.com/ofkm/ofkm.dev" target="_blank" rel="noreferrer">
        <Icons.gitHub />
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
          <StarsCount />
        </React.Suspense>
      </Link>
    </Button>
  );
}

export async function StarsCount() {
  try {
    const data = await fetch('https://api.github.com/repos/ofkm/ofkm.dev', {
      next: { revalidate: 86400 },
    });

    if (!data.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const json = await data.json();

    // Check if stargazers_count exists and is a number
    if (typeof json.stargazers_count !== 'number') {
      return <span className="text-muted-foreground w-8 text-xs tabular-nums">0</span>;
    }

    const count = json.stargazers_count;
    const formattedCount = count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toLocaleString();

    return <span className="text-muted-foreground w-8 text-xs tabular-nums">{formattedCount}</span>;
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    // Return fallback UI
    return <span className="text-muted-foreground w-8 text-xs tabular-nums">0</span>;
  }
}
