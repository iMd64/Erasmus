(() => {
  const filters = document.getElementById("experience-filters");
  const stories = Array.from(document.querySelectorAll("#experience-story-list .experience-card"));
  if (!filters || !stories.length) return;

  const type = filters.elements.namedItem("type");
  const country = filters.elements.namedItem("country");
  const resultCount = document.getElementById("experience-result-count");
  const empty = document.getElementById("experience-no-results");
  const countries = new Set(stories.map(story => story.dataset.storyCountry));
  for (const name of [...countries].filter(Boolean).sort((a, b) => a.localeCompare(b))) {
    country.add(new Option(name, name));
  }

  function filterStories() {
    let count = 0;
    for (const story of stories) {
      const matchesType = !type.value || story.dataset.storyType === type.value;
      const matchesCountry = !country.value || story.dataset.storyCountry === country.value;
      story.hidden = !(matchesType && matchesCountry);
      if (!story.hidden) count += 1;
    }
    resultCount.textContent = `${count} of ${stories.length} stories`;
    empty.hidden = count > 0;
  }

  filters.addEventListener("change", filterStories);
  filters.addEventListener("submit", event => event.preventDefault());
  filters.addEventListener("reset", () => requestAnimationFrame(filterStories));
  filterStories();
  filters.hidden = false;
  resultCount.hidden = false;
})();
