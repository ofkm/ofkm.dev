'use client';

import { useEffect, useRef } from 'react';

interface SvelteComponentPreviewProps {
  componentSlug: string;
  exampleName?: string;
}

export function SvelteComponentPreview({ componentSlug, exampleName }: SvelteComponentPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const src = exampleName ? `/api/svelte-preview/${componentSlug}?example=${exampleName}` : `/api/svelte-preview/${componentSlug}`;
      iframeRef.current.src = src;
    }
  }, [componentSlug, exampleName]);

  return (
    <div className="border border-gray-800 rounded-lg bg-[#0a0a0a] overflow-hidden">
      <iframe ref={iframeRef} className="w-full h-[400px] border-none bg-[#0a0a0a]" title={`Svelte Component Preview: ${componentSlug}`} />
    </div>
  );
}
