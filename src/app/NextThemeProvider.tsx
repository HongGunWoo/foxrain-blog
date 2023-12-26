'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function NextThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
}
