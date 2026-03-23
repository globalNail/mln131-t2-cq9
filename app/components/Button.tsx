"use client";

import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--accent)] text-white border border-[var(--accent)] hover:brightness-110",
    ghost:
      "bg-transparent text-[var(--foreground)] border border-[var(--line)] hover:bg-[var(--surface-muted)]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
