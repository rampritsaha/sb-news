'use client';

import { NewsFeed } from '@/components/news-feed';

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Latest News</h2>
      <NewsFeed category="general" />
    </div>
  );
}