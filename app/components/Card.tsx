import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <article className={`glass-surface rounded-3xl p-6 md:p-8 ${className}`}>
      {title ? (
        <h3 className="text-xl md:text-2xl text-[var(--foreground)] mb-4">{title}</h3>
      ) : null}
      <div className="text-[color:color-mix(in_oklab,var(--foreground)_88%,white)] leading-relaxed">
        {children}
      </div>
    </article>
  );
}
