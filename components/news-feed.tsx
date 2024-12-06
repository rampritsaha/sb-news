'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNewsByCategory } from '@/lib/api';
import { Category } from '@/lib/types';
import { ArticleGrid } from './article-grid';
import { Skeleton } from '@/components/ui/skeleton';

interface NewsFeedProps {
  category: Category;
}

export function NewsFeed({ category }: NewsFeedProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['news', category],
    queryFn: () => fetchNewsByCategory(category),
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Failed to load news. Please try again later.</p>
      </div>
    );
  }

  return <ArticleGrid articles={data?.articles || []} />;
}