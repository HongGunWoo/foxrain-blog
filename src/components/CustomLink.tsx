import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export default function CustomLink({
  href,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href && href.startsWith('/')) {
    return <Link href={href} {...rest} />;
  }

  if (href && href.startsWith('#')) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
}
