'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/i18n/useLang';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useLang();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-bold text-sm">Φ</span>
            </div>
            <span className="hidden sm:inline font-semibold text-slate-900 dark:text-white">
              MLN131
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.header.home}
            </Link>
            <Link
              href="/chapter"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.header.chapter6}
            </Link>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.header.syllabus}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden rounded-md border border-slate-300 dark:border-slate-600 px-2 py-1 text-slate-700 dark:text-slate-200"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={t.header.toggleMenuAria}
          >
            {mobileMenuOpen ? t.header.close : t.header.menu}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700">
            <Link
              href="/"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {t.header.home}
            </Link>
            <Link
              href="/chapter"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {t.header.chapter6}
            </Link>
            <a
              href="#"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {t.header.syllabus}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
