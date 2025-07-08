import Link from 'next/link';
import { ReactNode } from 'react';

interface SelectionCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export function SelectionCard({ name, description, icon, href }: SelectionCardProps) {
  return (
    <Link href={href} className="bg-surface text-surface-foreground hover:bg-surface/80 flex w-full flex-col items-center rounded-xl p-6 transition-colors sm:p-10">
      {icon}
      <p className="mt-2 font-medium">{name}</p>
    </Link>
  );
}
