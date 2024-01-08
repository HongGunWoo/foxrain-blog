import { allPosts } from 'contentlayer/generated';

const tagsCount: Record<string, number> = {};

const getAllPostTags = () => {
  if (Object.keys(tagsCount).length) return tagsCount;

  tagsCount['All'] = allPosts.length;

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagsCount[tag]) {
        tagsCount[tag]++;
      } else {
        tagsCount[tag] = 1;
      }
    });
  });

  return tagsCount;
};

export default getAllPostTags;
