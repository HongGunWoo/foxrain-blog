import Image from 'next/image';
import CustomLink from './CustomLink';
import type { Post } from '.contentlayer/generated/types';
import { format } from 'date-fns';

interface PostPreviewItemProps {
  post: Post;
}

export default function PostPreviewItem({ post }: PostPreviewItemProps) {
  const { date, title, url } = post;

  return (
    <li className="group">
      <CustomLink href={url}>
        <article>
          <Image
            src="https://picsum.photos/1000/1000"
            width={10000}
            height={1000}
            alt="dd"
            className="mb-1 aspect-5/3 rounded-lg object-cover"
            priority={true}
          />
          <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <time
            dateTime={date}
            className="block text-xs text-gray-500 transition-colors group-hover:text-secondary"
          >
            {format(new Date(date), 'yyyy-MM-dd')}
          </time>
        </article>
      </CustomLink>
    </li>
  );
}
