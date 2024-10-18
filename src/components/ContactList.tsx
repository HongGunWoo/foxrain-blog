import siteMetadata from '@/constants/siteMetadata';
import CustomLink from './CustomLink';
import { IconGithub } from 'public/svgs';

export default function ContactList() {
  return (
    <>
      <CustomLink href={siteMetadata.contact.github}>
        <IconGithub className="h-5 w-5 fill-gray-300 transition-colors hover:fill-gray-400" />
      </CustomLink>
    </>
  );
}
