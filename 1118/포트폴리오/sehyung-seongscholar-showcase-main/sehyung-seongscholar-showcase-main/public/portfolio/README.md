# 정세형 포트폴리오

HTML · CSS · JavaScript 로 만든 개인 포트폴리오 웹사이트입니다.

## 폴더 구조
```
portfolio/
├─ index.html      화면 구조 (섹션 배치)
├─ css/style.css   디자인 (색상, 레이아웃, 애니메이션, 반응형)
├─ js/data.js      ✏️ 내용 (이름, 기술, 타임라인, 연락처)
├─ js/main.js      동작 (메뉴, 스크롤 애니메이션, 폼 등)
└─ images/         프로필 사진, 프로젝트 썸네일을 넣는 폴더
```

## VS Code에서 실행하기
1. VS Code에서 `portfolio` 폴더를 엽니다. (파일 → 폴더 열기)
2. 확장 프로그램에서 **Live Server** 를 설치합니다.
3. `index.html` 을 마우스 오른쪽 클릭 → **Open with Live Server**
   - Live Server 없이 `index.html` 을 더블클릭해도 실행됩니다.
   - 글꼴과 아이콘은 인터넷에서 불러오므로 인터넷 연결이 필요합니다.

## 내용 수정하기
- 대부분의 글자는 `js/data.js` 만 고치면 됩니다.
- 프로필 사진: `images/profile.jpg` 로 넣고 `profile.image` 에 `"images/profile.jpg"` 입력
  (비워 두면 "정" 이니셜이 표시됩니다.)
- 기술 스택: `skills` 목록에서 `level`(1 초급 · 2 초중급 · 3 중급) 과 `percent`(막대 길이) 를 조절
- 학력·활동: `timeline` 목록의 `date` · `title` · `place` · `desc` 수정
- 연락처: `contacts` 에 실제 주소 입력 (`href` 를 비우면 "준비 중"으로 표시)
- 문의하기 폼: `contactEmail` 에 메일을 보낼 주소 입력
- 색상: `css/style.css` 맨 위 `:root` 의 변수 값을 바꾸면 전체 색이 바뀝니다.

## 섹션 구성
Home → About Me → Skills → Education & Activities → Contact
(프로젝트는 아직 없습니다. 나중에 만들게 되면 `index.html` 에 Projects 섹션을 추가하고
`js/main.js` 의 렌더링 함수를 되살리면 됩니다.)
