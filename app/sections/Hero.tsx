"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { HERO_FEEDBACK, SECTION_IDS } from "@/app/features/landing/content";
import type { AnswerChoice } from "@/app/features/landing/types";
import { useLang } from "@/i18n/useLang";

function scrollToContent() {
  document.getElementById(SECTION_IDS.misconceptions)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Hero() {
  const [choice, setChoice] = useState<AnswerChoice | null>(null);
  const t = useLang();

  return (
    <header className="site-shell pt-12 md:pt-20 pb-10 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-surface rounded-[2rem] p-8 md:p-14"
      >
        <p className="accent-pill mb-6">{t.hero.badge}</p>
        <h1 className="text-4xl md:text-7xl leading-[1.05] max-w-4xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 text-base md:text-xl max-w-3xl text-[color:color-mix(in_oklab,var(--foreground)_77%,white)]">
          {t.hero.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
          <Button
            variant="primary"
            onClick={() => {
              setChoice("yes");
              scrollToContent();
            }}
          >
            {t.hero.yes}
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setChoice("no");
              scrollToContent();
            }}
          >
            {t.hero.no}
          </Button>
        </div>

        <motion.p
          key={choice ?? "none"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-5 text-sm md:text-base text-[color:color-mix(in_oklab,var(--foreground)_70%,white)]"
        >
          {choice ? HERO_FEEDBACK[choice] : HERO_FEEDBACK.idle}
        </motion.p>
      </motion.div>
    </header>
  );
}
