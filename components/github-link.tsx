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
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>{/* <StarsCount /> */}</React.Suspense>
      </Link>
    </Button>
  );
}
