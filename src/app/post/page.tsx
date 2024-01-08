import PostTag from '@/components/PostTag';
import PostList from '@/containers/post/PostList';
import getAllPostTags from '@/utils/getAllPostTags';

export default function Posts({
  searchParams,
}: {
  searchParams: { tag: string | undefined };
}) {
  const postTagsCount = getAllPostTags();
  const activeTag = searchParams.tag;

  return (
    <div className="h-full w-full">
      <div className="mb-7 flex w-full gap-2 overflow-y-auto">
        {Object.keys(postTagsCount).map((tag) => (
          <PostTag
            key={tag}
            tag={tag}
            count={postTagsCount[tag]}
            className={
              activeTag === tag || (!activeTag && tag === 'All')
                ? '!bg-primary !text-white'
                : '!text-gray-500  dark:!text-gray-100 '
            }
          />
        ))}
      </div>
      <PostList activeTag={activeTag} />
    </div>
  );
}
