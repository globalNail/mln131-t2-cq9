"use client";

import { motion } from "framer-motion";
import Button from "../components/Button";
import SectionWrapper from "../components/SectionWrapper";
import Card from "../components/Card";
import { QUIZ_QUESTIONS, SECTION_IDS } from "@/app/features/landing/content";
import { useQuiz } from "@/app/features/landing/hooks/useQuiz";
import { useLang } from "@/i18n/useLang";

export default function Quiz() {
  const t = useLang();
  const { answers, submitted, score, isComplete, selectAnswer, submit, reset } =
    useQuiz(QUIZ_QUESTIONS);

  return (
    <SectionWrapper
      id={SECTION_IDS.quiz}
      eyebrow={t.quiz.eyebrow}
      title={t.quiz.title}
      description={t.quiz.description}
    >
      <div className="min-h-screen">
        <div className="space-y-5">
          {QUIZ_QUESTIONS.map((q, qIndex) => (
            <Card key={q.question} title={`${qIndex + 1}. ${q.question}`}>
              <div className="space-y-2">
                {q.options.map((option, oIndex) => {
                  const selected = answers[qIndex] === oIndex;
                  const showCorrect = submitted && option.correct;
                  const showWrong = submitted && selected && !option.correct;

                  return (
                    <label
                      key={option.label}
                      className={`block cursor-pointer rounded-2xl border px-4 py-3 transition-colors ${showCorrect
                        ? "border-emerald-500 bg-emerald-50/60"
                        : showWrong
                          ? "border-rose-500 bg-rose-50/60"
                          : selected
                            ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                            : "border-[var(--line)] hover:bg-[var(--surface-muted)]"
                        }`}
                    >
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        checked={selected}
                        onChange={() => selectAnswer(qIndex, oIndex)}
                        className="mr-3"
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            onClick={submit}
            disabled={!isComplete}
            className="disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {t.quiz.submit}
          </Button>
          <Button variant="ghost" onClick={reset}>
            {t.quiz.reset}
          </Button>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 glass-surface rounded-3xl p-6"
          >
            <p className="text-xl md:text-2xl">
              {t.quiz.scorePrefix} <strong>{score}</strong> / {QUIZ_QUESTIONS.length}
            </p>
            <p className="mt-2 text-sm md:text-base text-[color:color-mix(in_oklab,var(--foreground)_74%,white)]">
              {score === QUIZ_QUESTIONS.length
                ? t.quiz.scoreExcellent
                : score >= 3
                  ? t.quiz.scoreGood
                  : t.quiz.scoreRetry}
            </p>
          </motion.div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}
