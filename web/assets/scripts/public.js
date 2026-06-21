import { learningRoutes, publicScenarios, quizQuestions } from "../data/unit-content.js";
import { createElement, setupMenu, setupPrint } from "./shared.js";

setupMenu();
setupPrint();
renderRoutes();
renderScenarios();
setupQuiz();

function renderRoutes() {
  const grid = document.getElementById("publicRouteGrid");
  if (!grid) return;

  learningRoutes.forEach((route) => {
    const card = createElement("article", `route route--${route.tone}`);
    card.appendChild(createElement("span", "route-code", route.code));

    const heading = createElement("h3");
    heading.textContent = `${route.title} `;
    const zh = createElement("span", "", route.chinese);
    zh.setAttribute("lang", "zh-Hans");
    heading.appendChild(zh);
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

  publicScenarios.forEach((scenario) => {
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

  let currentIndex = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    const item = quizQuestions[currentIndex];
    answered = false;
    status.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
    question.textContent = item.prompt;
    feedback.textContent = "";
    options.innerHTML = "";
    nextButton.disabled = true;
    nextButton.hidden = currentIndex === quizQuestions.length - 1;
    restartButton.hidden = true;

    item.choices.forEach((choice, index) => {
      const button = createElement("button", "quiz-choice", choice);
      button.type = "button";
      button.addEventListener("click", () => handleAnswer(index, button));
      options.appendChild(button);
    });
  }

  function handleAnswer(index, selectedButton) {
    if (answered) return;
    answered = true;

    const item = quizQuestions[currentIndex];
    const correct = index === item.answer;
    if (correct) score += 1;

    Array.from(options.children).forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === item.answer) button.classList.add("is-correct");
    });

    if (!correct) selectedButton.classList.add("is-wrong");
    feedback.textContent = correct ? item.feedback : `再想一想。${item.feedback}`;

    if (currentIndex === quizQuestions.length - 1) {
      status.textContent = `Score ${score} of ${quizQuestions.length}`;
      restartButton.hidden = false;
    } else {
      nextButton.disabled = false;
    }
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < quizQuestions.length - 1) {
      currentIndex += 1;
      renderQuestion();
    }
  });

  restartButton.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    renderQuestion();
  });

  renderQuestion();
}
