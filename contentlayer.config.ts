import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import { extractTocHeadings } from 'pliny/mdx-plugins/remark-toc-headings.js';
import rehypePrismPlus from 'rehype-prism-plus';

const getFileNameWithoutExtension = (fileName: string) =>
  fileName.replace('.mdx', '');

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `post/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    thumbnail: { type: 'string' },
  },
  computedFields: {
    fileName: {
      type: 'string',
      resolve: (post) => getFileNameWithoutExtension(post._raw.sourceFileName),
    },
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.sourceFileDir}`,
    },
    toc: {
      type: 'list',
      resolve: (post) => extractTocHeadings(post.body.raw),
    },
  },
}));

const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `note/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    fileName: {
      type: 'string',
      resolve: (post) => getFileNameWithoutExtension(post._raw.sourceFileName),
    },
    url: {
      type: 'string',
      resolve: (note) => `/note/${note._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'public/contents',
  contentDirInclude: ['post', 'note'],
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
