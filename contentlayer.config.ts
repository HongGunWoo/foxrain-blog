import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import { extractTocHeadings } from 'pliny/mdx-plugins/remark-toc-headings.js';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/post/${post._raw.flattenedPath}`,
    },
    toc: {
      type: 'list',
      resolve: (post) => extractTocHeadings(post.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
});
