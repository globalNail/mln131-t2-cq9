export type AnswerChoice = "yes" | "no";

export interface MisconceptionItem {
  front: string;
  back: string;
}

export interface PolicyStat {
  label: string;
  value: string;
}

export interface ExplanationPoint {
  icon: string;
  title: string;
  text: string;
}

export interface QuizOption {
  label: string;
  correct: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface TheoryContent {
  quote: string;
  quoteSource: string;
  coreIdeas: string[];
  misunderstanding: string;
  interpretation: string;
}
