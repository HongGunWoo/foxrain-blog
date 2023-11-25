import siteMetadata from '@constants/siteMetadata';
import CustomLink from './CustomLink';
import headerNavLinks from '@constants/headerNavLinks';
import ThemeSwitch from './ThemeSwitch';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  // TODO: Add a logo

  return (
    <header className="my-7 flex flex-col justify-between gap-1">
      <h3 className="flex items-baseline">
        <Link href="/">
          <Image
            src="/images/icon.png"
            alt="FoxRain Logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/" className="mr-1 text-3xl font-bold">
          {siteMetadata.headerTitle}
        </Link>
        <small className="fon-bold text-sm text-gray-400">devlog</small>
      </h3>
      <div className="flex items-center justify-between">
        <nav className="space-x-4 font-semibold text-gray-400">
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
};

export default Header;
