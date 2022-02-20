// Expand these along the way
export type Category = 'Technology'
| 'Music'
| 'Travel'
| 'Opinion';

// Aliased to string for now, maybe later we have defined subcategories?
export type SubCategory = string;

export interface GrayMatterData {
  title: string
  author: string
  excerpt: string
  category: Category
  subCategory: SubCategory
  slug: string
  date: string
}

export interface BlogPost {
  content: string
  data: GrayMatterData
}

export type PostHead = Pick<GrayMatterData,
'title' | 'author' | 'excerpt' | 'date' | 'category' | 'slug' | 'subCategory'>;

export interface Project {
  link: string
  title: string
  subtitle: string
  image: string | undefined
}
