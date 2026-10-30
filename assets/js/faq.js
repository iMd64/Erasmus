/** Native disclosures work without JavaScript; this adds group and print controls. */
(() => {
  "use strict";
  const page = document.querySelector(".faq-page");
  if (!page) return;

  const questions = Array.from(page.querySelectorAll(".faq-item"));
  const toggleAll = page.querySelector("#faq-toggle-all");
  const sources = page.querySelector(".faq-sources details");
  let printState = null;

  function updateControl() {
    const allOpen = questions.every((question) => question.open);
    toggleAll.textContent = allOpen ? "Collapse all answers" : "Expand all answers";
    toggleAll.setAttribute("aria-expanded", String(allOpen));
  }

  toggleAll.addEventListener("click", () => {
    const open = !questions.every((question) => question.open);
    questions.forEach((question) => { question.open = open; });
    updateControl();
  });
  questions.forEach((question) => question.addEventListener("toggle", updateControl));

  // Links to a specific question reveal the answer as well as scrolling to it.
  function revealLinkedQuestion() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const question = document.getElementById(id);
    if (question?.matches(".faq-item") && page.contains(question)) question.open = true;
  }
  window.addEventListener("hashchange", revealLinkedQuestion);
  revealLinkedQuestion();

  window.addEventListener("beforeprint", () => {
    if (printState) return;
    printState = [...questions, sources].map((item) => ({ item, open: item.open }));
    printState.forEach(({ item }) => { item.open = true; });
  });
  window.addEventListener("afterprint", () => {
    if (!printState) return;
    printState.forEach(({ item, open }) => { item.open = open; });
    printState = null;
    updateControl();
  });

  toggleAll.hidden = false;
  updateControl();
})();
