"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/app/features/landing/content";
import { useLang } from "@/i18n/useLang";

export default function Conclusion() {
  const t = useLang();

  return (
    <section id={SECTION_IDS.conclusion} className="site-shell py-14 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="glass-surface rounded-[2rem] px-6 py-14 md:p-16 text-center"
      >
        <p className="accent-pill mx-auto mb-6">{t.conclusion.badge}</p>
        <h2 className="text-3xl md:text-6xl leading-[1.08] max-w-4xl mx-auto">
          {t.conclusion.title}
        </h2>
      </motion.div>
    </section>
  );
}
