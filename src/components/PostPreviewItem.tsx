import Image from 'next/image';
import CustomLink from './CustomLink';
import type { Post } from '.contentlayer/generated/types';
import { format } from 'date-fns';
import PostTag from './PostTag';

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
    <li>
      <article className={`${detail && 'flex flex-col sm:flex-row'}`}>
        <CustomLink href={url}>
          <Image
            src="https://picsum.photos/1000/1000"
            width={detail ? 500 : 5000}
            height={detail ? 180 : 3000}
            alt={`${title} image`}
            className={`mb-1 aspect-5/3 w-full rounded-lg object-cover ${
              detail && 'sm:min-w-[20rem]'
            }`}
            priority={true}
          />
        </CustomLink>
        <div
          className={`${
            detail &&
            'mb-2 flex flex-col gap-1 sm:mx-3 sm:justify-between sm:gap-3'
          }`}
        >
          <CustomLink
            href={url}
            className="flex w-fit flex-col sm:justify-between sm:gap-3"
          >
            <h1
              className={`${
                detail ? 'text-2xl' : 'text-xl'
              } line-clamp-1 font-semibold `}
            >
              {title}
            </h1>
          </CustomLink>
          {detail && (
            <p className="line-clamp-3 overflow-hidden text-ellipsis">
              {summary}
            </p>
          )}
          {detail && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <PostTag key={tag} tag={tag} />
              ))}
            </div>
          )}
          <time dateTime={date} className="block text-xs text-gray-300">
            {format(new Date(date), 'yyyy-MM-dd')}
          </time>
        </div>
      </article>
    </li>
  );
}
