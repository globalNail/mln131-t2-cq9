"use client";

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NavItem({ label, isActive, onClick }: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-80 ${
        isActive ? "text-[var(--accent)]" : "text-[color:color-mix(in_oklab,var(--foreground)_78%,white)]"
      }`}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[var(--accent)] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </button>
  );
}
