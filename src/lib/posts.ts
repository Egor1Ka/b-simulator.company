import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { PostData } from './types';

const postsDirectory = path.join(process.cwd(), 'posts/en');

export function getSortedPostsData(pageNum: number) {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      ...matterResult.data,
    };
  });

  const sorted = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));

  const postsPerPage = 10;
  const totalPages = Math.ceil(sorted.length / postsPerPage);
  const startIndex = (pageNum - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return { posts: sorted.slice(startIndex, endIndex), totalPages };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      content: matterResult.content,
      ...matterResult.data,
    };
  } catch (error: any) {
    notFound();
    throw Error(error);
  }
}
