"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/useLang";

interface FlipCardProps {
  front: string;
  back: string;
}

export default function FlipCard({ front, back }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const t = useLang();

  return (
    <button
      type="button"
      onClick={() => setFlipped((value) => !value)}
      className="group h-64 w-full rounded-3xl text-left [perspective:1200px]"
      aria-label={t.flipCard.ariaLabel}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className="relative h-full w-full rounded-3xl [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-7 [backface-visibility:hidden]">
          <p className="accent-pill mb-4">{t.flipCard.frontBadge}</p>
          <p className="text-lg md:text-xl font-semibold leading-snug">{front}</p>
        </div>
        <div className="absolute inset-0 rounded-3xl border border-[var(--line)] bg-[var(--surface-muted)] p-6 md:p-7 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="accent-pill mb-4">{t.flipCard.backBadge}</p>
          <p className="text-base md:text-lg leading-relaxed">{back}</p>
        </div>
      </motion.div>
    </button>
  );
}
