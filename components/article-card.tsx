'use client';

import { Article } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { CalendarIcon, NewspaperIcon } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const slug = encodeURIComponent(article.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/article/${slug}`}>
        <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={article.urlToImage || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167'}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardHeader>
            <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {article.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <NewspaperIcon className="h-4 w-4" />
                <span>{article.source.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}