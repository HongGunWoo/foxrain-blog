import PostPreviewItem from '@/components/PostPreviewItem';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function LatestPostList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <ul className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-3">
      {posts.map((post) => (
        <PostPreviewItem key={post._id} post={post} />
      ))}
    </ul>
  );
}
