import { readdir } from "fs/promises";

import Post from "@/types/post";

export const getPosts = async (directory: string): Promise<Post[]> => {
  const slugs = (
    await readdir(`./src/app/${directory}`, {
      withFileTypes: true,
    })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../app/${directory}/${name}/page.mdx`);
      const newSlug = directory + "/" + name;
      return { slug: newSlug, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  return posts;
};
