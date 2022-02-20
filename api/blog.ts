import matter from 'gray-matter';
import 'dotenv/config';
import fs from 'fs';
import path from 'path/posix';
import {
  Category, BlogPost, PostHead,
} from './types';

/*
  * So currently, while our blog is small, we can afford to hold data in our memory. So,
  * we shall. Once this becomes too much, we can defer to having a cache or just getting
  * posts from the disk when requested.
  */
let POSTS_MAP: BlogPost[];
let INITIALIZED = false;

async function initBlogPost() {
  if (INITIALIZED) return POSTS_MAP;
  if (!process.env.BLOGPOSTS_PATH) {
    return [];
  }
  const postsPath: string = process.env.BLOGPOSTS_PATH;
  const postFiles = fs.readdirSync(postsPath).filter((file: string) => file.endsWith('.mdx'));

  POSTS_MAP = postFiles.map(
    (file: string): BlogPost => {
      const parsed = matter(fs.readFileSync(path.join(postsPath, file)));
      const { data } = parsed;
      const date = new Date(data.date);
      return {
        content: parsed.content,
        data: {
          title: data.title,
          author: data.author,
          excerpt: data.excerpt,
          category: data.category,
          subCategory: data.subcategory,
          slug: data.slug,
          date: date.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        },
      };
    },
  );

  INITIALIZED = true;

  return POSTS_MAP;
}

const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => POSTS_MAP.find(
  (f) => f.data.slug === slug,
);

const getPostsByCategory = async (category: Category):
Promise<BlogPost[] | undefined> => POSTS_MAP.filter(
  (f) => f.data.category === category,
);

const getAllSlugs = async (): Promise<string[] | undefined> => POSTS_MAP.map((f) => f.data.slug);

const getPostHeadsByCategory = async (category: Category):
Promise<PostHead[] | undefined> => {
  const posts = await getPostsByCategory(category);
  if (!posts) return undefined;
  return posts.map((f) => ({
    title: f.data.title,
    author: f.data.author,
    date: f.data.date,
    category: f.data.category,
    subCategory: f.data.subCategory,
    excerpt: f.data.excerpt,
    slug: f.data.slug,
  }));
};

const getAllPostHeads = async (): Promise<PostHead[]> => POSTS_MAP.map((f) => ({
  title: f.data.title,
  author: f.data.author,
  date: f.data.date,
  category: f.data.category,
  subCategory: f.data.subCategory,
  excerpt: f.data.excerpt,
  slug: f.data.slug,
}));

export {
  initBlogPost,
  getPostBySlug,
  getPostsByCategory,
  getAllSlugs,
  getPostHeadsByCategory,
  getAllPostHeads,
};
