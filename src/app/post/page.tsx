import PostList from '@/containers/post/PostList';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="h-full w-full">
      <PostList />
    </div>
  );
}
