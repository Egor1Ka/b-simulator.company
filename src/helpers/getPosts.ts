/* eslint-disable import/prefer-default-export */
import * as fs from 'fs';
import * as path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';

export interface PostData {
  id: string;
  date: string;
  tags: string[]
  [key: string]: any;
}

const postsDirectory: string = path.join(process.cwd(), 'posts/en');

function getSortedPostsData(page: number): { posts: PostData[]; totalPages: number } {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.md$/, '');
    const fullPath: string = path.join(postsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    const matterResult: GrayMatterFile<string> = matter(fileContents);

    return {
      id,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      ...matterResult.data,
    };
  });

  const sorted = allPostsData.sort((a: PostData, b: PostData) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });

  const postsPerPage = 10;
  const totalPages = Math.ceil(sorted.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return {
    posts: sorted.slice(startIndex, endIndex),
    totalPages,
  };
}

export { getSortedPostsData };
