import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';

interface MetaData {
  title: string;
  description: string;
  date: string;
}

export async function getSortedPostList() {
  // Read filenames of all the blog
  const blogNames = await readdir('posts');
  // Get blog meta info from filenames
  const blogList = await Promise.all(
    blogNames.map(async blogName => {
      // Read Blog content from blog name
      const content = await readFile(`posts/${blogName}`, 'utf-8');
      // Get metadata from blog content
      const result = matter(content);
      const meta = result.data as MetaData;
      return {
        id: blogName,
        ...meta,
      };
    })
  );
  return blogList.toSorted((a, b) => (a.date < b.date ? 1 : -1));
}
