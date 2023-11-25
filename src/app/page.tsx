import CustomLink from '@components/CustomLink';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="h-full w-full">
      <h2 className="mb-3 border-b-2 border-gray-100 pb-1 text-3xl font-bold ">
        Posts
      </h2>
      <div>
        {posts.map((post) => (
          <CustomLink href={post.url} key={post._id}>
            {post.title}
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
