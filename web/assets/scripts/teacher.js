import { docxTables } from "../data/docx-tables.js";
import { createElement, setupMenu, setupPrint } from "./shared.js";

const body = document.body;
const studentButton = document.getElementById("studentMode");
const expandButton = document.getElementById("expandAll");
const collapseButton = document.getElementById("collapseAll");
const searchInput = document.getElementById("resourceSearch");
const resourceGrid = document.getElementById("resourceGrid");
const resourceCount = document.getElementById("resourceCount");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const resourceCards = resourceGrid ? Array.from(resourceGrid.querySelectorAll(".resource-card")) : [];
let activeFilter = "all";
let printOpenState = [];

setupMenu();
setupPrint();
setupStudentMode();
setupResourceFilters();
setupActivityControls();
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

  applyResourceFilters();
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

  docxTables.forEach((docxTable, index) => {
    const wrap = createElement("article", "docx-table-card");
    wrap.appendChild(createElement("h3", "", index === 0 ? "Unit of Work source table" : "Evaluation source table"));

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
