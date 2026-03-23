import ScrollProgress from "@/app/components/ScrollProgress";
import Conclusion from "@/app/sections/Conclusion";
import Explanation from "@/app/sections/Explanation";
import Hero from "@/app/sections/Hero";
import Misconceptions from "@/app/sections/Misconceptions";
import Quiz from "@/app/sections/Quiz";
import Theory from "@/app/sections/Theory";
import VietnamPolicy from "@/app/sections/VietnamPolicy";

export default function LandingPage() {
  return (
    <main className="relative pb-20">
      <ScrollProgress />
      <Hero />
      <Misconceptions />
      <Theory />
      <VietnamPolicy />
      <Explanation />
      <Conclusion />
      <Quiz />
    </main>
  );
}
