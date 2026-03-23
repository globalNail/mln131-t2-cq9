import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import SectionCard from '../components/SectionCard';

export const metadata = {
  title: 'Chapter 6: Ethnicity and Religion - MLN131',
  description: 'Explore ethnicity and religion in the transition to socialism with Marxist-Leninist perspectives.',
};

export default function ChapterPage() {
  const sections = [
    {
      id: 'section-1',
      titleVi: 'Chủ nghĩa Mác - Lênin về tôn giáo',
      titleEn: 'Marxism-Leninism on religion',
      assignment: '(Assignment: Presentation and creation of a creative product)',
      reading: 'Đọc trước giáo trình chủ nghĩa xã hội khoa học (2021) từ trang 223 đến 228.',
      references: [
        'Giáo trình Triết học Mác - Lênin (2019)',
        'Giáo trình Triết học Mác - Lênin (2021)',
        'Lecture outline',
      ],
    },
    {
      id: 'section-2',
      titleVi: 'Tôn giáo ở Việt Nam và chính sách tôn giáo hiện nay',
      titleEn: 'Religion in Vietnam and current policies',
      assignment: '(Assignment: Presentation and creation of a creative product)',
      reading: 'Đọc từ trang 228 đến 237.',
      references: [
        'Giáo trình Triết học Mác - Lênin (2019)',
        'Giáo trình Triết học Mác - Lênin (2021)',
        'Lecture outline',
      ],
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Chapter 6', href: '/chapter' },
          ]}
        />

        {/* Page Header */}
        <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-700">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
              Chapter 6
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Ethnicity and Religion in the Transition to Socialism
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Explore the complex relationship between religious beliefs, ethnic identities, and socialist transitions through a Marxist-Leninist lens. This chapter examines theoretical foundations and contemporary policy applications, particularly in Vietnam.
          </p>
        </div>

        {/* Introduction Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-r-lg">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-900 dark:text-blue-300 mb-2">
            Chapter Overview
          </h2>
          <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
            This chapter is divided into two major sections that explore how Marxist-Leninist theory addresses religion and how these theories are applied in contemporary Vietnam. You will examine the philosophical foundations of socialist approaches to religious practice and analyze real-world policy implementations.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white mb-3">
              Key Concepts
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="text-slate-400">•</span>
                Marxist analysis of religion
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400">•</span>
                Religion in socialist construction
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400">•</span>
                Ethnic diversity and socialism
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400">•</span>
                Policy and practice in Vietnam
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white mb-3">
              Chapter Timeline
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="text-slate-400">→</span>
                Section 1: Pages 223-228
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400">→</span>
                Section 2: Pages 228-237
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400">→</span>
                Readings: 2-3 hours
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400">→</span>
                Assignment: 1-2 weeks
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Section Content</h2>
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
            Discussion Questions
          </h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="text-slate-900 dark:text-white font-semibold flex-shrink-0">1.</span>
              <p className="text-slate-700 dark:text-slate-300">
                How does Marxist-Leninist theory characterize the relationship between religion and class consciousness? What implications does this have for socialist movements?
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-900 dark:text-white font-semibold flex-shrink-0">2.</span>
              <p className="text-slate-700 dark:text-slate-300">
                Examine Vietnam's religious policies through the lens of Marxist-Leninist principles. How has the Communist Party balanced state control with religious freedom?
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-900 dark:text-white font-semibold flex-shrink-0">3.</span>
              <p className="text-slate-700 dark:text-slate-300">
                What role do ethnic minorities and their religious practices play in socialist construction? How does this relate to the broader theory of national liberation?
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-900 dark:text-white font-semibold flex-shrink-0">4.</span>
              <p className="text-slate-700 dark:text-slate-300">
                Compare Marxist-Leninist approaches to religion with other theoretical perspectives. What are the strengths and limitations of each approach?
              </p>
            </li>
          </ol>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t border-slate-200 dark:border-slate-700">
          <a
            href="/"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Next Chapter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
}
