import * as React from 'react';

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'ofkm-theme';

/**
 * Runs before first paint so the correct palette is on `<html>` by the time
 * anything renders. Kept as a string because it has to be inlined into the
 * document shell, ahead of hydration.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`.trim();

type ThemeContextValue = {
  /** What the user picked, including `system`. */
  theme: Theme;
  /** What is actually on screen right now. */
  resolved: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  /** False until after hydration, so menus don't render a wrong checkmark. */
  ready: boolean;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function systemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>('system');
  const [resolved, setResolved] = React.useState<'light' | 'dark'>('dark');
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setThemeState(stored === 'light' || stored === 'dark' ? stored : 'system');
    setResolved((document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null) ?? systemTheme());
    setReady(true);
  }, []);

  // Only follow the OS while the user is actually on `system`.
  React.useEffect(() => {
    if (theme !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: light)');
    const apply = () => {
      const next = systemTheme();
      document.documentElement.setAttribute('data-theme', next);
      setResolved(next);
    };

    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme]);

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next);

    if (next === 'system') {
      localStorage.removeItem(STORAGE_KEY);
      const resolvedNext = systemTheme();
      document.documentElement.setAttribute('data-theme', resolvedNext);
      setResolved(resolvedNext);
      return;
    }

    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute('data-theme', next);
    setResolved(next);
  }, []);

  const value = React.useMemo(() => ({ theme, resolved, setTheme, ready }), [theme, resolved, setTheme, ready]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useTheme() {
  const context = React.use(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside <ThemeProvider>');
  return context;
}
