"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { EXPLANATION_POINTS, SECTION_IDS } from "@/app/features/landing/content";
import { useLang } from "@/i18n/useLang";

export default function Explanation() {
  const t = useLang();

  return (
    <SectionWrapper
      id={SECTION_IDS.explanation}
      eyebrow={t.explanation.eyebrow}
      title={t.explanation.title}
      description={t.explanation.description}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {EXPLANATION_POINTS.map((point, index) => (
          <motion.article
            key={point.icon}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="glass-surface rounded-3xl p-6"
          >
            <p className="text-sm font-semibold tracking-widest text-[var(--accent)]">{point.icon}</p>
            <h3 className="text-xl mt-2 mb-3">{point.title}</h3>
            <p className="text-sm md:text-base text-[color:color-mix(in_oklab,var(--foreground)_76%,white)]">
              {point.text}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
