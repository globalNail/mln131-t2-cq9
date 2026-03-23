"use client";

import { useEffect, useState } from "react";

export function useScrollPosition(offset = 24) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateScroll = () => {
      const nextY = window.scrollY;
      setScrollY(nextY);
      setIsScrolled(nextY > offset);
      frameId = 0;
    };

    const onScroll = () => {
      if (frameId !== 0) {
        return;
      }
      frameId = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [offset]);

  return { scrollY, isScrolled };
}
