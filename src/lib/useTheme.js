// © 2026 Rudraksh Singh Tomar. All rights reserved.
import { useEffect, useState } from 'react';

const KEY = 'acedex-site-theme';

// Default to the polished light theme (the marketing site's primary look).
// A saved choice always wins; dark stays available via the toggle.
function initialTheme() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* localStorage may be unavailable */ }
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f6f7f9' : '#0c0d12');
    try { localStorage.setItem(KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return { theme, toggle };
}
