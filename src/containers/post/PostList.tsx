import PostPreviewItem from '@/components/PostPreviewItem';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function PostList({
  activeTag,
}: {
  activeTag: string | undefined;
}) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <ul className="space-y-7">
      {posts.map((post) => {
        if (activeTag && !post.tags.includes(activeTag)) return;

        return <PostPreviewItem key={post._id} post={post} detail />;
      })}
    </ul>
  );
}
