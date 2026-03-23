import Link from 'next/link';
import Layout from './components/Layout';

export const metadata = {
  title: 'MLN131 - Marxism-Leninism Philosophy',
  description: 'Course materials and resources for MLN131: Marxism-Leninism Philosophy',
};

export default function Home() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full">
              Course Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            MLN131: Marxism-Leninism Philosophy
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            A comprehensive exploration of Marxist-Leninist philosophical thought, examining foundational concepts, historical contexts, and contemporary applications in socialist transitions.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">6</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Chapters</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">45+</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Core Topics</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">120</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Reading Pages</p>
          </div>
        </section>

        {/* Featured Chapter */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured Chapter</h2>
          <div className="bg-gradient-to-br from-slate-900 dark:from-slate-700 to-slate-700 dark:to-slate-800 rounded-lg p-8 text-white">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 rounded-full">
                Chapter 6
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Ethnicity and Religion in the Transition to Socialism
            </h3>
            <p className="text-slate-100 mb-6 leading-relaxed max-w-2xl">
              Examine the role of religious and ethnic dynamics in socialist transitions, with particular focus on the Marxist-Leninist approach to religion and contemporary policies in Vietnam.
            </p>
            <Link
              href="/chapter"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Explore Chapter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Course Structure */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Course Structure</h2>
          <div className="space-y-4">
            {[
              { num: '1', title: 'Foundations of Marxism-Leninism', topics: 'Historical development, key concepts' },
              { num: '2', title: 'Dialectical Materialism', topics: 'Methodology, theory of contradiction' },
              { num: '3', title: 'Historical Materialism', topics: 'Social development, class struggle' },
              { num: '4', title: 'State and Revolution', topics: 'Revolutionary theory, socialist state' },
              { num: '5', title: 'Imperialism and National Liberation', topics: 'International relations, anti-colonialism' },
              { num: '6', title: 'Religion and Ethnicity in Socialism', topics: 'Cultural policies, contemporary applications' },
            ].map((chapter) => (
              <div
                key={chapter.num}
                className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center">
                  <span className="text-white dark:text-slate-900 font-bold text-sm">{chapter.num}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{chapter.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{chapter.topics}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Learning Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Understand the historical development and core principles of Marxist-Leninist philosophy',
              'Analyze dialectical and historical materialism as frameworks for social analysis',
              'Examine the theory and practice of socialist revolution and state building',
              'Explore contemporary applications of Marxism-Leninism in modern contexts',
            ].map((outcome, index) => (
              <div key={index} className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-slate-700 dark:text-slate-300">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center py-12 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Begin?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Start with Chapter 6 to explore the intersection of religion, ethnicity, and socialist transformation.
          </p>
          <Link
            href="/chapter"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Start Reading
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
