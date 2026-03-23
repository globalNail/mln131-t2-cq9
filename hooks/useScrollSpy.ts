"use client";

import { useEffect, useState } from "react";

interface ScrollSpyOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const DEFAULT_OPTIONS: Required<Pick<ScrollSpyOptions, "rootMargin" | "threshold">> = {
  // Keep a larger active detection window near section centers while making end sections easier to detect.
  rootMargin: "-35% 0px -20% 0px",
  threshold: 0.15,
};

export function useScrollSpy(sectionIds: string[], options: ScrollSpyOptions = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const { root = null, rootMargin = DEFAULT_OPTIONS.rootMargin, threshold = DEFAULT_OPTIONS.threshold } = options;

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const intersections = new Map<string, number>();
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const selectVisibleSection = () => {
      let winner = sectionIds[0];
      let bestRatio = -1;

      for (const id of sectionIds) {
        const ratio = intersections.get(id) ?? 0;
        if (ratio > bestRatio) {
          winner = id;
          bestRatio = ratio;
        }
      }

      if (bestRatio <= 0) {
        const nearest = sectionIds
          .map((id) => {
            const element = document.getElementById(id);
            if (!element) {
              return null;
            }
            return {
              id,
              distance: Math.abs(element.getBoundingClientRect().top),
            };
          })
          .filter((item): item is { id: string; distance: number } => item !== null)
          .sort((a, b) => a.distance - b.distance)[0];

        if (nearest) {
          winner = nearest.id;
        }
      }

      setActiveSection((current) => (current === winner ? current : winner));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = (entry.target as HTMLElement).id;
          intersections.set(sectionId, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        selectVisibleSection();
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    for (const element of elements) {
      intersections.set(element.id, 0);
      observer.observe(element);
    }

    selectVisibleSection();

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, root, rootMargin, threshold]);

  return activeSection;
}
