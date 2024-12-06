'use client';

import { NewsFeed } from '@/components/news-feed';

export default function PoliticsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Politics</h2>
      <NewsFeed category="politics" />
    </div>
  );
}