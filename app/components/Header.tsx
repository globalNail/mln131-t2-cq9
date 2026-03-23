'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

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
              Home
            </Link>
            <Link
              href="/chapter"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Chapter 6
            </Link>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Syllabus
            </a>
          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700">
            <Link
              href="/"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/chapter"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              Chapter 6
            </Link>
            <a
              href="#"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              Syllabus
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
