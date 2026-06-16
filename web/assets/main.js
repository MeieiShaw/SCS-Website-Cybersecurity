(function () {
  const body = document.body;
  const studentButton = document.getElementById("studentMode");
  const printButton = document.getElementById("printPage");
  const menuButton = document.getElementById("menuToggle");
  const navPanel = document.getElementById("primaryNav");
  const expandButton = document.getElementById("expandAll");
  const collapseButton = document.getElementById("collapseAll");
  const searchInput = document.getElementById("resourceSearch");
  const resourceGrid = document.getElementById("resourceGrid");
  const resourceCount = document.getElementById("resourceCount");
  const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
  const resourceCards = resourceGrid ? Array.from(resourceGrid.querySelectorAll(".resource-card")) : [];
  let activeFilter = "all";
  let printOpenState = [];

  function setMenuOpen(isOpen) {
    if (!menuButton || !navPanel) return;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    navPanel.classList.toggle("is-open", isOpen);
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
      const matchesFilter = activeFilter === "all" || haystack.includes(activeFilter.toLowerCase());
      const isVisible = matchesQuery && matchesFilter;

      card.classList.toggle("is-hidden", !isVisible);
      if (isVisible) visibleCount += 1;
    });

    if (resourceCount) {
      resourceCount.textContent = String(visibleCount);
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      applyResourceFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyResourceFilters);
  }

  if (studentButton) {
    studentButton.addEventListener("click", () => {
      const enabled = !body.classList.contains("student-mode");
      body.classList.toggle("student-mode", enabled);
      studentButton.setAttribute("aria-pressed", String(enabled));
    });
  }

  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  if (menuButton && navPanel) {
    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });
  }

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

  applyResourceFilters();
})();
