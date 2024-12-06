import { Article } from '@/lib/types';
import { ArticleCard } from './article-card';

interface ArticleGridProps {
  articles: Article[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <ArticleCard 
          key={article.url} 
          article={article} 
          index={index}
        />
      ))}
    </div>
  );
}