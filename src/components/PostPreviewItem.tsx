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
  const { date, title, url, summary, body, thumbnail } = post;

  return (
    <li>
      <article className={`${detail && 'flex flex-col sm:flex-row'}`}>
        <CustomLink href={url}>
          <Image
            src={thumbnail || '/images/sub-profile.jpeg'}
            width={detail ? 500 : 5000}
            height={detail ? 180 : 1800}
            alt={`${title} image`}
            className={`mb-1 aspect-5/3 w-full rounded-lg object-cover shadow-md ${
              detail && 'sm:min-w-[20rem]'
            }`}
            quality={100}
            priority={true}
          />
        </CustomLink>
        <div
          className={`mt-3 flex flex-col gap-2 sm:justify-between ${
            detail && 'mb-1 mt-[0.15rem] sm:mx-3'
          }`}
        >
          <CustomLink
            href={url}
            className="flex w-fit flex-col sm:justify-between sm:gap-3"
          >
            <h1
              className={`${
                detail ? 'text-xl' : 'text-lg'
              } break-keep font-semibold leading-5`}
            >
              {title}
            </h1>
          </CustomLink>
          {detail && (
            <p className="line-clamp-3 overflow-hidden text-ellipsis">
              {summary || body.raw}
            </p>
          )}
          {detail && (
            <div className="my-1 flex gap-2">
              {post.tags.map((tag) => (
                <PostTag key={tag} tag={tag} />
              ))}
            </div>
          )}
          <time
            dateTime={date}
            className="ml-[1px] block text-xs text-gray-300"
          >
            {format(new Date(date), 'yyyy-MM-dd')}
          </time>
        </div>
      </article>
    </li>
  );
}
