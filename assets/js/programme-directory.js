(() => {
  const form = document.getElementById("directory-filters");
  if (!form) return;
  const cards = Array.from(document.querySelectorAll(".directory-card"));
  const query = form.elements.namedItem("query");
  const country = form.elements.namedItem("country");
  const season = form.elements.namedItem("season");
  const count = document.getElementById("directory-count");
  const empty = document.getElementById("directory-empty");
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const searchable = new Map(cards.map(card => [card, normalize(card.textContent)]));
  function update() {
    const terms = normalize(query.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const card of cards) {
      const matches = (!country.value || country.value === card.dataset.country) &&
        (!season.value || season.value === card.dataset.season) &&
        terms.every(term => searchable.get(card).includes(term));
      card.hidden = !matches;
      if (matches) visible++;
    }
    count.textContent = visible + " of " + cards.length + " programmes";
    empty.hidden = visible > 0;
  }
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  form.addEventListener("submit", event => event.preventDefault());
  form.addEventListener("reset", () => requestAnimationFrame(update));
  document.getElementById("directory-clear").addEventListener("click", () => {
    form.reset();
    query.focus();
  });
  function openLinkedProgramme() {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (!target || !target.classList.contains("directory-card")) return;
    form.reset();
    update();
    target.open = true;
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }
  window.addEventListener("hashchange", openLinkedProgramme);
  update();
  form.hidden = false;
  openLinkedProgramme();
})();
