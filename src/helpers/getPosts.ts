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

function getSortedPostsData(startIndex: number, endIndex: number): PostData[] {
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

  return sorted.slice(startIndex, endIndex);
}

export {
  getSortedPostsData,
};
