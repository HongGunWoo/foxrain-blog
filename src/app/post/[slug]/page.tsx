import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format } from 'date-fns';
import CustomLink from '@/components/CustomLink';

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <CustomLink href={href as string}>{children}</CustomLink>
  ),
};

interface Toc {
  url: string;
  value: string;
  depth: number;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="relative">
      <article className="prose">
        <div className="mb-8 space-y-6">
          <h1 className="mb-2 text-5xl">{post.title}</h1>
          <time dateTime={post.date} className="text-xs text-gray-500">
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </time>
        </div>
        <MDXContent components={mdxComponents} />
      </article>
      <aside className="fixed right-5 top-0">
        <nav>
          <ul>
            {post.toc.map((item: Toc) => (
              <li key={item.url}>
                <CustomLink href={item.url}>{item.value}</CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
