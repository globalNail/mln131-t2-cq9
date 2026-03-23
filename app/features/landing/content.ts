import type {
  ExplanationPoint,
  MisconceptionItem,
  PolicyStat,
  QuizQuestion,
  TheoryContent,
} from "./types";
import { vi } from "@/i18n/vi";

export const SECTION_IDS = {
  misconceptions: "misconceptions",
  theory: "theory",
  policy: "vietnam-policy",
  explanation: "explanation",
  conclusion: "conclusion",
  quiz: "quiz",
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
