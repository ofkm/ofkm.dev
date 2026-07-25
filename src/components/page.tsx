import type * as React from 'react';

import { cn } from '~/lib/utils';

/** Content column — narrow, and centred in the area beside the sidebar. */
export function Page({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('relative z-10 mx-auto w-full max-w-3xl px-6 py-14 lg:px-10 lg:py-20', className)} {...props} />;
}

/** Standard page opening: muted label, large heading, lede, actions. */
export function PageHeader({ eyebrow, title, lede, actions, aside }: { eyebrow?: string; title: React.ReactNode; lede?: React.ReactNode; actions?: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <header className="mb-14">
      {(eyebrow || aside) && (
        <div className="flex animate-[rise_0.45s_var(--ease-out-soft)_backwards] items-center justify-between gap-3">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {aside}
        </div>
      )}

      <h1 className="display mt-3 animate-[rise_0.45s_var(--ease-out-soft)_60ms_backwards] text-[clamp(2.1rem,4.8vw,3.25rem)]">{title}</h1>

      {lede && <p className="mt-4 max-w-xl animate-[rise_0.45s_var(--ease-out-soft)_120ms_backwards] text-[0.9375rem] leading-relaxed text-dim">{lede}</p>}

      {actions && <div className="mt-7 flex animate-[rise_0.45s_var(--ease-out-soft)_180ms_backwards] flex-wrap gap-2.5">{actions}</div>}
    </header>
  );
}

/** Section heading inside a page body. */
export function Section({ title, description, children, className }: { title: string; description?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('mt-14', className)}>
      <h2 className="text-base font-semibold tracking-[-0.01em]">{title}</h2>
      {description && <p className="mt-1 text-[0.8125rem] text-dim">{description}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
