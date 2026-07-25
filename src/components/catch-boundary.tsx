import { type ErrorComponentProps, Link, useRouter } from '@tanstack/react-router';

import { Page } from '~/components/page';
import { Button } from '~/components/ui/button';

export function CatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();

  return (
    <Page>
      <span className="eyebrow text-danger">Error</span>
      <h1 className="display mt-3 text-[clamp(2.1rem,4.8vw,3.25rem)]">Something broke.</h1>

      <pre className="mt-6 overflow-x-auto rounded-lg border border-danger/25 bg-danger/5 px-4 py-3 font-mono text-xs text-danger">{error.message}</pre>

      <div className="mt-7 flex flex-wrap gap-2.5">
        <Button onClick={() => void router.invalidate()}>Try again</Button>
        <Button asChild variant="outline">
          <Link to="/">Back to start</Link>
        </Button>
      </div>
    </Page>
  );
}
