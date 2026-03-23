"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 25,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[var(--accent)]"
      aria-hidden="true"
    />
  );
}
