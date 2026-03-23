"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="site-shell scroll-mt-24 py-14 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-5"
      >
        <p className="accent-pill">{eyebrow}</p>
        <h2 className="text-3xl md:text-5xl leading-tight">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-base md:text-lg text-[color:color-mix(in_oklab,var(--foreground)_76%,white)]">
            {description}
          </p>
        ) : null}
      </motion.div>
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}
