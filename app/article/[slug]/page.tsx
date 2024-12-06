'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchArticleBySlug } from '@/lib/api';
import { formatDistanceToNow } from 'date-fns';
import { CalendarIcon, NewspaperIcon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

export default function ArticlePage() {
  const { slug } = useParams();
  const { data: article, isLoading } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => fetchArticleBySlug(slug as string),
  });

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-[400px] w-full" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Article not found.</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="mb-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold">{article.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <NewspaperIcon className="h-4 w-4" />
              <span>{article.source.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>
                {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
              </span>
            </div>
          </div>
        </div>

        {article.urlToImage && (
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src={article.urlToImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {article.content && (
            <p className="text-lg leading-relaxed">{article.content}</p>
          )}
          <p className="text-lg leading-relaxed">{article.description}</p>
          
          {article.author && (
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Written by {article.author}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}