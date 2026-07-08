(function () {
function setupMenu() {
  const menuButton = document.getElementById("menuToggle");
  const navPanel = document.getElementById("primaryNav");

  function setMenuOpen(isOpen) {
    if (!menuButton || !navPanel) return;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    navPanel.classList.toggle("is-open", isOpen);
  }

  if (!menuButton || !navPanel) return;

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
}

function setupPrint() {
  const printButton = document.getElementById("printPage");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
}

function setupBackToTop() {
  const isChinesePage = document.documentElement.lang.toLowerCase().startsWith("zh");
  const label = isChinesePage ? "回到顶部" : "Back to top";
  let buttons = Array.from(document.querySelectorAll(".back-to-top"));

  if (!buttons.length) {
    const button = createElement("a", "back-to-top");
    const icon = createElement("span", "material-symbols-outlined", "arrow_upward");
    const text = createElement("span", "sr-only", label);

    icon.setAttribute("aria-hidden", "true");
    button.href = "#";
    button.setAttribute("role", "button");
    button.append(icon, text);
    document.body.appendChild(button);
    buttons = [button];
  }

  buttons.forEach((button) => {
    if (button.dataset.backToTopReady === "true") return;

    if (button instanceof HTMLButtonElement) {
      button.type = "button";
    } else if (button instanceof HTMLAnchorElement && !button.getAttribute("href")) {
      button.href = "#";
    }

    button.setAttribute("aria-label", button.getAttribute("aria-label") || label);
    button.setAttribute("title", button.getAttribute("title") || label);
    button.dataset.backToTopReady = "true";

    button.addEventListener("click", (event) => {
      event.preventDefault();
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollPageToTop(prefersReducedMotion);
    });
  });
}

function scrollPageToTop(prefersReducedMotion) {
  const behavior = prefersReducedMotion ? "auto" : "smooth";
  const scrollRoots = [
    document.scrollingElement,
    document.documentElement,
    document.body
  ].filter(Boolean);

  try {
    window.scrollTo({ top: 0, left: 0, behavior });
  } catch (error) {
    window.scrollTo(0, 0);
  }

  scrollRoots.forEach((root) => {
    if (typeof root.scrollTo === "function") {
      try {
        root.scrollTo({ top: 0, left: 0, behavior });
      } catch (error) {
        root.scrollTop = 0;
        root.scrollLeft = 0;
      }
    } else {
      root.scrollTop = 0;
      root.scrollLeft = 0;
    }
  });

  if (prefersReducedMotion) return;

  window.requestAnimationFrame(() => {
    scrollRoots.forEach((root) => {
      root.scrollTop = 0;
      root.scrollLeft = 0;
    });
  });
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

window.scsShared = {
  createElement,
  setupBackToTop,
  setupMenu,
  setupPrint
};
})();
