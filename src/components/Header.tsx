import siteMetadata from '@constants/siteMetadata';
import CustomLink from './CustomLink';
import headerNavLinks from '@constants/headerNavLinks';
import ThemeSwitch from './ThemeSwitch';
import MobileNav from './MobileNav';

const Header = () => {
  /** @todo LOGO 컴포넌트 추가하기 */

  return (
    <header className="flex items-center justify-between">
      <CustomLink href="/" className="flex gap-2">
        <div>LOGO</div>
        <div className="hidden sm:block">{siteMetadata.headerTitle}</div>
      </CustomLink>
      <div className="flex items-center gap-3">
        <div className="hidden space-x-3 sm:block">
          {headerNavLinks
            .filter((link) => link.title !== 'Home')
            .map((link) => (
              <CustomLink key={link.title} href={link.href}>
                {link.title}
              </CustomLink>
            ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
