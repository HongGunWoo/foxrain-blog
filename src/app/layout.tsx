import '@/styles/globals.css';
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
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <body className="h-screen bg-white text-black transition-colors dark:bg-black dark:text-white">
        <NextThemeProvider>
          <div className="mx-6 flex h-fit min-h-screen max-w-3xl flex-col antialiased md:mx-auto">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
