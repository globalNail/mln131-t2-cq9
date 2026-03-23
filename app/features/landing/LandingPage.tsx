"use client";

import { useCallback, useMemo } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideTracker from "@/app/components/SideTracker";
import { LANDING_SECTIONS } from "@/app/features/landing/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import AIReport from "@/app/sections/AIReport";
import Conclusion from "@/app/sections/Conclusion";
import Explanation from "@/app/sections/Explanation";
import Hero from "@/app/sections/Hero";
import Misconceptions from "@/app/sections/Misconceptions";
import Quiz from "@/app/sections/Quiz";
import Theory from "@/app/sections/Theory";
import VietnamPolicy from "@/app/sections/VietnamPolicy";

export default function LandingPage() {
  const sectionIds = useMemo(
    () => LANDING_SECTIONS.map((section) => section.id),
    [],
  );

  const activeSection = useScrollSpy(sectionIds);

  const navigateToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <main className="relative ">
      <Header />
      <SideTracker
        items={LANDING_SECTIONS}
        activeId={activeSection}
        onNavigate={navigateToSection}
      />
      <Hero />
      <Misconceptions />
      <Theory />
      <VietnamPolicy />
      <Explanation />
      <Conclusion />
      <Quiz />
      <AIReport />
      <Footer />
    </main>
  );
}
