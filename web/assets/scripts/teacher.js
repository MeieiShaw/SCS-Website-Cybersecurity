(function () {
const { createElement, setupBackToTop, setupMenu, setupPrint } = window.scsShared;
const docxTables = window.docxTables || [];

const body = document.body;
const studentButton = document.getElementById("studentMode");
const expandButton = document.getElementById("expandAll");
const collapseButton = document.getElementById("collapseAll");
const searchInput = document.getElementById("resourceSearch");
const resourceGrid = document.getElementById("resourceGrid");
const resourceCount = document.getElementById("resourceCount");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const resourceCards = resourceGrid ? Array.from(resourceGrid.querySelectorAll(".resource-card")) : [];
const teacherLanguage = body.dataset.teacherLanguage === "zh" ? "zh" : "en";
let activeFilter = "all";
let printOpenState = [];

const localizedDocxTables = {
  en: [
    {
      title: "Unit of Work Source Summary",
      rows: [
        [
          { text: "Source Area" },
          { text: "English Summary" },
          { text: "Teaching Use" }
        ],
        [
          { text: "Learning Goal" },
          { text: "Students discuss cybersecurity, identify risks, explain safe choices in Chinese, and create a 3-5 minute video." },
          { text: "Use as the unit overview and project anchor." }
        ],
        [
          { text: "Learning Routes" },
          { text: "Be Secure, Be Safe, Be Curious, and Be Kind become four classroom discussion pathways." },
          { text: "Use one route per lesson or rotate routes during group work." }
        ],
        [
          { text: "Language Focus" },
          { text: "Core vocabulary includes devices, online people, personal information, online actions, and safety judgement words." },
          { text: "Pair vocabulary with can, cannot, should, and should not sentence frames." }
        ],
        [
          { text: "Teaching Strategies" },
          { text: "Gesture checks, vocabulary matching, mini scenarios, listening and speaking prompts, writing practice, and a group video." },
          { text: "Move from judgement to reasons, then to Chinese responses." }
        ],
        [
          { text: "Resources and Assessment" },
          { text: "External resources support media viewing, story adaptation, posters, role-play, short writing, and video projects." },
          { text: "Review external links before class and choose resources by student readiness." }
        ]
      ]
    },
    {
      title: "Evaluation Source Table",
      rows: [
        [
          { text: "Criterion" },
          { text: "Rating" },
          { text: "Explanation of Rating" },
          { text: "Suggested Action" }
        ],
        [{ text: "Logical sequence of learning that meets syllabus requirements" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "Explicitly addresses all outcomes for the stage" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "Identifies assessment tasks and their place in the sequence" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "Reflects the needs, interests, and abilities of all students" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "Identifies key concepts, skills, and content focus" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "Provides opportunities to revisit outcomes across the stage" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "Allows flexibility around school-based events and resource access" }, { text: "" }, { text: "" }, { text: "" }]
      ]
    }
  ],
  zh: [
    {
      title: "教学单元来源摘要",
      rows: [
        [
          { text: "来源范围" },
          { text: "中文摘要" },
          { text: "教学用途" }
        ],
        [
          { text: "学习目标" },
          { text: "学生围绕网络安全展开讨论，用中文识别风险、说明安全选择，并制作 3-5 分钟短片。" },
          { text: "用作单元总览和项目主线。" }
        ],
        [
          { text: "学习路线" },
          { text: "保护信息、安全上网、先想一想、友善交流四条路线对应课堂讨论路径。" },
          { text: "可每节课聚焦一条路线，也可用于小组轮换讨论。" }
        ],
        [
          { text: "语言重点" },
          { text: "核心词汇包括设备、网络上的人、个人信息、网络行为和安全判断词。" },
          { text: "配合“可以、不可以、应该、不应该”等句型反复练习。" }
        ],
        [
          { text: "教学策略" },
          { text: "包含手势判断、词汇配对、迷你情境、听说讨论、写作练习和小组短片。" },
          { text: "从安全判断推进到说明理由，再推进到中文回应。" }
        ],
        [
          { text: "资源与评估" },
          { text: "外部资源支持观看、故事改编、海报、角色扮演、短写作和短片项目。" },
          { text: "课堂使用前先审核链接，并按学生程度筛选资源。" }
        ]
      ]
    },
    {
      title: "评价来源表",
      rows: [
        [
          { text: "评价标准" },
          { text: "评级" },
          { text: "评级说明" },
          { text: "建议行动" }
        ],
        [{ text: "学习顺序清晰，并符合课程要求" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "明确覆盖本阶段所有学习成果" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "标明评估任务及其在学习流程中的位置" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "回应所有学生的需要、兴趣和能力差异" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "明确关键概念、技能和内容重点" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "提供反复回到学习成果的机会" }, { text: "" }, { text: "" }, { text: "" }],
        [{ text: "保留弹性，以配合学校活动和资源可用性" }, { text: "" }, { text: "" }, { text: "" }]
      ]
    }
  ]
};

const plannerContent = {
  en: {
    secure: {
      starter: "Compare one strong password and one weak password.",
      group: "Sort examples into safe to share and private information.",
      language: "I should protect my password.",
      exit: "Write one rule for protecting personal information."
    },
    safe: {
      starter: "Show a message that feels strange and ask students what they notice.",
      group: "Act out asking a trusted adult for help.",
      language: "I can ask my teacher for help.",
      exit: "Name one person students can tell when something feels unsafe."
    },
    curious: {
      starter: "Compare a real-looking prize message with a safer source.",
      group: "Use pause, check, ask to judge each scenario.",
      language: "I should think before I click.",
      exit: "Write one question to ask before trusting online information."
    },
    kind: {
      starter: "Rewrite one unkind online sentence into a respectful sentence.",
      group: "Role-play helping a classmate who receives an unkind message.",
      language: "I should speak kindly online.",
      exit: "Write one sentence that supports a friend online."
    }
  },
  zh: {
    secure: {
      starter: "比较一个强密码和一个弱密码。",
      group: "把例子分成“可以分享”和“需要保密”。",
      language: "我应该保护我的密码。",
      exit: "写一条保护个人信息的规则。"
    },
    safe: {
      starter: "展示一条让人觉得奇怪的信息，请学生说出发现。",
      group: "表演如何向可信任的大人求助。",
      language: "我可以问老师。",
      exit: "说出遇到不安全情况时可以告诉谁。"
    },
    curious: {
      starter: "比较一条像真的奖励信息和一个更可靠的信息来源。",
      group: "用“停一下、查一查、问一问”判断情境。",
      language: "我应该先想一想再点击。",
      exit: "写一个相信网上信息前应该问的问题。"
    },
    kind: {
      starter: "把一句不友善的网络留言改写成尊重的话。",
      group: "角色扮演：帮助收到不友善信息的同学。",
      language: "我应该在网上友善说话。",
      exit: "写一句可以在线上支持朋友的话。"
    }
  }
};

const rubricUiText = {
  en: {
    groupLabel: (index) => `Choose rating for row ${index + 1}`,
    ratings: [
      {
        key: "strong",
        label: "Strong",
        explanation: "This area is working well for the current unit.",
        action: "Keep the approach and collect evidence after teaching."
      },
      {
        key: "review",
        label: "Review",
        explanation: "This area is usable but needs one clearer support point.",
        action: "Add a scaffold, example, or timing note before the lesson."
      },
      {
        key: "action",
        label: "Action",
        explanation: "This area needs attention before the next lesson.",
        action: "Revise the plan and record a specific follow-up step."
      }
    ]
  },
  zh: {
    groupLabel: (index) => `为第 ${index + 1} 行选择评级`,
    ratings: [
      {
        key: "strong",
        label: "优势",
        explanation: "这一项已能支持当前单元。",
        action: "保留做法，并课后记录学生证据。"
      },
      {
        key: "review",
        label: "需调整",
        explanation: "这一项基本可用，但需要补充一个支持点。",
        action: "补充脚手架、例子或时间安排。"
      },
      {
        key: "action",
        label: "需行动",
        explanation: "这一项需要在下一课前明确。",
        action: "修改计划，并写下具体跟进步骤。"
      }
    ]
  }
};

setupMenu();
setupPrint();
setupBackToTop();
setupStudentMode();
setupResourceFilters();
setupActivityControls();
setupPlanner();
setupRubricRatings();
setupPrintExpansion();
renderDocxTables();

function setupStudentMode() {
  if (!studentButton) return;

  studentButton.addEventListener("click", () => {
    const enabled = !body.classList.contains("student-mode");
    body.classList.toggle("student-mode", enabled);
    studentButton.setAttribute("aria-pressed", String(enabled));
  });
}

function setupResourceFilters() {
  const activeButton = filterButtons.find((button) => button.classList.contains("is-active"));
  activeFilter = activeButton?.dataset.filter || activeFilter;
  updateFilterButtons();

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      updateFilterButtons();
      applyResourceFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyResourceFilters);
  }

  applyResourceFilters();
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    const isActive = (button.dataset.filter || "all") === activeFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyResourceFilters() {
  const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
  let visibleCount = 0;

  resourceCards.forEach((card) => {
    const haystack = [
      card.textContent,
      card.dataset.tags || "",
      card.dataset.platform || ""
    ].join(" ").toLowerCase();

    const matchesQuery = !query || haystack.includes(query);
    const matchesFilter = activeFilter === "all" || getResourceTokens(card).includes(activeFilter.toLowerCase());
    const isVisible = matchesQuery && matchesFilter;

    card.classList.toggle("is-hidden", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  if (resourceCount) {
    resourceCount.textContent = String(visibleCount);
  }
}

function getResourceTokens(card) {
  return [
    card.dataset.tags || "",
    card.dataset.platform || ""
  ].join(" ").toLowerCase().split(/\s+/).filter(Boolean);
}

function setupActivityControls() {
  if (expandButton) {
    expandButton.addEventListener("click", () => {
      document.querySelectorAll(".activity").forEach((item) => {
        item.open = true;
      });
    });
  }

  if (collapseButton) {
    collapseButton.addEventListener("click", () => {
      document.querySelectorAll(".activity").forEach((item, index) => {
        item.open = index === 0;
      });
    });
  }
}

function setupPlanner() {
  const planner = document.querySelector("[data-planner]");
  if (!planner) return;

  const choices = Array.from(planner.querySelectorAll("[data-plan-choice]"));
  const cards = Array.from(document.querySelectorAll("[data-plan-card]"));
  const fields = Array.from(planner.querySelectorAll("[data-plan-field]"));
  const content = plannerContent[teacherLanguage] || plannerContent.en;

  function applyPlan(plan) {
    const item = content[plan] || content.secure;
    choices.forEach((choice) => {
      choice.classList.toggle("is-active", choice.dataset.planChoice === plan);
    });
    cards.forEach((card) => {
      card.classList.toggle("is-selected", card.dataset.planCard === plan);
    });
    fields.forEach((field) => {
      const key = field.dataset.planField;
      field.textContent = item[key] || "";
    });
  }

  choices.forEach((choice) => {
    choice.addEventListener("click", () => applyPlan(choice.dataset.planChoice || "secure"));
  });

  cards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.addEventListener("click", () => applyPlan(card.dataset.planCard || "secure"));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      applyPlan(card.dataset.planCard || "secure");
    });
  });

  const activeChoice = choices.find((choice) => choice.classList.contains("is-active"));
  applyPlan(activeChoice?.dataset.planChoice || "secure");
}

function setupRubricRatings() {
  const table = document.querySelector("[data-rubric-table]");
  if (!table) return;

  const rows = Array.from(table.querySelectorAll("tbody tr"));
  const resetButton = document.getElementById("resetRubric");
  const text = rubricUiText[teacherLanguage] || rubricUiText.en;
  const storageKey = `scs-rubric-ratings-${teacherLanguage}`;
  let savedRatings = readSavedRatings(storageKey);

  function saveRatings() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedRatings));
    } catch (error) {
      // Local storage is optional; the table remains interactive without it.
    }
  }

  function applyRating(rowIndex, ratingKey, shouldSave = true) {
    const row = rows[rowIndex];
    if (!row) return;

    const cells = row.querySelectorAll("td");
    const rating = text.ratings.find((item) => item.key === ratingKey);
    if (!rating || cells.length < 4) return;

    cells[1].querySelectorAll(".rating-choice").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.rating === ratingKey);
      button.setAttribute("aria-pressed", String(button.dataset.rating === ratingKey));
    });
    cells[2].textContent = rating.explanation;
    cells[3].textContent = rating.action;
    cells[2].classList.add("is-filled");
    cells[3].classList.add("is-filled");

    if (shouldSave) {
      savedRatings[rowIndex] = ratingKey;
      saveRatings();
    }
  }

  function clearRatings() {
    savedRatings = {};
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length < 4) return;
      cells[1].querySelectorAll(".rating-choice").forEach((button) => {
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      });
      cells[2].textContent = "";
      cells[3].textContent = "";
      cells[2].classList.remove("is-filled");
      cells[3].classList.remove("is-filled");
    });

    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      // Ignore storage failures.
    }
  }

  rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll("td");
    if (cells.length < 4) return;

    const group = createElement("div", "rubric-rating");
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", text.groupLabel(rowIndex));

    text.ratings.forEach((rating) => {
      const button = createElement("button", "rating-choice", rating.label);
      button.type = "button";
      button.dataset.rating = rating.key;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => applyRating(rowIndex, rating.key));
      group.appendChild(button);
    });

    cells[1].replaceChildren(group);

    if (savedRatings[rowIndex]) {
      applyRating(rowIndex, savedRatings[rowIndex], false);
    }
  });

  if (resetButton) {
    resetButton.addEventListener("click", clearRatings);
  }
}

function readSavedRatings(storageKey) {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return value && typeof value === "object" ? value : {};
  } catch (error) {
    return {};
  }
}

function setupPrintExpansion() {
  window.addEventListener("beforeprint", () => {
    const details = Array.from(document.querySelectorAll("details"));
    printOpenState = details.map((item) => item.open);
    details.forEach((item) => {
      item.open = true;
    });
  });

  window.addEventListener("afterprint", () => {
    Array.from(document.querySelectorAll("details")).forEach((item, index) => {
      item.open = printOpenState[index];
    });
  });
}

function renderDocxTables() {
  const container = document.getElementById("docxTables");
  if (!container) return;

  const tables = localizedDocxTables[teacherLanguage] || docxTables;

  tables.forEach((docxTable, index) => {
    const wrap = createElement("article", "docx-table-card");
    wrap.appendChild(createElement("h3", "", docxTable.title || (index === 0 ? "Unit of Work source table" : "Evaluation source table")));

    const scroller = createElement("div", "docx-table-scroll");
    const table = createElement("table", "docx-table");

    docxTable.rows.forEach((row, rowIndex) => {
      const tr = document.createElement("tr");

      row.forEach((cell) => {
        const cellTag = rowIndex === 0 ? "th" : "td";
        const tableCell = document.createElement(cellTag);
        tableCell.colSpan = cell.colspan || 1;
        appendCellText(tableCell, cell.text);
        tr.appendChild(tableCell);
      });

      table.appendChild(tr);
    });

    scroller.appendChild(table);
    wrap.appendChild(scroller);
    container.appendChild(wrap);
  });
}

function appendCellText(cell, text) {
  const lines = String(text || "").split(/\n+/).map((line) => line.trim()).filter(Boolean);

  if (!lines.length) {
    cell.textContent = "";
    return;
  }

  lines.forEach((line) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    cell.appendChild(paragraph);
  });
}
})();
