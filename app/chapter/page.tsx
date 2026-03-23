import Link from 'next/link';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import SectionCard from '../components/SectionCard';
import { vi } from '@/i18n/vi';

export const metadata = {
  title: vi.metadata.chapterTitle,
  description: vi.metadata.chapterDescription,
};

export default function ChapterPage() {
  const t = vi;
  const sections = t.chapter.sections.map((section) => ({
    id: section.id,
    titleVi: section.titleVi,
    titleEn: section.titleEn,
    assignment: section.assignment,
    reading: section.reading,
    references: [...section.references],
  }));

  return (
    <Layout>
      <div className="space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: t.chapter.breadcrumb.home, href: '/' },
            { label: t.chapter.breadcrumb.chapter6, href: '/chapter' },
          ]}
        />

        {/* Page Header */}
        <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-700">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
              {t.chapter.badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            {t.chapter.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            {t.chapter.description}
          </p>
        </div>

        {/* Introduction Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-r-lg">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-900 dark:text-blue-300 mb-2">
            {t.chapter.overviewTitle}
          </h2>
          <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
            {t.chapter.overviewText}
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white mb-3">
              {t.chapter.keyConceptsTitle}
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {t.chapter.keyConcepts.map((concept) => (
                <li key={concept} className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  {concept}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white mb-3">
              {t.chapter.timelineTitle}
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {t.chapter.timelineItems.map((timelineItem) => (
                <li key={timelineItem} className="flex gap-2">
                  <span className="text-slate-400">→</span>
                  {timelineItem}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.chapter.sectionContentTitle}</h2>
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              id={section.id}
              titleVi={section.titleVi}
              titleEn={section.titleEn}
              assignment={section.assignment}
              reading={section.reading}
              references={section.references}
            />
          ))}
        </div>

        {/* Discussion Section */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {t.chapter.discussionTitle}
          </h2>
          <ol className="space-y-4">
            {t.chapter.discussionQuestions.map((question, index) => (
              <li key={question} className="flex gap-4">
                <span className="text-slate-900 dark:text-white font-semibold flex-shrink-0">{index + 1}.</span>
                <p className="text-slate-700 dark:text-slate-300">{question}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t border-slate-200 dark:border-slate-700">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.chapter.backToHome}
          </Link>
          <a
            href="#"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {t.chapter.nextChapter}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
}
