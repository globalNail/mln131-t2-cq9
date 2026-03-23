import { useLang } from '@/i18n/useLang';

interface SectionCardProps {
  id: string;
  titleVi: string;
  titleEn: string;
  assignment: string;
  reading: string;
  references: string[];
}

export default function SectionCard({
  id,
  titleVi,
  titleEn,
  assignment,
  reading,
  references,
}: SectionCardProps) {
  const t = useLang();

  return (
    <article
      id={id}
      className="scroll-mt-32 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-200"
    >
      {/* Title Section */}
      <div className="px-6 py-8 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{titleVi}</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 italic">{titleEn}</p>
      </div>

      {/* Content Section */}
      <div className="px-6 py-8 space-y-6">
        {/* Assignment */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-6 bg-slate-900 dark:bg-white rounded-sm"></div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              {t.sectionCard.assignment}
            </h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 px-4 py-3 rounded-r">
            {assignment}
          </p>
        </div>

        {/* Reading */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-6 bg-slate-900 dark:bg-white rounded-sm"></div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              {t.sectionCard.reading}
            </h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-500 px-4 py-3 rounded-r">
            {reading}
          </p>
        </div>

        {/* References */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-6 bg-slate-900 dark:bg-white rounded-sm"></div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              {t.sectionCard.references}
            </h3>
          </div>
          <ul className="space-y-2">
            {references.map((reference, index) => (
              <li
                key={index}
                className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed pl-4 relative"
              >
                <span className="absolute -left-1 top-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                {reference}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {t.common.sectionLabel} {id.split('-')[1]}
        </span>
        <button className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
          {t.sectionCard.share}
        </button>
      </div>
    </article>
  );
}
