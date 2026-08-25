import { useEffect, useState } from 'react';

/**
 * Minimal hash-based router. Reads the part of the URL after '#' and
 * exposes the current path plus a navigate() helper. Keeps the app a
 * true single-page frontend with no backend or extra dependencies.
 */
export function useHashRoute() {
  const [path, setPath] = useState(() => normalize(window.location.hash));

  useEffect(() => {
    const onChange = () => {
      setPath(normalize(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = (to: string) => {
    if (normalize(window.location.hash) === normalize(to)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = to;
  };

  return { path, navigate };
}

const normalize = (hash: string) => {
  const clean = hash.replace(/^#/, '');
  return clean === '' ? '/' : clean;
};
