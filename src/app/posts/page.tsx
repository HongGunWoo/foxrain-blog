import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export default function Post() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div>
      {posts.map((post) => (
        <Link href={post.url} key={post._id}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
