'use client';

import * as React from 'react';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { copyToClipboard } from '@/components/copy-button';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { highlighter, type SupportedLanguage } from '@/lib/highlighter';

interface CodeBlockProps {
  code: string;
  language?: SupportedLanguage;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'typescript', className, showLineNumbers = true }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [highlightedCode, setHighlightedCode] = React.useState<string>('');

  React.useEffect(() => {
    async function highlightCode() {
      try {
        const shiki = await highlighter;

        const html = shiki.codeToHtml(code, {
          lang: language,
          theme: 'catppuccin-mocha',
          transformers:
            showLineNumbers ?
              [
                {
                  name: 'line-numbers',
                  line(node, line) {
                    node.properties = node.properties || {};
                    node.properties['data-line'] = line;
                    node.properties.className = [...(Array.isArray(node.properties.className) ? node.properties.className : []), 'line'];
                  },
                },
              ]
            : [],
        });

        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
        // Fallback with manual line numbers
        const lines = code.split('\n');
        const fallbackHtml = showLineNumbers ? `<pre class="shiki"><code>${lines.map((line, i) => `<span class="line" data-line="${i + 1}">${line}</span>`).join('\n')}</code></pre>` : `<pre class="shiki"><code>${code}</code></pre>`;
        setHighlightedCode(fallbackHtml);
      }
    }

    highlightCode();
  }, [code, language, showLineNumbers]);

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
    <div className={`relative overflow-hidden rounded-lg border bg-[#0d1117] ${className}`}>
      <div className="absolute top-3 right-3 z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost" className="h-7 w-7 opacity-70 hover:opacity-100 text-gray-400 hover:text-gray-200" onClick={copyCode}>
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
        <div className="code-block-content" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </div>
    </div>
  );
}
