import siteMetadata from '@/constants/siteMetadata';
import CustomLink from './CustomLink';
import headerNavLinks from '@/constants/headerNavLinks';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="my-7 space-y-1">
      <CustomLink href="/" className="group flex w-fit items-baseline">
        <Image
          src="/images/icon.png"
          alt="FoxRain Logo"
          width={50}
          height={50}
        />

        <div className="mr-1 text-3xl font-bold">
          {siteMetadata.headerTitle}
        </div>
        <small className="fon-bold text-sm text-gray-300 transition-colors group-hover:text-primary">
          devlog
        </small>
      </CustomLink>
      <div className="flex items-center justify-between">
        <nav className="flex gap-2 font-semibold text-gray-300">
          {headerNavLinks
            .filter((link) => link.title !== 'Home')
            .map((link) => (
              <CustomLink
                key={link.title}
                href={link.href}
                className="transition-colors hover:text-gray-400"
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
