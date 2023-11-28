import siteMetadata from '@/constants/siteMetadata';
import CustomLink from './CustomLink';
import { IconGithub, IconMail } from 'public/svgs';

export default function ContactList() {
  return (
    <>
      <CustomLink href={siteMetadata.contact.github}>
        <IconGithub className="h-4 w-4 fill-gray-400 transition-colors duration-300 hover:fill-black" />
      </CustomLink>
      <CustomLink href={siteMetadata.contact.email}>
        <IconMail className="h-7 w-7 fill-gray-400 stroke-white transition-colors duration-300 hover:fill-black" />
      </CustomLink>
    </>
  );
}
