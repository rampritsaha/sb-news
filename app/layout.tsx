import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavigationTabs } from '@/components/ui/navigation-tabs';
import { Header } from '@/components/header';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextNews - Your Daily Source',
  description: 'Stay informed with the latest news from around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <NavigationTabs />
            <main className="flex-1 container mx-auto px-4 py-8 mb-16 md:mb-0">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}