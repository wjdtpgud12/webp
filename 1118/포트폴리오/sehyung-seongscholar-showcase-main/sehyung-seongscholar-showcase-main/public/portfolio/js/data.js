/* =============================================================
   data.js — 포트폴리오에 들어가는 "내용"을 모아 둔 파일
   -------------------------------------------------------------
   ✏️ 화면에 보이는 글자를 바꾸고 싶다면 이 파일만 수정하면 됩니다.
   HTML 을 직접 고칠 필요 없이, 아래 값을 바꾸고 저장 → 새로고침!
   ============================================================= */

/* -------------------------------------------------------------
   1) 기본 프로필
   ------------------------------------------------------------- */
const profile = {
  name: "정세형",                 // 한글 이름
  nameEn: "Jeong Sehyeong",       // 영문 이름 (푸터 등에 사용)
  initial: "정",                  // 사진이 없을 때 프로필 영역에 보이는 글자
  image: "",                      // 프로필 사진 경로 예) "images/profile.jpg" (비워두면 이니셜 표시)

  university: "경성대학교",
  major: "소프트웨어학과",
  admission: "2023학번",          // 입학 연도
  grade: "2학년",
  status: "재학 중",

  // 메인 화면 이름 옆에 붙는 한 줄 소개
  tagline: "코드로 사람들의 불편함을 해결하는 개발자가 되기 위해 매일 배우고 만들고 있습니다.",

  // About 섹션의 자기소개 문단
  bio:
    "경성대학교 소프트웨어학과에 재학 중인 2학년 학생입니다. C와 Java로 프로그래밍의 기초를 다졌고, " +
    "HTML·CSS·JavaScript로 직접 화면을 만들며 웹 개발의 재미를 알게 되었습니다. " +
    "작은 기능이라도 끝까지 완성해 보는 경험을 중요하게 생각합니다.",

  // 목표와 포부
  goal:
    "사용자의 입장에서 생각하고, 읽기 쉬운 코드를 쓰는 소프트웨어 개발자가 되는 것이 목표입니다. " +
    "기초를 탄탄히 다지고 꾸준히 프로젝트를 쌓아, 팀에 믿음을 주는 개발자로 성장하겠습니다.",

  // 관심 분야 (메인 화면 타이핑 효과 + About 태그에 함께 사용)
  interests: ["프로그래밍", "웹 개발", "소프트웨어 개발", "UI/UX"],
};

/* -------------------------------------------------------------
   2) 기술 스택
   level : 1 = 초급, 2 = 초중급, 3 = 중급
   percent : 막대 그래프 길이 (0 ~ 100)
   icon : Devicon 아이콘 이름 (https://devicon.dev 에서 검색 가능)
   ------------------------------------------------------------- */
const skills = [
  { name: "Java",       icon: "devicon-java-plain",       level: 1, percent: 35, note: "객체지향 개념, 수업 과제 구현" },
  { name: "C",          icon: "devicon-c-plain",          level: 1, percent: 30, note: "자료형, 포인터, 기초 알고리즘" },
  { name: "HTML",       icon: "devicon-html5-plain",      level: 1, percent: 40, note: "시맨틱 마크업, 페이지 구조 설계" },
  { name: "CSS",        icon: "devicon-css3-plain",       level: 1, percent: 35, note: "Flex·Grid 레이아웃, 반응형 웹" },
  { name: "JavaScript", icon: "devicon-javascript-plain", level: 1, percent: 30, note: "DOM 조작, 이벤트 처리" },
  { name: "Python",     icon: "devicon-python-plain",     level: 1, percent: 25, note: "기초 문법, 간단한 스크립트" },
  { name: "Git / GitHub", icon: "devicon-github-original", level: 1, percent: 30, note: "버전 관리, 저장소 관리" },
];

/* -------------------------------------------------------------
   3) 학력 및 활동 타임라인 (위에서부터 순서대로 표시)
   type : "edu"(학력) | "study"(학습) | "project"(과제·프로젝트) | "plan"(계획)
   ------------------------------------------------------------- */
const timeline = [
  {
    date: "2023.03 – 현재",
    type: "edu",
    title: "경성대학교 소프트웨어학과",
    place: "2023학번 · 2학년 재학 중",
    desc: "2023학번으로 입학해 군 복무를 마치고 2학년으로 재학 중입니다. 소프트웨어 개발에 필요한 프로그래밍, 자료구조, 웹 기초 등 전공 과목을 수강하고 있습니다.",
  },
  {
    date: "지금까지",
    type: "study",
    title: "프로그래밍 기초 학습",
    place: "C · Java · Python",
    desc: "C 언어로 프로그래밍의 기본 원리를 익히고, Java로 객체지향 프로그래밍을 배웠습니다.",
  },
  {
    date: "현재",
    type: "study",
    title: "웹 개발 학습",
    place: "HTML · CSS · JavaScript",
    desc: "웹 페이지의 구조와 디자인, 동작을 직접 구현하며 반응형 웹을 공부하고 있습니다.",
  },
  {
    date: "2026",
    type: "project",
    title: "개인 포트폴리오 웹사이트 제작",
    place: "HTML · CSS · JavaScript",
    desc: "수업에서 배운 내용을 바탕으로 이 포트폴리오 웹사이트를 직접 설계하고 구현했습니다.",
  },
  {
    date: "앞으로",
    type: "plan",
    title: "앞으로의 학습 계획",
    place: "Next Step",
    desc: "자료구조와 알고리즘을 깊이 공부하고, 프레임워크와 데이터베이스를 배워 완성도 있는 웹 서비스를 만들 계획입니다.",
  },
];

/* -------------------------------------------------------------
   4) 연락처
   ✏️ 실제 주소로 바꿔 주세요. href 가 비어 있으면 "준비 중"으로 표시됩니다.
   ------------------------------------------------------------- */
const contacts = [
  { label: "Email",  value: "jshz0221@gmail.com",         href: "mailto:jshz0221@gmail.com",         icon: "✉" },
  { label: "GitHub", value: "github.com/wjdtpgud12",      href: "https://github.com/wjdtpgud12",     icon: "devicon-github-original" },
];

// 문의하기 폼이 메일을 보낼 주소
const contactEmail = "jshz0221@gmail.com";
