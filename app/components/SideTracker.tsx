"use client";

import { useState } from "react";

interface SideTrackerItem {
  id: string;
  label: string;
}

interface SideTrackerProps {
  items: SideTrackerItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export default function SideTracker({ items, activeId, onNavigate }: SideTrackerProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-end"
      aria-label="Section tracker"
    >
      <nav>
        <ul className="space-y-4">
          {items.map((item) => {
            const isActiveOrHover = activeId === item.id || hovered === item.id;

            return (
              <li key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered((current) => (current === item.id ? null : current))}
                  className="relative block"
                  aria-current={activeId === item.id ? "true" : undefined}
                  aria-label={item.label}
                  title={item.label}
                >
                  <div
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered((current) => (current === item.id ? null : current))}
                    className="relative flex h-6 w-6 items-center justify-center"
                  >
                    <span
                      className={`rounded-full transition-all duration-200 ${
                        isActiveOrHover ? "h-3 w-3 scale-125 bg-green-600" : "h-2 w-2 bg-gray-400"
                      }`}
                      aria-hidden="true"
                    />

                    <div
                      className={`pointer-events-none absolute right-8 top-1/2 flex -translate-y-1/2 items-center transition-all duration-200 ${
                        isActiveOrHover ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                      }`}
                      aria-hidden="true"
                    >
                      <div className="relative whitespace-nowrap rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md">
                        {item.label}
                        <div className="absolute -right-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
