import type {
  ExplanationPoint,
  MisconceptionItem,
  PolicyStat,
  QuizQuestion,
  TheoryContent,
} from "./types";
import { vi } from "@/i18n/vi";

export type LandingSectionNavItem = {
    id: string;
    label: string;
};

export const SECTION_IDS = {
    hero: "hero",
    misconceptions: "misconceptions",
    theory: "theory",
    policy: "policy",
    explanation: "explanation",
    conclusion: "conclusion",
    quiz: "quiz",
    aiReport: "ai-report",
} as const;

export const LANDING_SECTIONS: LandingSectionNavItem[] = [
    // { id: SECTION_IDS.hero, label: "Trang chủ" },
    { id: SECTION_IDS.misconceptions, label: "Hiểu lầm" },
    { id: SECTION_IDS.theory, label: "Lý thuyết" },
    { id: SECTION_IDS.policy, label: "Chính sách" },
    { id: SECTION_IDS.explanation, label: "Giải thích" },
    { id: SECTION_IDS.conclusion, label: "Kết luận" },
    { id: SECTION_IDS.quiz, label: "Trắc nghiệm" },
    { id: SECTION_IDS.aiReport, label: "Báo cáo AI" },
];

export const LANDING_SECTION_IMAGES = {
    hero: {
        src: "/hero.jpg",
        alt: "Minh hoa khong gian suy tu va cau hoi triet hoc",
    },
    theory: {
        src: "/section-2.jpg",
        alt: "Minh hoa cau truc tri thuc va phan tich ly luan",
    },
} as const;

export const HERO_FEEDBACK = {
  idle: vi.hero.feedback.idle,
  yes: vi.hero.feedback.yes,
  no: vi.hero.feedback.no,
} as const;

export const MISCONCEPTIONS: MisconceptionItem[] = [...vi.misconceptions.items];

export const THEORY_CONTENT: TheoryContent = {
  quote: vi.theory.quote,
  quoteSource: vi.theory.quoteSource,
  coreIdeas: [...vi.theory.coreIdeas],
  misunderstanding: vi.theory.misunderstanding,
  interpretation: vi.theory.interpretation,
};

export const RELIGION_STATS: PolicyStat[] = [...vi.policy.stats];

export const POLICY_EXAMPLES: string[] = [...vi.policy.examples];

export const EXPLANATION_POINTS: ExplanationPoint[] = [...vi.explanation.points];

export const QUIZ_QUESTIONS: QuizQuestion[] = vi.quiz.questions.map((question) => ({
  question: question.question,
  options: question.options.map((option) => ({
    label: option.label,
    correct: option.correct,
  })),
}));
