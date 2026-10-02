/**
 * Interactions for the saved university page.
 * Works when index.html is opened directly; no libraries or build step required.
 */
(() => {
  "use strict";

  function initialize() {
    initializeNavigation();
    initializeSidebar();
    initializeSearch();
    initializeCarousel();
  }

  /** Get a direct child without accidentally matching a nested menu's element. */
  function child(element, selector) {
    return Array.from(element.children).find((item) => item.matches(selector));
  }

  function initializeNavigation() {
    const menu = document.querySelector(".menu-top .menu");
    const list = menu && child(menu, "ul");
    if (!list || menu.dataset.initialized) return;
    menu.dataset.initialized = "true";
    menu.classList.add("site-menu");
    list.id ||= "university-navigation";

    const mobileButton = document.createElement("button");
    mobileButton.type = "button";
    mobileButton.className = "site-menu-toggle";
    mobileButton.textContent = "☰ Menu";
    mobileButton.setAttribute("aria-controls", list.id);
    mobileButton.setAttribute("aria-expanded", "false");
    menu.insertBefore(mobileButton, list);

    const dropdowns = [];
    Array.from(list.children).forEach((item, index) => {
      const submenu = child(item, "ul");
      const link = child(item, "a");
      if (!submenu || !link) return;

      const label = link.textContent.trim();
      const isPlaceholder = /#$/.test(link.getAttribute("href") || "");
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "site-submenu-toggle";
      toggle.textContent = isPlaceholder ? label : "▾";
      toggle.setAttribute("aria-label", `${label} submenu`);
      toggle.setAttribute("aria-expanded", "false");
      submenu.id ||= `university-submenu-${index + 1}`;
      toggle.setAttribute("aria-controls", submenu.id);
      submenu.hidden = true;
      item.classList.add("site-menu-parent");
      submenu.style.setProperty("--menu-columns", String(submenu.children.length));
      if (!submenu.querySelector("ul")) submenu.classList.add("normal-sub");

      if (isPlaceholder) link.replaceWith(toggle);
      else {
        item.classList.add("site-menu-linked-parent");
        link.after(toggle);
      }

      const dropdown = { item, toggle, submenu };
      dropdowns.push(dropdown);
      toggle.addEventListener("click", () => {
        const shouldOpen = submenu.hidden;
        closeDropdowns();
        setDropdown(dropdown, shouldOpen);
      });
    });

    function setDropdown({ item, toggle, submenu }, open) {
      item.classList.toggle("site-submenu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      submenu.hidden = !open;
    }

    function closeDropdowns() {
      dropdowns.forEach((dropdown) => setDropdown(dropdown, false));
    }

    function closeMobileMenu() {
      mobileButton.setAttribute("aria-expanded", "false");
      list.classList.remove("site-navigation-open");
      closeDropdowns();
    }

    mobileButton.addEventListener("click", () => {
      const open = mobileButton.getAttribute("aria-expanded") !== "true";
      mobileButton.setAttribute("aria-expanded", String(open));
      list.classList.toggle("site-navigation-open", open);
      if (!open) closeDropdowns();
    });

    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target)) closeMobileMenu();
    });

    menu.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const openDropdown = dropdowns.find(({ submenu }) => !submenu.hidden);
      if (openDropdown) {
        closeDropdowns();
        openDropdown.toggle.focus();
      } else if (mobileButton.getAttribute("aria-expanded") === "true") {
        closeMobileMenu();
        mobileButton.focus();
      }
    });

    const mobileViewport = window.matchMedia("(max-width: 1000px)");
    mobileViewport.addEventListener("change", closeMobileMenu);
  }

  function initializeSidebar() {
    const sidebar = document.getElementById("sol-menu");
    if (!sidebar || sidebar.dataset.initialized) return;
    sidebar.dataset.initialized = "true";

    sidebar.querySelectorAll("li").forEach((item, index) => {
      const submenu = child(item, "ul");
      const link = child(item, "a");
      if (!submenu || !link) return;
      submenu.id ||= `section-submenu-${index + 1}`;
      item.classList.add("site-sidebar-parent");

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "site-sidebar-toggle";
      toggle.textContent = "▾";
      toggle.setAttribute("aria-label", `${link.textContent.trim()} submenu`);
      toggle.setAttribute("aria-controls", submenu.id);
      // The saved sidebar shows its child pages immediately.
      toggle.setAttribute("aria-expanded", "true");
      link.after(toggle);
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(open));
        submenu.hidden = !open;
        toggle.textContent = open ? "▾" : "▸";
      });
    });
  }

  function initializeSearch() {
    const inputs = document.querySelectorAll(
      '.cd-main-header input[name="search"], .cd-main-header input[name="q"]',
    );
    inputs.forEach((input) => {
      input.setAttribute("aria-label", "Search the university website");
      input.placeholder = "Search…";
      const submitSearch = (event) => {
        event.preventDefault();
        const query = input.value.trim();
        if (!query) return;
        const destination = new URL("https://www.aydin.edu.tr/search/Pages/default.aspx");
        destination.searchParams.set("q", query);
        window.location.assign(destination.href);
      };
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") submitSearch(event);
      });
      const form = input.closest("form");
      if (form) form.addEventListener("submit", submitSearch);
    });
  }

  function initializeCarousel() {
    const track = document.getElementById("footercarousel-track");
    const wrapper = document.querySelector(".footercarousel-wrapper");
    const container = document.querySelector(".footercarousel-container");
    if (!track || !wrapper || !container || container.dataset.initialized) return;
    const items = Array.from(track.querySelectorAll(".footercarousel-item"));
    if (!items.length) return;
    container.dataset.initialized = "true";
    container.setAttribute("aria-label", "University partners; use left and right arrow keys to browse");
    container.setAttribute("aria-roledescription", "carousel");
    container.tabIndex = 0;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let index = 0;
    let autoplayTimer;
    let pointer = null;
    let suppressClick = false;
    let hovered = false;
    let focused = false;

    function itemsPerView() {
      if (window.innerWidth >= 1024) return 6;
      if (window.innerWidth >= 768) return 4;
      return 2;
    }

    function maxIndex() {
      return Math.max(0, items.length - itemsPerView());
    }

    function slideWidth() {
      return wrapper.clientWidth / itemsPerView();
    }

    function position(animate = true) {
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.transition = animate && !reducedMotion.matches ? "transform 0.3s ease-out" : "none";
      track.style.transform = `translateX(${-index * slideWidth()}px)`;
    }

    function stopAutoplay() {
      window.clearInterval(autoplayTimer);
    }

    function startAutoplay() {
      stopAutoplay();
      if (reducedMotion.matches || document.hidden || hovered || focused || pointer || maxIndex() === 0) return;
      autoplayTimer = window.setInterval(() => {
        index = index < maxIndex() ? index + 1 : 0;
        position();
      }, 3000);
    }

    track.addEventListener("dragstart", (event) => event.preventDefault());
    track.addEventListener("pointerdown", (event) => {
      if (!event.isPrimary || event.button !== 0) return;
      stopAutoplay();
      suppressClick = false;
      pointer = { id: event.pointerId, x: event.clientX, delta: 0, moved: false };
      track.style.transition = "none";
      track.style.cursor = "grabbing";
    });
    track.addEventListener("pointermove", (event) => {
      if (!pointer || event.pointerId !== pointer.id) return;
      pointer.delta = event.clientX - pointer.x;
      if (Math.abs(pointer.delta) > 5) {
        pointer.moved = true;
        if (!track.hasPointerCapture(pointer.id)) track.setPointerCapture(pointer.id);
      }
      if (pointer.moved) {
        track.style.transform = `translateX(${-index * slideWidth() + pointer.delta}px)`;
      }
    });

    function finishDrag(event) {
      if (!pointer || event.pointerId !== pointer.id) return;
      const width = slideWidth();
      if (width > 0 && event.type !== "pointercancel") index -= Math.round(pointer.delta / width);
      suppressClick = pointer.moved;
      const pointerId = pointer.id;
      pointer = null;
      if (track.hasPointerCapture(pointerId)) track.releasePointerCapture(pointerId);
      track.style.cursor = "grab";
      position();
      startAutoplay();
      // A click generated by this pointer release must not activate a dragged link.
      window.setTimeout(() => { suppressClick = false; }, 0);
    }

    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
    track.addEventListener("click", (event) => {
      if (suppressClick) event.preventDefault();
    }, true);
    container.addEventListener("mouseenter", () => { hovered = true; stopAutoplay(); });
    container.addEventListener("mouseleave", () => { hovered = false; startAutoplay(); });
    container.addEventListener("focusin", () => { focused = true; stopAutoplay(); });
    container.addEventListener("focusout", (event) => {
      focused = container.contains(event.relatedTarget);
      startAutoplay();
    });
    container.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      index += event.key === "ArrowRight" ? 1 : -1;
      position();
    });
    window.addEventListener("resize", () => { position(false); startAutoplay(); });
    document.addEventListener("visibilitychange", startAutoplay);
    reducedMotion.addEventListener("change", () => { position(false); startAutoplay(); });
    position(false);
    startAutoplay();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
