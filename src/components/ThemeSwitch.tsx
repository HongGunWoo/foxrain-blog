'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconNight, IconSun } from 'public/svgs';
import { set } from 'date-fns';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'dark' || theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button aria-label="Toggle Dark Mode" onClick={handleToggleTheme}>
      {resolvedTheme === 'dark' || theme === 'dark' ? (
        <IconNight className="h-6 w-6 fill-primary" />
      ) : (
        <IconSun className="h-6 w-6 fill-primary stroke-primary" />
      )}
    </button>
  );
}
