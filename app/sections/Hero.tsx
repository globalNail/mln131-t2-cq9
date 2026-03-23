"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import {
  LANDING_SECTION_IMAGES,
  SECTION_IDS,
} from "@/app/features/landing/content";
import { useLang } from "@/i18n/useLang";

function scrollToContent() {
  document.getElementById(SECTION_IDS.misconceptions)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Hero() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const t = useLang();

  useEffect(() => {
    if (!answer) {
      return;
    }

    const timeout = window.setTimeout(() => {
      scrollToContent();
    }, 1200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [answer]);

  return (
    <header
      id={SECTION_IDS.hero}
      className="mx-auto w-[calc(100%-2rem)] max-w-[1300px] scroll-mt-24 pb-10 pt-24 md:pb-16 md:pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-surface rounded-[2rem] p-8 md:p-14"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="accent-pill mb-6">{t.hero.badge}</p>
            <h1 className="max-w-[650px] text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-base md:text-xl max-w-3xl text-[color:color-mix(in_oklab,var(--foreground)_77%,white)]">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <Button
                variant={answer === "yes" ? "primary" : "ghost"}
                onClick={() => setAnswer("yes")}
                className={answer === "yes" ? "bg-green-600 text-white" : "opacity-85"}
              >
                {t.hero.yes}
              </Button>
              <Button
                variant={answer === "no" ? "primary" : "ghost"}
                onClick={() => setAnswer("no")}
                className={answer === "no" ? "bg-green-600 text-white" : "opacity-85"}
              >
                {t.hero.no}
              </Button>
            </div>

            {answer ? (
              <motion.div
                key={answer}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-5 space-y-2 transition-all duration-300"
              >
                <p className="text-sm md:text-base text-[color:color-mix(in_oklab,var(--foreground)_70%,white)]">
                  {answer === "yes"
                    ? "⚠️ Nhiều người cũng nghĩ vậy. Hãy cùng kiểm chứng ở phần dưới."
                    : "✅ Rất tốt. Hãy cùng xem lý luận và dẫn chứng cụ thể."}
                </p>
                <motion.div
                  animate={{ y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--accent)]"
                >
                  <span aria-hidden="true">↓</span>
                  <span>Kéo xuống để khám phá</span>
                </motion.div>
              </motion.div>
            ) : (
              <p className="mt-5 text-sm md:text-base text-[color:color-mix(in_oklab,var(--foreground)_70%,white)]">
                {"Chọn một đáp án để xem phản hồi nhanh trước khi chuyển sang phần tiếp theo."}
              </p>
            )}
          </div>

          <motion.figure
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="group relative w-full overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={LANDING_SECTION_IMAGES.hero.src}
              alt={LANDING_SECTION_IMAGES.hero.alt}
              className="h-40 w-full rounded-2xl object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02] sm:h-50 md:h-65 lg:h-85"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.figure>
        </div>
      </motion.div>
    </header>
  );
}
