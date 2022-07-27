class Navigation {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  renderDesktop() {
    let HTML = "";

    for (const dataItem of this.data) {
      HTML += `<li class="flex-align-center">
              <a class="navigation-link" href="${dataItem.href}">${dataItem.text}</a>
            </li>`;
    }
    const DOM = document.querySelector(this.selector);
    DOM.innerHTML = HTML;
  }
  renderMobile() {
    let HTML = "";

    for (const dataItem of this.data) {
      HTML += `<li><a class="mobile-nav-link" href="${dataItem.href}">${dataItem.text}</a></li>`;
    }

    const DOM = document.querySelector(this.selector);
    DOM.innerHTML = HTML;
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
      if (window.scrollY > 200) {
        navEl.classList.add("scrolled-navigation");
      } else {
        navEl.classList.remove("scrolled-navigation");
      }
    };
  }
}

export { Navigation };
