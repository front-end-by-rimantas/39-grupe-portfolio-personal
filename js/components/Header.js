class Navigation {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.DOM = null;

    this.init();
    this.enableMobileNav();
    this.navigationShadow();
  }

  init() {
    if (
      !this.isValidSelector() ||
      !this.findTargetElement() ||
      !this.isValidData()
    ) {
      return false;
    }
    this.render();
  }

  isValidSelector() {
    if (typeof this.selector !== "string" || this.selector === "") {
      return false;
    }
    return true;
  }

  findTargetElement() {
    this.DOM = document.querySelector(this.selector);
    return !!this.DOM;
  }

  isValidData() {
    if (!Array.isArray(this.data)) {
      return false;
    }
    return true;
  }

  render() {
    let HTML = "";

    for (const dataItem of this.data) {
      HTML += `<a class="${dataItem.class}" href="${dataItem.href}">${dataItem.text}</a>`;
    }
    this.DOM.innerHTML = HTML;
  }

  enableMobileNav() {
    const hamburgerEl = document.querySelector(".navigation-hamburger");
    const closeEl = document.querySelector(".close-icon");
    const mobileOverlayEl = document.querySelector(".mobile-nav-overlay");
    const mobileNavEl = document.querySelector(".mobile-nav");
    const bodyEl = document.body;

    hamburgerEl.addEventListener("click", () => {
      hamburgerEl.classList.add("hidden");
      closeEl.classList.remove("hidden");
      mobileOverlayEl.classList.remove("hidden");
      mobileNavEl.classList.add("active");
      bodyEl.style.overflow = "hidden";
    });

    function closeMobileNav() {
      hamburgerEl.classList.remove("hidden");
      closeEl.classList.add("hidden");
      mobileOverlayEl.classList.add("hidden");
      mobileNavEl.classList.remove("active");
      bodyEl.style.overflow = "visible";
    }

    closeEl.addEventListener("click", () => {
      closeMobileNav();
    });

    mobileOverlayEl.addEventListener("click", () => {
      closeMobileNav();
    });
  }

  navigationShadow() {
    const navEl = document.querySelector(".header");

    window.onscroll = function () {
      if (window.scrollY > 100) {
        navEl.classList.add("scrolled-navigation");
      } else {
        navEl.classList.remove("scrolled-navigation");
      }
    };
  }
}

export { Navigation };
