import * as React from 'react';

/**
 * localStorage-backed state that is SSR-safe: the server and the first client
 * render both use `fallback`, and the stored value is adopted in an effect.
 * Replaces what jotai's `atomWithStorage` was doing for a single preference.
 */
export function usePersistedState<T extends string>(key: string, fallback: T, allowed: ReadonlyArray<T>) {
  const [value, setValue] = React.useState<T>(fallback);

  React.useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored && (allowed as ReadonlyArray<string>).includes(stored)) {
      setValue(stored as T);
    }
    // `allowed` is a module-level constant at every call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = React.useCallback(
    (next: T) => {
      setValue(next);
      try {
        localStorage.setItem(key, next);
      } catch {
        // Private browsing / storage disabled — the preference just won't stick.
      }
    },
    [key]
  );

  return [value, update] as const;
}
