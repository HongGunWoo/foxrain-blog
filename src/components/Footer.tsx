import { IconGithub, IconMail } from 'public/svgs';
import CustomLink from './CustomLink';
import siteMetadata from '@constants/siteMetadata';

const Footer = () => {
  return (
    <footer className="my-7 space-y-1 text-gray-400">
      <div className="flex items-center justify-center gap-5">
        <CustomLink href={siteMetadata.contact.github}>
          <IconGithub className="h-4 w-4 fill-gray-400 transition-colors duration-300 hover:fill-black" />
        </CustomLink>
        <CustomLink href={siteMetadata.contact.email}>
          <IconMail className="h-7 w-7 fill-gray-400 stroke-white transition-colors duration-300 hover:fill-black" />
        </CustomLink>
      </div>
      <div className="text-center text-sm font-semibold">
        foxrain.dev | devlog by Hong GunWoo
      </div>
    </footer>
  );
};

export default Footer;
