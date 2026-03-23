"use client";

import { motion } from "framer-motion";
import FlipCard from "../components/FlipCard";
import SectionWrapper from "../components/SectionWrapper";
import { MISCONCEPTIONS, SECTION_IDS } from "@/app/features/landing/content";
import { useLang } from "@/i18n/useLang";

export default function Misconceptions() {
  const t = useLang();

  return (
    <SectionWrapper
      id={SECTION_IDS.misconceptions}
      eyebrow={t.misconceptions.eyebrow}
      title={t.misconceptions.title}
      description={t.misconceptions.description}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {MISCONCEPTIONS.map((item, index) => (
          <motion.div
            key={item.front}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
          >
            <FlipCard front={item.front} back={item.back} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
