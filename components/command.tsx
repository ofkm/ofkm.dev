'use client';

import * as React from 'react';
import { CheckIcon, ClipboardIcon, TerminalIcon } from 'lucide-react';

import { useConfig } from '@/hooks/use-config';
import { copyToClipboard } from '@/components/copy-button';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<'pre'> & {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
}) {
  const [config, setConfig] = useConfig();
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const packageManager = config.packageManager || 'pnpm';
  const tabs = React.useMemo(() => {
    return {
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    };
  }, [__npm__, __pnpm__, __yarn__, __bun__]);

  const copyCommand = React.useCallback(() => {
    const command = tabs[packageManager];

    if (!command) {
      return;
    }

    copyToClipboard(command);
    setHasCopied(true);
  }, [packageManager, tabs]);

  return (
    <div className="relative overflow-hidden rounded-lg border bg-surface">
      <Tabs
        value={packageManager}
        className="gap-0"
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as 'pnpm' | 'npm' | 'yarn' | 'bun',
          });
        }}
      >
        <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-7 w-7 rounded bg-muted">
              <TerminalIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <TabsList className="h-8 bg-transparent p-0">
              {Object.entries(tabs).map(([key]) => {
                return (
                  <TabsTrigger key={key} value={key} className="h-7 px-3 text-xs font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    {key}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="h-7 w-7 opacity-70 hover:opacity-100" onClick={copyCommand}>
                <span className="sr-only">Copy</span>
                {hasCopied ?
                  <CheckIcon className="h-3 w-3" />
                : <ClipboardIcon className="h-3 w-3" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{hasCopied ? 'Copied' : 'Copy to Clipboard'}</TooltipContent>
          </Tooltip>
        </div>
        <div className="overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsContent key={key} value={key} className="mt-0 px-4 py-3">
                <pre className="overflow-x-auto">
                  <code className="font-mono text-sm" data-language="bash">
                    {value}
                  </code>
                </pre>
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
}
