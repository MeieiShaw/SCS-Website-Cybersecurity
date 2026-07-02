import { learningRoutes, publicScenarios, quizQuestions } from "../data/unit-content.js";
import { createElement, setupBackToTop, setupMenu, setupPrint } from "./shared.js";

const LANGUAGE_STORAGE_KEY = "scs-public-language";
const DEFAULT_LANGUAGE = "zh";

const uiText = {
  zh: {
    metaTitle: "Sydney Chinese School | Y3-6 网络安全公开版",
    metaDescription: "Sydney Chinese School Y3-6 网络安全公开版，面向学生和家长介绍课程重点、中文表达和安全小测。",
    skipLink: "跳到主要内容",
    navLabel: "公开版导航",
    brandHomeLabel: "网络安全公开版首页",
    schoolLogoAlt: "Sydney Chinese School logo",
    brandEdition: "Y3-6 网络安全公开版",
    navWhat: "学什么",
    navRoutes: "安全路线",
    navQuiz: "小测验",
    navFamilies: "家长支持",
    teacherTitle: "打开教师内部版",
    teacherButton: "教师版",
    printTitle: "打印页面",
    printButton: "打印",
    languageGroup: "选择语言",
    languageZh: "切换到中文",
    languageEn: "Switch to English",
    menuButton: "打开菜单",
    heroEyebrow: "学生与家庭公开版",
    heroTitle: "网络安全，用中文说清楚",
    heroSummary: "通过情境判断、关键词和短小测验，学习保护信息、辨别风险和友善求助。",
    heroPrimary: "开始小测",
    heroSecondary: "查看学习路线",
    snapshotLabel: "课程快照",
    snapshotWhoLabel: "对象",
    snapshotWhoTitle: "Y3-6 学生",
    snapshotWhoBody: "适合中文课堂与家庭复习",
    snapshotHowLabel: "方式",
    snapshotHowTitle: "情境讨论",
    snapshotHowBody: "先判断，再说明理由",
    snapshotLanguageLabel: "语言",
    snapshotLanguageTitle: "安全中文",
    snapshotLanguageBody: "可以、不可以、应该、不应该",
    snapshotProjectLabel: "项目",
    snapshotProjectTitle: "3-5 分钟短片",
    snapshotProjectBody: "展示风险、建议和求助方式",
    whatKicker: "课程重点",
    whatTitle: "这门课会学到什么",
    whatSummary: "公开版保留学生和家长最需要知道的内容，教师细节放在内部版。",
    featureProtectTitle: "保护个人信息",
    featureProtectBody: "理解密码、照片、学校、电话和地址为什么需要谨慎分享。",
    featureSpotTitle: "识别可疑内容",
    featureSpotBody: "看到陌生链接、奖励消息或夸张说法时，先停下来判断。",
    featureExpressTitle: "用中文表达选择",
    featureExpressBody: "练习“我不应该点击”“我可以问老师”等课堂句型。",
    featureHelpTitle: "知道向谁求助",
    featureHelpBody: "遇到不舒服或不安全的网络情况，能告诉可信任的大人。",
    routesTitle: "四条网络安全路线",
    routesSummary: "每条路线对应一个日常问题，适合课堂讨论，也适合家里聊天复习。",
    scenarioTitle: "试着判断这些情况",
    scenarioSummary: "学生先选安全或不安全，再用一句中文解释自己的选择。",
    quizTitle: "网络安全小测验",
    quizSummary: "三道题快速练习：停一下、想一想、再行动。",
    quizLoading: "正在加载题目",
    quizNext: "下一题",
    quizRestart: "重新开始",
    familiesTitle: "家里可以怎么支持",
    familiesSummary: "不用把网络安全讲得很复杂。用固定句型和真实情境，孩子更容易记住。",
    familyRulesTitle: "一起定规则",
    familyRulesBody: "例如：不分享密码，陌生链接先问大人，账号资料少填一点。",
    familySentenceTitle: "练习一句中文",
    familySentenceBody: "“我不可以分享密码。”“我应该问老师。”“这样比较安全。”",
    familyDiscussTitle: "看完再讨论",
    familyDiscussBody: "观看短片或故事后问：哪里不安全？如果是你，会怎么做？",
    teacherCalloutTitle: "需要完整教学表格？",
    teacherCalloutBody: "教师内部版包含 DOCX 原始表格、教学技能提示、活动序列、资源筛选和评估表。",
    teacherOpenButton: "打开教师版",
    footerEdition: "Cybersecurity 网络安全 Public Edition",
    footerNavLabel: "页脚导航",
    footerRoutes: "安全路线",
    footerQuiz: "小测验",
    footerTeacher: "教师版",
    footerSource: "基于 Y3-6 网络安全 Unit of Work 来源整理。",
    footerReview: "外部资源用于课堂前，请由教师先行审核。",
    quizQuestionStatus: (current, total) => `第 ${current} / ${total} 题`,
    quizScoreStatus: (score, total) => `得分 ${score} / ${total}`,
    quizWrongPrefix: "再想一想。"
  },
  en: {
    metaTitle: "Sydney Chinese School | Y3-6 Cybersecurity Public Edition",
    metaDescription: "Sydney Chinese School Y3-6 Cybersecurity public edition for students and families, covering course focus, Chinese expressions, and a short safety quiz.",
    skipLink: "Skip to content",
    navLabel: "Public unit navigation",
    brandHomeLabel: "Cybersecurity public page home",
    schoolLogoAlt: "Sydney Chinese School logo",
    brandEdition: "Y3-6 Cybersecurity Public Edition",
    navWhat: "What We Learn",
    navRoutes: "Safety Routes",
    navQuiz: "Quiz",
    navFamilies: "Family Support",
    teacherTitle: "Open teacher internal edition",
    teacherButton: "Teacher",
    printTitle: "Print page",
    printButton: "Print",
    languageGroup: "Choose language",
    languageZh: "Switch to Chinese",
    languageEn: "Switch to English",
    menuButton: "Open menu",
    heroEyebrow: "Student and Family Edition",
    heroTitle: "Cybersecurity, Clearly Explained in Chinese",
    heroSummary: "Through scenarios, keywords, and a short quiz, students learn to protect information, spot risks, and ask for help kindly.",
    heroPrimary: "Start Quiz",
    heroSecondary: "View Learning Routes",
    snapshotLabel: "Course snapshot",
    snapshotWhoLabel: "Who",
    snapshotWhoTitle: "Y3-6 Students",
    snapshotWhoBody: "Suitable for Chinese classes and family revision",
    snapshotHowLabel: "How",
    snapshotHowTitle: "Scenario Discussion",
    snapshotHowBody: "Judge first, then explain why",
    snapshotLanguageLabel: "Language",
    snapshotLanguageTitle: "Safety Chinese",
    snapshotLanguageBody: "Can, cannot, should, should not",
    snapshotProjectLabel: "Project",
    snapshotProjectTitle: "3-5 Minute Video",
    snapshotProjectBody: "Show the risk, advice, and ways to get help",
    whatKicker: "Course Focus",
    whatTitle: "What Students Will Learn",
    whatSummary: "The public edition keeps the student and family essentials. Teacher details stay in the internal edition.",
    featureProtectTitle: "Protect Personal Information",
    featureProtectBody: "Understand why passwords, photos, school names, phone numbers, and addresses need careful sharing.",
    featureSpotTitle: "Spot Suspicious Content",
    featureSpotBody: "Pause and judge before opening unknown links, prize messages, or exaggerated claims.",
    featureExpressTitle: "Express Choices in Chinese",
    featureExpressBody: "Practise classroom sentences such as “I should not click this” and “I can ask my teacher.”",
    featureHelpTitle: "Know Who to Ask for Help",
    featureHelpBody: "When something online feels uncomfortable or unsafe, students can tell a trusted adult.",
    routesTitle: "Four Cybersecurity Routes",
    routesSummary: "Each route answers an everyday question for classroom discussion and family revision.",
    scenarioTitle: "Try Judging These Situations",
    scenarioSummary: "Students choose safe or unsafe, then explain their choice in one Chinese sentence.",
    quizTitle: "Cybersecurity Quiz",
    quizSummary: "Three quick questions: pause, think, then act.",
    quizLoading: "Loading question",
    quizNext: "Next Question",
    quizRestart: "Restart",
    familiesTitle: "How Families Can Support Learning",
    familiesSummary: "Cybersecurity does not need to feel complicated. Real situations and repeatable sentences help children remember.",
    familyRulesTitle: "Set Rules Together",
    familyRulesBody: "For example: do not share passwords, ask an adult before opening unknown links, and share less account information.",
    familySentenceTitle: "Practise One Chinese Sentence",
    familySentenceBody: "“I cannot share my password.” “I should ask my teacher.” “This is safer.”",
    familyDiscussTitle: "Watch, Then Discuss",
    familyDiscussBody: "After a video or story, ask: What was unsafe? What would you do?",
    teacherCalloutTitle: "Need the Full Teaching Tables?",
    teacherCalloutBody: "The internal teacher edition includes DOCX source tables, teaching skill notes, activity sequences, resource filters, and assessment tables.",
    teacherOpenButton: "Open Teacher Edition",
    footerEdition: "Cybersecurity Public Edition",
    footerNavLabel: "Footer navigation",
    footerRoutes: "Safety Routes",
    footerQuiz: "Quiz",
    footerTeacher: "Teacher",
    footerSource: "Built from the Y3-6 Cybersecurity Unit of Work source.",
    footerReview: "External resources should be reviewed by teachers before classroom use.",
    quizQuestionStatus: (current, total) => `Question ${current} of ${total}`,
    quizScoreStatus: (score, total) => `Score ${score} of ${total}`,
    quizWrongPrefix: "Try again. "
  }
};

const localizedContent = {
  zh: {
    learningRoutes,
    publicScenarios,
    quizQuestions
  },
  en: {
    learningRoutes: [
      {
        code: "01",
        tone: "secure",
        title: "Be Secure",
        heading: "Protect Accounts and Information",
        prompts: [
          "What is a password? Why should we not tell other people?",
          "Why should we avoid birthdays or 1234 as passwords?",
          "Why should we think before clicking a link?"
        ]
      },
      {
        code: "02",
        tone: "safe",
        title: "Be Safe",
        heading: "Stay Safe Online",
        prompts: [
          "What situations can make you feel unsafe?",
          "What can you do if something feels strange?",
          "What can you do online to protect yourself?"
        ]
      },
      {
        code: "03",
        tone: "curious",
        title: "Be Curious",
        heading: "Curiosity + Thinking",
        prompts: [
          "Is everything we see online true?",
          "Are strange messages or prize offers always real?",
          "Should we copy popular online behaviour without thinking?"
        ]
      },
      {
        code: "04",
        tone: "kind",
        title: "Be Kind",
        heading: "Communicate Kindly and Respectfully",
        prompts: [
          "What does kind language sound like?",
          "Is it okay to insult people online? Why?",
          "What can you do if you see someone being bullied?"
        ]
      }
    ],
    publicScenarios: [
      {
        title: "A Stranger Sends a Link",
        situation: "Someone says you can win a game reward by opening a link.",
        sentence: "I should not click links from strangers. I can ask my teacher."
      },
      {
        title: "A Friend Wants Your Password",
        situation: "A classmate says they only want to borrow your account password for a moment.",
        sentence: "I cannot share my password. A password is private."
      },
      {
        title: "Someone Says Mean Things in a Game",
        situation: "You see someone using hurtful words in a chat area.",
        sentence: "I should tell my teacher or family. This is safer."
      }
    ],
    quizQuestions: [
      {
        prompt: "What should you do if you receive a prize link from a stranger?",
        choices: [
          "Click it right away to see if you win",
          "Do not click it yet. Ask a teacher or family member",
          "Send the link to more friends"
        ],
        answer: 1,
        feedback: "Correct. Links from strangers may be unsafe. Ask a trusted adult first."
      },
      {
        prompt: "Which one is the best cybersecurity rule?",
        choices: [
          "Passwords can be shared with good friends",
          "The more personal information you share, the better",
          "Do not share passwords"
        ],
        answer: 2,
        feedback: "Correct. A password is private and should not be shared."
      },
      {
        prompt: "What can you do if you see someone being bullied online?",
        choices: [
          "Join in and say hurtful things",
          "Ignore it and do not tell anyone",
          "Save evidence and tell a teacher or family member"
        ],
        answer: 2,
        feedback: "Correct. Asking for help is safer than continuing the argument."
      }
    ]
  }
};

let currentLanguage = getInitialLanguage();
let currentIndex = 0;
let score = 0;
let answered = false;

setupMenu();
setupPrint();
setupBackToTop();
setupQuiz();
setupLanguageSwitcher();
renderPage();

function getInitialLanguage() {
  try {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (queryLanguage === "zh" || queryLanguage === "en") return queryLanguage;
  } catch (error) {
    // Ignore malformed URLs and use the saved language below.
  }

  const pageLanguage = getPageLanguage();
  if (pageLanguage) return pageLanguage;

  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === "zh" || savedLanguage === "en") return savedLanguage;
  } catch (error) {
    // The page still works when localStorage is unavailable.
  }

  return DEFAULT_LANGUAGE;
}

function getPageLanguage() {
  const declaredLanguage = document.body?.dataset.defaultLanguage;
  if (declaredLanguage === "zh" || declaredLanguage === "en") return declaredLanguage;

  const path = window.location.pathname.toLowerCase();
  if (path.includes("cs_project_english")) return "en";
  if (path.includes("cs_project_chinese")) return "zh";

  return "";
}

function getContent() {
  return localizedContent[currentLanguage] || localizedContent[DEFAULT_LANGUAGE];
}

function getText() {
  return uiText[currentLanguage] || uiText[DEFAULT_LANGUAGE];
}

function renderPage() {
  applyStaticText();
  updateLanguageSwitcher();
  renderRoutes();
  renderScenarios();
  renderQuestion();
}

function applyStaticText() {
  const text = getText();
  const htmlLanguage = currentLanguage === "zh" ? "zh-Hans" : "en";

  document.documentElement.lang = htmlLanguage;
  document.body.dataset.language = currentLanguage;
  document.title = text.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", text.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = text[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = text[element.dataset.i18nTitle];
    if (typeof value === "string") element.setAttribute("title", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = text[element.dataset.i18nAriaLabel];
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = text[element.dataset.i18nAlt];
    if (typeof value === "string") element.setAttribute("alt", value);
  });
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-language-option]").forEach((option) => {
    option.addEventListener("click", () => {
      const nextLanguage = option.dataset.languageOption;
      if (nextLanguage !== "zh" && nextLanguage !== "en") return;

      if (option instanceof HTMLAnchorElement) {
        try {
          localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
        } catch (error) {
          // Ignore storage failures; the destination page declares its language.
        }
        return;
      }

      if (nextLanguage === currentLanguage) return;

      currentLanguage = nextLanguage;
      currentIndex = 0;
      score = 0;
      answered = false;

      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
      } catch (error) {
        // Ignore storage failures and keep the in-memory language.
      }

      renderPage();
    });
  });
}

function updateLanguageSwitcher() {
  document.querySelectorAll("[data-language-option]").forEach((option) => {
    const isSelected = option.dataset.languageOption === currentLanguage;
    option.classList.toggle("is-selected", isSelected);

    if (option instanceof HTMLAnchorElement) {
      if (isSelected) {
        option.setAttribute("aria-current", "page");
      } else {
        option.removeAttribute("aria-current");
      }
      option.removeAttribute("aria-pressed");
    } else {
      option.setAttribute("aria-pressed", String(isSelected));
    }
  });
}

function renderRoutes() {
  const grid = document.getElementById("publicRouteGrid");
  if (!grid) return;

  grid.replaceChildren();

  getContent().learningRoutes.forEach((route) => {
    const card = createElement("article", `route route--${route.tone}`);
    card.appendChild(createElement("span", "route-code", route.code));

    const heading = createElement("h3");
    heading.textContent = `${route.title} `;
    const detail = createElement("span", "", route.heading || route.chinese);
    detail.setAttribute("lang", currentLanguage === "zh" ? "zh-Hans" : "en");
    heading.appendChild(detail);
    card.appendChild(heading);

    const list = createElement("ul");
    route.prompts.forEach((prompt) => {
      list.appendChild(createElement("li", "", prompt));
    });
    card.appendChild(list);
    grid.appendChild(card);
  });
}

function renderScenarios() {
  const grid = document.getElementById("scenarioGrid");
  if (!grid) return;

  grid.replaceChildren();

  getContent().publicScenarios.forEach((scenario) => {
    const card = createElement("article", "scenario-card");
    card.appendChild(createElement("h3", "", scenario.title));
    card.appendChild(createElement("p", "", scenario.situation));
    card.appendChild(createElement("strong", "", scenario.sentence));
    grid.appendChild(card);
  });
}

function setupQuiz() {
  const status = document.getElementById("quizStatus");
  const question = document.getElementById("quizQuestion");
  const options = document.getElementById("quizOptions");
  const feedback = document.getElementById("quizFeedback");
  const nextButton = document.getElementById("nextQuestion");
  const restartButton = document.getElementById("restartQuiz");

  if (!status || !question || !options || !feedback || !nextButton || !restartButton) return;

  nextButton.addEventListener("click", () => {
    const questions = getContent().quizQuestions;
    if (currentIndex < questions.length - 1) {
      currentIndex += 1;
      renderQuestion();
    }
  });

  restartButton.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    answered = false;
    renderQuestion();
  });
}

function renderQuestion() {
  const status = document.getElementById("quizStatus");
  const question = document.getElementById("quizQuestion");
  const options = document.getElementById("quizOptions");
  const feedback = document.getElementById("quizFeedback");
  const nextButton = document.getElementById("nextQuestion");
  const restartButton = document.getElementById("restartQuiz");

  if (!status || !question || !options || !feedback || !nextButton || !restartButton) return;

  const questions = getContent().quizQuestions;
  const item = questions[currentIndex];
  answered = false;
  status.textContent = getText().quizQuestionStatus(currentIndex + 1, questions.length);
  question.textContent = item.prompt;
  feedback.textContent = "";
  options.replaceChildren();
  nextButton.disabled = true;
  nextButton.hidden = currentIndex === questions.length - 1;
  restartButton.hidden = true;

  item.choices.forEach((choice, index) => {
    const button = createElement("button", "quiz-choice", choice);
    button.type = "button";
    button.addEventListener("click", () => {
      if (answered) return;

      answered = true;
      const currentItem = getContent().quizQuestions[currentIndex];
      const correct = index === currentItem.answer;
      if (correct) score += 1;

      Array.from(options.children).forEach((choiceButton, buttonIndex) => {
        choiceButton.disabled = true;
        if (buttonIndex === currentItem.answer) choiceButton.classList.add("is-correct");
      });

      if (!correct) button.classList.add("is-wrong");
      feedback.textContent = correct ? currentItem.feedback : `${getText().quizWrongPrefix}${currentItem.feedback}`;

      if (currentIndex === getContent().quizQuestions.length - 1) {
        status.textContent = getText().quizScoreStatus(score, getContent().quizQuestions.length);
        restartButton.hidden = false;
      } else {
        nextButton.disabled = false;
      }
    });
    options.appendChild(button);
  });
}
