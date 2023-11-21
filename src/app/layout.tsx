import './globals.css';
import type { Metadata } from 'next';
import siteMetadata from '@constants/siteMetadata';
import Footer from '@components/Footer';
import Header from '@components/Header';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteMetadata.language}>
      <body className="bg-white text-black antialiased">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
