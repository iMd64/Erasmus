/** Optional browser-local checklist progress. No student data is sent anywhere. */
(() => {
  "use strict";

  const page = document.querySelector(".acceptance-page");
  if (!page) return;

  const items = Array.from(page.querySelectorAll("[data-checklist-item]"));
  const remember = page.querySelector("#remember-checklist");
  const count = page.querySelector("#checklist-count");
  const progress = page.querySelector("#checklist-progress");
  const percentage = page.querySelector("#checklist-percentage");
  const reset = page.querySelector("#reset-checklist");
  const storageNote = page.querySelector("#checklist-storage-note");
  const completion = page.querySelector("#checklist-complete");
  const printButton = page.querySelector("[data-checklist-print]");
  const stageIndex = page.querySelector(".acceptance-stage-nav details");
  const compactIndex = window.matchMedia("(max-width: 991px)");
  const stages = Array.from(page.querySelectorAll(".acceptance-stage"), (stage, index) => ({
    element: stage,
    items: Array.from(stage.querySelectorAll("[data-checklist-item]")),
    status: stage.querySelector("[data-stage-status]"),
    link: page.querySelector(`[data-stage-link][href="#${stage.id}"]`),
    number: String(index + 1).padStart(2, "0"),
  }));
  const storageKey = "iau-after-acceptance-checklist-v1";
  let storageUnavailable = false;

  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (Array.isArray(stored)) {
      const saved = new Set(stored.filter((id) => typeof id === "string"));
      items.forEach((item) => { item.checked = saved.has(item.id); });
      remember.checked = true;
    }
  } catch {
    // Private browsing, disabled storage, and malformed saved data stay usable.
  }

  function update() {
    const completed = items.filter((item) => item.checked).length;
    count.textContent = `${completed} of ${items.length} items complete`;
    progress.max = items.length;
    progress.value = completed;
    percentage.firstChild.textContent = Math.round(completed / items.length * 100);
    stages.forEach((stage) => {
      const done = stage.items.filter((item) => item.checked).length;
      const complete = done === stage.items.length;
      stage.status.textContent = complete ? "Complete" : `${done} of ${stage.items.length} complete`;
      stage.status.hidden = false;
      stage.element.classList.toggle("is-complete", complete);
      stage.link.classList.toggle("is-complete", complete);
      stage.link.querySelector(".acceptance-nav-number").textContent = complete ? "✓" : stage.number;
      stage.link.querySelector(".acceptance-nav-status").textContent = ` — ${stage.status.textContent}`;
    });
    reset.disabled = completed === 0;
    completion.hidden = completed !== items.length;
    storageNote.textContent = storageUnavailable
      ? "Browser storage is unavailable. Progress is kept for this visit only."
      : remember.checked
        ? "Progress is saved on this browser only. Nothing is submitted to IAU."
        : "Progress is kept for this visit. Nothing is submitted to IAU.";
  }

  function save() {
    try {
      if (remember.checked) {
        localStorage.setItem(storageKey, JSON.stringify(items.filter((item) => item.checked).map((item) => item.id)));
      } else {
        localStorage.removeItem(storageKey);
      }
      storageUnavailable = false;
    } catch {
      storageUnavailable = true;
      remember.checked = false;
    }
  }

  items.forEach((item) => item.addEventListener("change", () => {
    if (remember.checked) save();
    update();
  }));
  remember.addEventListener("change", () => { save(); update(); });
  reset.addEventListener("click", () => {
    items.forEach((item) => { item.checked = false; });
    if (remember.checked) save();
    update();
    items[0].focus();
  });
  printButton.addEventListener("click", () => window.print());

  // The same native disclosure is open on desktop and compact on smaller screens.
  // Without JavaScript all seven anchor links remain available.
  function setIndexLayout() { stageIndex.open = !compactIndex.matches; }
  setIndexLayout();
  compactIndex.addEventListener("change", setIndexLayout);
  page.querySelectorAll("[data-stage-link]").forEach((link) => {
    link.addEventListener("click", () => {
      if (compactIndex.matches) stageIndex.open = false;
    });
  });
  // Sources are included in a printed copy even when collapsed on screen.
  const sources = page.querySelector(".acceptance-sources details");
  let sourcesWereOpen = false;
  let printing = false;
  window.addEventListener("beforeprint", () => {
    if (printing) return;
    printing = true;
    sourcesWereOpen = sources.open;
    sources.open = true;
  });
  window.addEventListener("afterprint", () => {
    if (!printing) return;
    sources.open = sourcesWereOpen;
    printing = false;
  });

  page.querySelector("#checklist-controls").hidden = false;
  count.hidden = false;
  printButton.hidden = false;
  update();
})();
