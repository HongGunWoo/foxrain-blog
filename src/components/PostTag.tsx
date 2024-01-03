import { HTMLAttributes } from 'react';
import CustomLink from './CustomLink';
import Link from 'next/link';

interface PostTagProps extends HTMLAttributes<HTMLSpanElement> {
  tag: string;
  count?: number;
}

export default function PostTag({
  tag,
  count,
  className,
  ...rest
}: PostTagProps) {
  return (
    <Link
      key={tag}
      href={
        tag === 'All'
          ? { pathname: '/post' }
          : { pathname: '/post', query: { tag } }
      }
      {...rest}
      className={`flex items-center justify-center rounded-xl bg-gray-100 px-3 py-1 text-sm text-secondary transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 ${className}`}
    >
      {tag}
      {count && <span className="ml-1 text-xs text-gray-400">({count})</span>}
    </Link>
  );
}
