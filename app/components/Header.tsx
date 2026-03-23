'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LANDING_SECTIONS, SECTION_IDS } from '@/app/features/landing/content';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useLang } from '@/i18n/useLang';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const t = useLang();

  useEffect(() => {
    let frameId = 0;

    const updateScrolled = () => {
      setScrolled(window.scrollY > 20);
      frameId = 0;
    };

    const onScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const landingSectionIds = useMemo(
    () => LANDING_SECTIONS.map((section) => section.id),
    [],
  );

  const activeSection = useScrollSpy(
    isLandingPage ? landingSectionIds : [],
  );

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setMobileMenuOpen(false);
  }, []);

  const shellSurfaceClass = scrolled
    ? 'bg-white/70 py-2.5 shadow-md backdrop-blur-lg'
    : 'bg-white/40 py-3.5 shadow-none backdrop-blur-sm';

  return (
    <header
      className={`z-50 w-full transition-all duration-300 ${isLandingPage ? 'fixed inset-x-0 top-0' : 'sticky top-0'
        }`}
    >
      <nav className="mx-auto mt-4 w-full max-w-6xl px-3 sm:px-4">
        <div
          className={`flex items-center justify-between rounded-full border border-white/30 px-6 transition-all duration-300 ${shellSurfaceClass}`}
        >
          {/* Logo */}
          {isLandingPage ? (
            <button
              type="button"
              className="flex items-center gap-2"
              onClick={() => scrollToSection(SECTION_IDS.hero)}
              aria-label="Về đầu trang"
            >
              <Image
                src="/Flag_of_the_Communist_Party_of_Vietnam.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-8 rounded-md object-cover"
                priority
              />
              <span className="font-semibold text-[var(--foreground)]">
                MLN131
              </span>
            </button>
          ) : (
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Flag_of_the_Communist_Party_of_Vietnam.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-8 rounded-md object-cover"
                priority
              />
              <span className="font-semibold text-[var(--foreground)]">MLN131</span>
              </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {isLandingPage
              ? (
                <LayoutGroup id="header-active-pill">
                  {LANDING_SECTIONS.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className="relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105"
                        aria-current={isActive ? 'true' : undefined}
                      >
                        {isActive ? (
                          <motion.div
                            layoutId="active-pill"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute inset-0 rounded-full bg-[var(--accent)]"
                          />
                        ) : null}
                        <span
                          className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-600'
                            }`}
                        >
                          {section.label}
                        </span>
                      </button>
                    );
                  })}
                </LayoutGroup>
              )
              : (
                <>
                  <Link
                    href="/"
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:bg-gray-200/50 hover:text-gray-900"
                  >
                    {t.header.home}
                  </Link>
                  <Link
                    href="/chapter"
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:bg-gray-200/50 hover:text-gray-900"
                  >
                    {t.header.chapter6}
                  </Link>
                  <a
                    href="#"
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:bg-gray-200/50 hover:text-gray-900"
                  >
                    {t.header.syllabus}
                  </a>
                </>
              )}
          </div>

          <button
            type="button"
            className="rounded-full border border-white/40 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-gray-200/50 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            aria-label={t.header.toggleMenuAria}
          >
            <span className="sr-only">{t.header.toggleMenuAria}</span>
            <span className="inline-block w-16 text-left">{mobileMenuOpen ? t.header.close : t.header.menu}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${mobileMenuOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="mt-2 space-y-2 rounded-3xl border border-white/40 bg-white/80 p-3 backdrop-blur-lg">
            {isLandingPage
              ? LANDING_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full rounded-full px-3 py-1.5 text-left text-sm font-medium transition-all duration-300 ${activeSection === section.id
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-gray-600 hover:bg-gray-200/50'
                    }`}
                >
                  {section.label}
                </button>
              ))
              : (
                <>
                  <Link
                    href="/"
                    className="block rounded-full px-3 py-1.5 text-sm text-gray-600 transition-all duration-300 hover:bg-gray-200/50 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.header.home}
                  </Link>
                  <Link
                    href="/chapter"
                    className="block rounded-full px-3 py-1.5 text-sm text-gray-600 transition-all duration-300 hover:bg-gray-200/50 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.header.chapter6}
                  </Link>
                  <a
                    href="#"
                    className="block rounded-full px-3 py-1.5 text-sm text-gray-600 transition-all duration-300 hover:bg-gray-200/50 hover:text-gray-900"
                  >
                    {t.header.syllabus}
                  </a>
                </>
              )}
          </div>
        </div>
      </nav>
    </header>
  );
}
