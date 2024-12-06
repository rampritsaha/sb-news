'use client';

import { NewsFeed } from '@/components/news-feed';

export default function BusinessPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Business</h2>
      <NewsFeed category="business" />
    </div>
  );
}