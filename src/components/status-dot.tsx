import { cn } from '~/lib/utils';

export type Status = 'active' | 'development' | 'archived';

const tone: Record<Status, string> = {
  active: 'bg-ok',
  development: 'bg-blueprint',
  archived: 'bg-warn',
};

export const statusLabel: Record<Status, string> = {
  active: 'Active',
  development: 'In Development',
  archived: 'Archived',
};

/**
 * A live indicator. Only `active` gets the expanding ring — a project that is
 * archived shouldn't look like it's transmitting.
 */
export function StatusDot({ status, className }: { status: Status; className?: string }) {
  return (
    <span className={cn('relative inline-flex size-1.5 shrink-0', className)} aria-hidden>
      {status === 'active' && <span className={cn('absolute inset-0 animate-[ping-slow_2.6s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full opacity-70', tone[status])} />}
      <span className={cn('relative inline-flex size-1.5 rounded-full', tone[status])} />
    </span>
  );
}
