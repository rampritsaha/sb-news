'use client';

import { Newspaper, Search, Bell, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Newspaper className="h-8 w-8" />
            <h1 className="text-2xl font-bold hidden sm:block">NextNews</h1>
          </div>

          <AnimatePresence>
            {isSearchOpen ? (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                exit={{ opacity: 0, width: 0 }}
                className="flex-1 max-w-md"
              >
                <Input
                  type="search"
                  placeholder="Search news..."
                  className="w-full"
                  autoFocus
                />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="shrink-0"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="shrink-0">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}