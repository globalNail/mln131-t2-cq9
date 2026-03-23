'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/i18n/useLang';

interface NavItem {
  id: string;
  title: string;
  href: string;
  level: number;
}

export default function Sidebar() {
  const pathname = usePathname();
  const isChapterPage = pathname === '/chapter';
  const t = useLang();
  const navItems: NavItem[] = [...t.sidebar.navItems];

  if (!isChapterPage) {
    return null;
  }

  return (
    <aside className="hidden lg:block w-64 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-6">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-4">
          {t.sidebar.tableOfContents}
        </h3>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`
                block px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${item.level === 2 ? 'pl-6' : 'pl-3'}
                text-slate-600 dark:text-slate-300
                hover:text-slate-900 dark:hover:text-white
                hover:bg-slate-200 dark:hover:bg-slate-700
              `}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Progress Indicator */}
      <div className="px-6 py-8 border-t border-slate-200 dark:border-slate-700">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {t.sidebar.readingProgress}
          </h3>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{t.sidebar.readingProgressPercent}</span>
        </div>
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full w-[45%] bg-slate-900 dark:bg-white rounded-full transition-all duration-500"></div>
        </div>
      </div>
    </aside>
  );
}
