import { Link } from '@tanstack/react-router';

import { Page } from '~/components/page';
import { Button } from '~/components/ui/button';

export function NotFound() {
  return (
    <Page>
      <span className="eyebrow">404</span>
      <h1 className="display mt-3 text-[clamp(2.1rem,4.8vw,3.25rem)]">Nothing at this address.</h1>
      <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-dim">The page you asked for isn't part of this site — it may have been moved, renamed, or never existed.</p>

      <div className="mt-7 flex flex-wrap gap-2.5">
        <Button asChild>
          <Link to="/">Back to start</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/projects">See projects</Link>
        </Button>
      </div>
    </Page>
  );
}
