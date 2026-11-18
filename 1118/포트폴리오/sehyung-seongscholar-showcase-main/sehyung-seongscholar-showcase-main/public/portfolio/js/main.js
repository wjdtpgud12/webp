/* =============================================================
   main.js — 포트폴리오의 "동작"을 담당하는 파일
   -------------------------------------------------------------
   1. 프로필 정보 채우기
   2. 기술 스택 / 타임라인 / 연락처 카드 만들기
   3. 네비게이션 (스크롤 배경, 현재 메뉴 강조, 햄버거 메뉴)
   4. 스크롤 등장 애니메이션 & 숙련도 막대
   5. 타이핑 효과
   6. 버튼 클릭 물결 효과
   7. 문의하기 폼
   8. 맨 위로 버튼 / 토스트 알림
   ※ 내용(글자)은 data.js 에 있고, 이 파일은 그 내용을 화면에 그립니다.
   ============================================================= */

/* 자주 쓰는 함수: 선택자로 요소 찾기 */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/* 글자 안의 < > 같은 특수문자를 안전하게 바꿔 주는 함수 */
function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* 숙련도 숫자를 글자로 */
const LEVEL_NAMES = { 1: "초급", 2: "초중급", 3: "중급" };

/* ---------------------------------------------------------------
   1. 프로필 정보 채우기
   HTML 에서 data-profile="name" 처럼 표시된 곳에 data.js 값을 넣습니다.
   --------------------------------------------------------------- */
function renderProfile() {
  $$("[data-profile]").forEach((el) => {
    const key = el.dataset.profile;
    if (profile[key] !== undefined) el.textContent = profile[key];
  });

  // 프로필 사진이 있으면 이니셜 대신 사진을 보여줌
  if (profile.image) {
    const frame = $("#profilePhoto");
    frame.innerHTML = `<img src="${escapeHTML(profile.image)}" alt="${escapeHTML(profile.name)} 프로필 사진" />`;
  }

  // 관심 분야 태그
  $("#interestTags").innerHTML = profile.interests
    .map((item) => `<span class="tag"># ${escapeHTML(item)}</span>`)
    .join("");

  // 브라우저 탭 제목
  document.title = `${profile.name} | Portfolio`;
  $("#year").textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------------
   2-1. 기술 스택 카드
   --------------------------------------------------------------- */
function renderSkills() {
  $("#skillsGrid").innerHTML = skills
    .map((skill, i) => {
      // 초급 · 초중급 · 중급 단계 중 현재 단계까지 색칠
      const steps = [1, 2, 3]
        .map((n) => `<span class="${n <= skill.level ? "is-on" : ""}">${LEVEL_NAMES[n]}</span>`)
        .join("");

      return `
        <article class="skill-card reveal" style="--delay:${i * 0.06}s">
          <div class="skill-card__top">
            <div class="skill-card__icon"><i class="${escapeHTML(skill.icon)}"></i></div>
            <div>
              <h3 class="skill-card__name">${escapeHTML(skill.name)}</h3>
              <span class="skill-card__level">${LEVEL_NAMES[skill.level]}</span>
            </div>
          </div>
          <p class="skill-card__note">${escapeHTML(skill.note)}</p>
          <div class="skill-bar" role="progressbar" aria-label="${escapeHTML(skill.name)} 숙련도"
               aria-valuenow="${skill.percent}" aria-valuemin="0" aria-valuemax="100">
            <div class="skill-bar__fill" data-percent="${skill.percent}"></div>
          </div>
          <div class="skill-steps">${steps}</div>
        </article>`;
    })
    .join("");
}

/* ---------------------------------------------------------------
   2-2. 타임라인
   --------------------------------------------------------------- */
const TIMELINE_TYPES = { edu: "학력", study: "학습", project: "과제 · 프로젝트", plan: "계획" };

function renderTimeline() {
  $("#timeline").innerHTML = timeline
    .map((item, i) => `
      <li class="timeline__item timeline__item--${item.type} reveal" style="--delay:${i * 0.08}s">
        <span class="timeline__dot"></span>
        <div class="timeline__card">
          <div class="timeline__head">
            <span class="timeline__date">${escapeHTML(item.date)}</span>
            <span class="timeline__type">${TIMELINE_TYPES[item.type] || ""}</span>
          </div>
          <h3 class="timeline__title">${escapeHTML(item.title)}</h3>
          <p class="timeline__place">${escapeHTML(item.place)}</p>
          <p class="timeline__desc">${escapeHTML(item.desc)}</p>
        </div>
      </li>`)
    .join("");
}

/* ---------------------------------------------------------------
   2-3. 연락처 카드
   --------------------------------------------------------------- */
function renderContacts() {
  $("#contactList").innerHTML = contacts
    .map((c, i) => {
      const icon = c.icon.startsWith("devicon-") ? `<i class="${escapeHTML(c.icon)}"></i>` : escapeHTML(c.icon);
      const isEmail = c.href.startsWith("mailto:");
      const external = c.href && !isEmail ? 'target="_blank" rel="noopener"' : "";
      // 주소가 비어 있으면 클릭 시 '준비 중' 안내
      const hrefAttr = c.href ? `href="${escapeHTML(c.href)}" ${external}` : 'href="#" data-contact-empty';

      return `
        <div class="contact-card reveal" style="--delay:${i * 0.08}s">
          <div class="contact-card__icon">${icon}</div>
          <a class="contact-card__text" ${hrefAttr}>
            <p class="contact-card__label">${escapeHTML(c.label)}</p>
            <p class="contact-card__value">${escapeHTML(c.value)}</p>
          </a>
          ${isEmail
            ? `<button class="contact-card__copy" data-copy="${escapeHTML(c.value)}">복사</button>`
            : `<span class="contact-card__arrow">↗</span>`}
        </div>`;
    })
    .join("");
}

/* ---------------------------------------------------------------
   3. 네비게이션
   --------------------------------------------------------------- */
function initNavigation() {
  const navbar = $("#navbar");
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  const links = $$(".navbar__link");

  // 3-1. 스크롤하면 메뉴 배경 생기기
  const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 3-2. 햄버거 메뉴 열기 / 닫기
  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    navbar.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  }
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  links.forEach((link) => link.addEventListener("click", () => setMenu(false))); // 메뉴 누르면 닫힘
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
  window.addEventListener("resize", () => window.innerWidth > 820 && setMenu(false));

  // 3-3. 지금 보고 있는 섹션의 메뉴 강조
  const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" } // 화면 가운데에 걸친 섹션을 "현재 섹션"으로 판단
  );
  sections.forEach((section) => spy.observe(section));
}

/* ---------------------------------------------------------------
   4. 스크롤 등장 애니메이션 & 숙련도 막대 채우기
   --------------------------------------------------------------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");

        // 기술 카드라면 막대를 실제 숙련도만큼 채움
        const fill = $(".skill-bar__fill", entry.target);
        if (fill) fill.style.width = `${fill.dataset.percent}%`;

        observer.unobserve(entry.target); // 한 번만 실행
      });
    },
    { threshold: 0.15 }
  );
  $$(".reveal").forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------------
   5. 타이핑 효과 — 관심 분야를 한 글자씩 썼다 지웠다 반복
   --------------------------------------------------------------- */
function initTyping() {
  const target = $("#typingText");
  const words = profile.interests;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];
    charIndex += deleting ? -1 : 1;
    target.textContent = word.slice(0, charIndex);

    let delay = deleting ? 50 : 110;
    if (!deleting && charIndex === word.length) {
      delay = 1600;          // 다 쓰면 잠시 멈춤
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length; // 다음 단어
      delay = 300;
    }
    setTimeout(tick, delay);
  }
  tick();
}

/* ---------------------------------------------------------------
   6. 버튼 클릭 물결(ripple) 효과
   .ripple 클래스가 있는 버튼을 누르면 누른 위치에서 원이 퍼집니다.
   --------------------------------------------------------------- */
function initRipple() {
  document.addEventListener("click", (e) => {
    const button = e.target.closest(".ripple");
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const wave = document.createElement("span");
    wave.className = "ripple-wave";
    wave.style.width = wave.style.height = `${size}px`;
    wave.style.left = `${e.clientX - rect.left - size / 2}px`;
    wave.style.top = `${e.clientY - rect.top - size / 2}px`;
    button.appendChild(wave);
    wave.addEventListener("animationend", () => wave.remove());
  });
}

/* ---------------------------------------------------------------
   7. 문의하기 폼 — 입력 확인 후 메일 앱을 열어 내용을 채워 줌
   --------------------------------------------------------------- */
function initContactForm() {
  const form = $("#contactForm");
  const error = $("#formError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // 간단한 입력 확인
    if (!name || !email || !message) {
      error.textContent = "이름, 이메일, 메시지를 모두 입력해 주세요.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error.textContent = "이메일 형식이 올바르지 않습니다.";
      return;
    }
    error.textContent = "";

    const subject = encodeURIComponent(`[포트폴리오 문의] ${name}님의 메시지`);
    const bodyText = encodeURIComponent(`보낸 사람: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${bodyText}`;

    showToast("메일 앱을 여는 중입니다 ✉");
    form.reset();
  });
}

/* ---------------------------------------------------------------
   8. 맨 위로 버튼 · 기타 버튼 · 토스트
   --------------------------------------------------------------- */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-show"), 2400);
}

function initButtons() {
  // 맨 위로 버튼: 화면을 조금 내리면 나타남
  const toTop = $("#toTop");
  window.addEventListener(
    "scroll",
    () => toTop.classList.toggle("is-visible", window.scrollY > 600),
    { passive: true }
  );
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.addEventListener("click", async (e) => {
    // 주소가 아직 없는 연락처
    if (e.target.closest("[data-contact-empty]")) {
      e.preventDefault();
      showToast("해당 연락처는 준비 중입니다.");
    }
    // 이메일 복사
    const copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.copy);
        showToast("이메일 주소를 복사했어요.");
      } catch {
        showToast(copyBtn.dataset.copy);
      }
    }
  });
}

/* ---------------------------------------------------------------
   시작: 페이지가 준비되면 위 기능을 순서대로 실행
   --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderSkills();
  renderTimeline();
  renderContacts();

  initNavigation();
  initReveal();     // 카드가 모두 그려진 뒤에 실행해야 함
  initTyping();
  initRipple();
  initContactForm();
  initButtons();
});
