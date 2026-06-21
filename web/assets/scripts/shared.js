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

export function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}
