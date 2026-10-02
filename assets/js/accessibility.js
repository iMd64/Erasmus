/** Accessibility controls retained from the saved page, without dependencies. */
(() => {
  "use strict";

  function initialize() {
    const launcher = document.getElementById("a11yFab");
    const panel = document.getElementById("a11yPanel");
    if (!launcher || !panel || panel.dataset.initialized) return;
    panel.dataset.initialized = "true";
    const closeButton = panel.querySelector(".a11y-close");
    const resetButton = document.getElementById("a11yReset");
    const guide = document.getElementById("a11yGuide");
    const mask = document.getElementById("a11yMask");
    const buttons = Array.from(panel.querySelectorAll(".a11y-item[data-key]"));
    const saturationOptions = ["desaturate", "low-saturate", "high-saturate"];
    const pointerOptions = ["cursor", "guide", "mask"];
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const speech = window.speechSynthesis;
    const hasSpeech = Boolean(speech)
      && typeof window.SpeechSynthesisUtterance === "function"
      && typeof speech.cancel === "function"
      && typeof speech.speak === "function"
      && typeof speech.getVoices === "function";
    const settings = new Map();
    let speechTimer;

    // Storage can be unavailable for file URLs or restricted browser profiles.
    // Controls still work in memory when preferences cannot be persisted.
    function readSetting(key) {
      try { return window.localStorage.getItem(`a11y_${key}`) === "1"; }
      catch { return false; }
    }

    function saveSetting(key, on) {
      try {
        if (on) window.localStorage.setItem(`a11y_${key}`, "1");
        else window.localStorage.removeItem(`a11y_${key}`);
      } catch { /* The current setting remains active for this visit. */ }
    }

    function setPanelOpen(open, restoreFocus = true) {
      panel.classList.toggle("open", open);
      panel.inert = !open;
      panel.setAttribute("aria-hidden", String(!open));
      // This is a non-modal panel; the rest of the document remains usable.
      panel.setAttribute("aria-modal", "false");
      launcher.setAttribute("aria-expanded", String(open));
      if (open) closeButton?.focus();
      else if (restoreFocus) launcher.focus();
    }

    function setSetting(key, on, persist = true) {
      settings.set(key, on);
      const button = buttons.find((item) => item.dataset.key === key);
      if (button) {
        button.dataset.active = String(on);
        button.setAttribute("aria-pressed", String(on));
      }
      if (key === "guide" && guide) guide.hidden = !on;
      else if (key === "mask" && mask) mask.hidden = !on;
      else if (key === "reader") {
        window.clearTimeout(speechTimer);
        if (hasSpeech) speech.cancel();
      } else document.documentElement.classList.toggle(`a11y-${key}`, on);
      if (persist) saveSetting(key, on);
    }

    function speak(text) {
      if (!hasSpeech || !settings.get("reader")) return;
      const trimmed = text.trim();
      if (trimmed.length < 2 || trimmed.length > 5000) return;
      speech.cancel();
      const utterance = new SpeechSynthesisUtterance(trimmed);
      utterance.lang = document.documentElement.lang || "en";
      const voice = speech.getVoices().find((item) => /^en/i.test(item.lang));
      if (voice) utterance.voice = voice;
      speech.speak(utterance);
    }

    buttons.forEach((button) => {
      const key = button.dataset.key;
      const unavailable = (key === "reader" && !hasSpeech)
        || (pointerOptions.includes(key) && coarsePointer.matches);
      if (unavailable) {
        button.disabled = true;
        button.title = key === "reader"
          ? "Speech is not available in this browser."
          : "This option requires a mouse or trackpad.";
      }
      // Keep only one saved saturation filter active at a time.
      let saved = !unavailable && readSetting(key);
      if (saved && saturationOptions.includes(key)) {
        saved = !saturationOptions.some((option) => settings.get(option));
      }
      setSetting(key, saved, false);
      button.addEventListener("click", () => {
        const enabled = !settings.get(key);
        if (enabled && saturationOptions.includes(key)) {
          saturationOptions.forEach((other) => {
            if (other !== key) setSetting(other, false);
          });
        }
        setSetting(key, enabled);
      });
    });

    launcher.addEventListener("click", () => setPanelOpen(!panel.classList.contains("open")));
    closeButton?.addEventListener("click", () => setPanelOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("open")) setPanelOpen(false);
    });
    document.addEventListener("click", (event) => {
      if (panel.contains(event.target) || launcher.contains(event.target)) return;
      if (panel.classList.contains("open")) setPanelOpen(false, false);
      if (settings.get("reader")) {
        const selectedText = window.getSelection()?.toString().trim();
        if (!selectedText && event.target instanceof HTMLElement) {
          const text = event.target.innerText || "";
          if (text.length < 1000) speak(text);
        }
      }
    });
    document.addEventListener("selectionchange", () => {
      if (!settings.get("reader")) return;
      window.clearTimeout(speechTimer);
      speechTimer = window.setTimeout(() => {
        const selection = window.getSelection();
        if (!selection || panel.contains(selection.anchorNode)) return;
        speak(selection.toString());
      }, 250);
    });
    document.addEventListener("pointermove", (event) => {
      if (guide && settings.get("guide")) guide.style.top = `${event.clientY}px`;
      if (mask && settings.get("mask")) {
        mask.style.transform = `translateY(${event.clientY - mask.clientHeight / 2}px)`;
      }
    });
    resetButton?.addEventListener("click", () => {
      buttons.forEach((button) => setSetting(button.dataset.key, false));
    });
    setPanelOpen(false, false);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
