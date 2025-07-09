'use client';

import * as React from 'react';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { copyToClipboard } from '@/components/copy-button';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface CodeSnippetProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeSnippet({ code, language = 'tsx', className }: CodeSnippetProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const copyCode = React.useCallback(() => {
    copyToClipboard(code);
    setHasCopied(true);
  }, [code]);

  return (
    <div className={`relative overflow-hidden rounded-lg border bg-muted ${className}`}>
      <div className="absolute top-3 right-3 z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost" className="h-7 w-7 opacity-70 hover:opacity-100" onClick={copyCode}>
              <span className="sr-only">Copy</span>
              {hasCopied ?
                <CheckIcon className="h-3 w-3" />
              : <ClipboardIcon className="h-3 w-3" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{hasCopied ? 'Copied' : 'Copy to Clipboard'}</TooltipContent>
        </Tooltip>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <pre className="overflow-x-auto">
          <code className="font-mono text-sm" data-language={language}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
