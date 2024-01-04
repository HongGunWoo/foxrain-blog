import PostPreviewItem from '@/components/PostPreviewItem';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function LatestPostList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div>
      <h2 className="mb-3 border-b-2 border-gray-100 pb-1 text-3xl font-bold ">
        Latest Posts
      </h2>
      <ul className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5">
        {posts.map((post) => (
          <PostPreviewItem key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
}
