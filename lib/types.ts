export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  author?: string;
  content?: string;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export type Category = 'general' | 'politics' | 'business' | 'sports';