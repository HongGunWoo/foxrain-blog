import siteMetadata from '@/constants/siteMetadata';
import CustomLink from './CustomLink';
import { IconGithub, IconMail } from 'public/svgs';

export default function ContactList() {
  return (
    <>
      <CustomLink href={siteMetadata.contact.github}>
        <IconGithub className="h-4 w-4 fill-gray-300 transition-colors hover:fill-gray-400" />
      </CustomLink>
      <CustomLink href={siteMetadata.contact.email}>
        <IconMail className="h-7 w-7 fill-gray-300 stroke-white transition-colors hover:fill-gray-400 dark:stroke-black" />
      </CustomLink>
    </>
  );
}
