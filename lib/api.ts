import axios from 'axios';
import { NewsResponse, Category, Article } from './types';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://newsapi.org/v2';

export const newsApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
    language: 'en',
  },
});

export async function fetchNewsByCategory(category: Category): Promise<NewsResponse> {
  const response = await newsApi.get<NewsResponse>('/top-headlines', {
    params: {
      category: category === 'general' ? '' : category,
      pageSize: 12,
    },
  });
  return response.data;
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await newsApi.get<NewsResponse>('/everything', {
      params: {
        q: decodeURIComponent(slug),
        pageSize: 1,
      },
    });
    return response.data.articles[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}