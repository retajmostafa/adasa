export interface IAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface IPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: IAuthor;
  image: string;
  date: string;        
  readTime: string;    
  featured: boolean;
  tags: string[];
}

export interface ICategory {
  name: string;
  count: number;
  color: string;       
}

export interface ISocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
  youtube: string;
}

export interface ISiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: ISocialLinks;
}
export interface IPostsData {
  posts: IPost[];
  categories: ICategory[];
  siteInfo: ISiteInfo;
}