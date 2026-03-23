"use client";

import { motion } from "framer-motion";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";
import {
  POLICY_EXAMPLES,
  RELIGION_STATS,
  SECTION_IDS,
} from "@/app/features/landing/content";
import { useLang } from "@/i18n/useLang";

export default function VietnamPolicy() {
  const t = useLang();

  return (
    <SectionWrapper
      id={SECTION_IDS.policy}
      eyebrow={t.policy.eyebrow}
      title={t.policy.title}
      description={t.policy.description}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {RELIGION_STATS.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="glass-surface rounded-2xl p-5"
          >
            <p className="text-3xl md:text-4xl font-semibold mb-1">{item.value}</p>
            <p className="text-sm text-[color:color-mix(in_oklab,var(--foreground)_72%,white)]">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 mt-6">
        <Card title={t.policy.directionTitle}>
          <p>
            {t.policy.directionText}
          </p>
        </Card>
        <Card title={t.policy.lifeTitle}>
          <ul className="space-y-3 text-sm md:text-base">
            {POLICY_EXAMPLES.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}
