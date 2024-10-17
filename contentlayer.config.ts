import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import { extractTocHeadings } from 'pliny/mdx-plugins/remark-toc-headings.js';
import rehypePrismPlus from 'rehype-prism-plus';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    thumbnail: { type: 'string' },
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

const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `notes/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (note) => `/note/${note._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'contents',
  contentDirInclude: ['posts', 'notes'],
  documentTypes: [Post, Note],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrismPlus,
        { ignoreMissing: true, defaultLanguage: 'js', showLineNumbers: true },
      ],
    ],
  },
});
