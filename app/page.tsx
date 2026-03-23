import type { Metadata } from "next";
import LandingPage from "@/app/features/landing/LandingPage";
import { vi } from "@/i18n/vi";

export const metadata: Metadata = {
  title: vi.metadata.homeTitle,
  description: vi.metadata.homeDescription,
};

export default function Home() {
  return <LandingPage />;
}
