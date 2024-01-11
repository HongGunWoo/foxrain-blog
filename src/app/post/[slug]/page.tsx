import '@/styles/prism.css';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format } from 'date-fns';
import CustomLink from '@/components/CustomLink';
import TocSide from '@/containers/post/slug/TocSide';
import Giscus from '@/components/Giscus';
import Image from 'next/image';

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <CustomLink
      href={href as string}
      className="rounded-md p-[0.2rem] decoration-gray-100 underline-offset-4 after:text-xs after:content-['_↗'] hover:bg-gray-100 dark:decoration-gray-300 dark:hover:bg-gray-300"
    >
      {children}
    </CustomLink>
  ),
};

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
  const { title, date, toc, thumbnail } = post;

  return (
    <article className="prose relative dark:prose-invert prose-img:mx-auto">
      <div className="mb-8 space-y-6">
        <h1 className="mb-2 text-4xl">{title}</h1>
        <time dateTime={date} className="text-sm text-gray-300">
          {format(new Date(date), 'yyyy-MM-dd')}
        </time>
        {/* {
          thumbnail && (

          )
        } */}
        <Image
          src={thumbnail || '/images/profile.jpeg'}
          width={500}
          height={180}
          alt={`${title} image`}
          className="mb-1 aspect-[5/3] w-full rounded-lg object-cover"
        />
      </div>
      <TocSide toc={toc} />
      <MDXContent components={mdxComponents} />
      <Giscus />
    </article>
  );
}
