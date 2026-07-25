import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '~/lib/utils';

const badgeVariants = cva("inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap [&_svg:not([class*='size-'])]:size-3", {
  variants: {
    variant: {
      default: 'border-transparent bg-signal text-signal-fg',
      outline: 'border-line text-dim',
      muted: 'border-transparent bg-raised text-dim',
      ok: 'border-ok/30 bg-ok/10 text-ok',
      warn: 'border-warn/30 bg-warn/10 text-warn',
      info: 'border-blueprint/30 bg-blueprint/10 text-blueprint',
    },
  },
  defaultVariants: { variant: 'outline' },
});

export function Badge({ className, variant, asChild = false, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
