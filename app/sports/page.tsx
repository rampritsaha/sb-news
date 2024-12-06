'use client';

import { NewsFeed } from '@/components/news-feed';

export default function SportsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Sports</h2>
      <NewsFeed category="sports" />
    </div>
  );
}