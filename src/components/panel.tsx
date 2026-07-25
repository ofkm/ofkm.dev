import type * as React from 'react';

import { cn } from '~/lib/utils';

/** The site's container primitive: hairline border, soft corners, flat fill. */
export function Panel({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="panel" className={cn('card overflow-hidden', className)} {...props} />;
}
