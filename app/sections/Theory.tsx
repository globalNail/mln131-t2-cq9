"use client";

import { motion } from "framer-motion";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";
import { SECTION_IDS, THEORY_CONTENT } from "@/app/features/landing/content";
import { useLang } from "@/i18n/useLang";

export default function Theory() {
  const t = useLang();

  return (
    <SectionWrapper
      id={SECTION_IDS.theory}
      eyebrow={t.theory.eyebrow}
      title={t.theory.title}
      description={t.theory.description}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-surface rounded-3xl p-7 md:p-10"
        >
          <p className="text-2xl md:text-3xl leading-tight text-[color:color-mix(in_oklab,var(--foreground)_92%,white)]">
            &quot;{THEORY_CONTENT.quote}&quot;
          </p>
          <footer className="mt-4 text-sm text-[color:color-mix(in_oklab,var(--foreground)_70%,white)]">
            {THEORY_CONTENT.quoteSource}
          </footer>
        </motion.blockquote>

        <div className="space-y-5">
          <Card title={t.theory.coreIdeasTitle}>
            <ul className="space-y-3 text-sm md:text-base">
              {THEORY_CONTENT.coreIdeas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <Card title={t.theory.misunderstandingTitle}>
          <p>&quot;{THEORY_CONTENT.misunderstanding}&quot;</p>
        </Card>
        <Card title={t.theory.interpretationTitle}>
          <p>{THEORY_CONTENT.interpretation}</p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
