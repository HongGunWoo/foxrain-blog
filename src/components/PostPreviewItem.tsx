import Image from 'next/image';
import CustomLink from './CustomLink';
import type { Post } from '.contentlayer/generated/types';
import { format } from 'date-fns';

interface PostPreviewItemProps {
  post: Post;
  detail?: boolean;
}

export default function PostPreviewItem({
  post,
  detail = false,
}: PostPreviewItemProps) {
  const { date, title, url, summary } = post;

  return (
    <li className="group">
      <CustomLink href={url}>
        <article className={`${detail && 'flex flex-col sm:flex-row '}`}>
          <Image
            src="https://picsum.photos/1000/1000"
            width={detail ? 300 : 5000}
            height={detail ? 180 : 3000}
            alt={`${title} image`}
            className="mb-1 aspect-5/3 w-full rounded-lg object-cover sm:max-w-xs"
            priority={true}
          />
          <div
            className={`${
              detail &&
              'mb-2 flex flex-col gap-1 sm:mx-3 sm:justify-between sm:gap-3'
            }`}
          >
            <h3
              className={`${
                detail ? 'text-2xl' : 'text-xl'
              } line-clamp-1 font-semibold transition-colors group-hover:text-primary`}
            >
              {title}
            </h3>
            {detail && (
              <p className="line-clamp-4 overflow-hidden text-ellipsis group-hover:text-secondary">
                {summary}
              </p>
            )}
            <time
              dateTime={date}
              className="block text-xs text-gray-500 transition-colors group-hover:text-secondary"
            >
              {format(new Date(date), 'yyyy-MM-dd')}
            </time>
          </div>
        </article>
      </CustomLink>
    </li>
  );
}
