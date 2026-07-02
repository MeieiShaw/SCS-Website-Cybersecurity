export function setupMenu() {
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

export function setupPrint() {
  const printButton = document.getElementById("printPage");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
}

export function setupBackToTop() {
  const isChinesePage = document.documentElement.lang.toLowerCase().startsWith("zh");
  const label = isChinesePage ? "回到顶部" : "Back to top";
  const button = createElement("button", "back-to-top");
  const icon = createElement("span", "material-symbols-outlined", "keyboard_arrow_up");
  const text = createElement("span", "", label);

  icon.setAttribute("aria-hidden", "true");
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.setAttribute("title", label);
  button.append(icon, text);
  document.body.appendChild(button);

  const toggleButton = () => {
    button.classList.toggle("is-visible", window.scrollY > 420);
  };

  button.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
}

export function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}
