import siteMetadata from '@/constants/siteMetadata';
import CustomLink from './CustomLink';
import headerNavLinks from '@/constants/headerNavLinks';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="my-7 space-y-1">
      <h1 className="flex items-baseline">
        <CustomLink href="/">
          <Image
            src="/images/icon.png"
            alt="FoxRain Logo"
            width={50}
            height={50}
          />
        </CustomLink>
        <CustomLink href="/" className="mr-1 text-3xl font-bold">
          {siteMetadata.headerTitle}
        </CustomLink>
        <small className="fon-bold text-sm text-gray-400">devlog</small>
      </h1>
      <div className="flex items-center justify-between">
        <nav className="flex gap-2 font-semibold text-gray-400">
          {headerNavLinks
            .filter((link) => link.title !== 'Home')
            .map((link) => (
              <CustomLink
                key={link.title}
                href={link.href}
                className="hover:text-black"
              >
                {link.title}
              </CustomLink>
            ))}
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
}
