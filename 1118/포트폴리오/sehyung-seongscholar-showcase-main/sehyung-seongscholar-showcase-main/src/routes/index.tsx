import { createFileRoute } from "@tanstack/react-router";

// The portfolio itself is a plain HTML/CSS/JS site in public/portfolio (course requirement).
// This route only frames it so the Lovable preview shows it at "/".
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "정세형 | 소프트웨어 개발자 포트폴리오" },
      {
        name: "description",
        content: "경성대학교 소프트웨어학과 정세형의 개인 포트폴리오 — 기술 스택, 프로젝트, 학력과 연락처.",
      },
      { property: "og:title", content: "정세형 | 소프트웨어 개발자 포트폴리오" },
      {
        property: "og:description",
        content: "소프트웨어 개발자를 꿈꾸는 대학생 정세형의 포트폴리오입니다.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/portfolio/index.html"
      title="정세형 포트폴리오"
      className="fixed inset-0 h-full w-full border-0 bg-background"
    />
  );
}
