import '../styles/globals.css';
import type { Metadata } from 'next';
import siteMetadata from '@/constants/siteMetadata';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PropsWithChildren } from 'react';
import { NextThemeProvider } from './NextThemeProvider';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang={siteMetadata.language}
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-white text-black transition-colors dark:bg-black dark:text-white">
        <NextThemeProvider>
          <div className="mx-6 flex h-screen max-w-3xl flex-col antialiased md:mx-auto">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
