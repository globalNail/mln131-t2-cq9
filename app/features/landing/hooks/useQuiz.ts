"use client";

import { useMemo, useState } from "react";
import type { QuizQuestion } from "../types";

export function useQuiz(questions: QuizQuestion[]) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question, questionIndex) => {
      const picked = answers[questionIndex];
      if (picked === undefined) return total;
      return question.options[picked]?.correct ? total + 1 : total;
    }, 0);
  }, [answers, questions]);

  const isComplete = Object.keys(answers).length === questions.length;

  const selectAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const submit = () => setSubmitted(true);

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return {
    answers,
    submitted,
    score,
    isComplete,
    selectAnswer,
    submit,
    reset,
  };
}
