"use client";

import SectionWrapper from "../components/SectionWrapper";
import { SECTION_IDS } from "@/app/features/landing/content";

const AI_TOOLS = [
  {
    title: "NotebookLM",
    points: [
      "Sử dụng để tóm tắt tài liệu lý thuyết.",
      "Tổng hợp nội dung về Chủ nghĩa Mác - Lênin và tôn giáo.",
    ],
  },
  {
    title: "GPT (ChatGPT) / Gemini",
    points: [
      "Hỗ trợ viết nội dung học tập.",
      "Tạo prompt phục vụ triển khai nội dung.",
      "Gợi ý cấu trúc bài học và luồng UX.",
    ],
  },
  {
    title: "GitHub Copilot / Codex 3.5",
    points: [
      "Hỗ trợ viết code nhanh và nhất quán.",
      "Tạo component, tối ưu cấu trúc giao diện.",
    ],
  },
];

export default function AIReport() {
  return (
    <SectionWrapper
      id={SECTION_IDS.aiReport}
      eyebrow="Phần 7"
      title="Báo cáo sử dụng AI"
      description="Tóm tắt các công cụ AI đã được dùng để xây dựng nội dung và giao diện cho dự án."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {AI_TOOLS.map((tool) => (
          <article key={tool.title} className="glass-surface rounded-3xl p-6">
            <h3 className="text-xl">{tool.title}</h3>
            <ul className="mt-3 space-y-2 text-sm md:text-base">
              {tool.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
