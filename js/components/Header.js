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
    if (!Array.isArray(this.data) && this.data.length === 0) {
      return false;
    }
    return true;
  }

  isTrueObject(obj, keysCount = 1) {
    if (
      typeof obj !== "object" ||
      obj === null ||
      Array.isArray(obj) ||
      Object.keys(obj).length !== keysCount
    ) {
      return false;
    }
    return true;
  }

  isValidString(str, size = 50) {
    if (
      typeof str !== "string" ||
      str.trim() === "" ||
      str.trim().length > size
    ) {
      return false;
    }
    return true;
  }

  isValidNavItem(item) {
    if (
      !this.isTrueObject(item, 3) ||
      !this.isValidString(item.class) ||
      !this.isValidString(item.href) ||
      !this.isValidString(item.text, 70)
    ) {
      return false;
    }
    return true;
  }

  render() {
    let HTML = "";

    for (const navItem of this.data) {
      if (!this.isValidNavItem(navItem)) {
        continue;
      }
      HTML += `<a class="${navItem.class}" href="${navItem.href}">${navItem.text}</a>`;
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
