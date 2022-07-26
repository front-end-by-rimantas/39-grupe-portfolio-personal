const hamburgerEl = document.querySelector(".navigation-hamburger");
const closeEl = document.querySelector(".close-icon");
const mobileOverlayEl = document.querySelector(".mobile-nav-overlay");
const mobileNavEl = document.querySelector(".mobile-nav");
const bodyEl = document.body;

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.add("hidden");
  closeEl.classList.remove("hidden");
  mobileOverlayEl.classList.remove("hidden");
  mobileNavEl.classList.remove("hidden");
  bodyEl.style.overflow = "hidden";
});

function closeMobileNav() {
  hamburgerEl.classList.remove("hidden");
  closeEl.classList.add("hidden");
  mobileOverlayEl.classList.add("hidden");
  mobileNavEl.classList.add("hidden");
  bodyEl.style.overflow = "visible";
}

closeEl.addEventListener("click", () => {
  closeMobileNav();
});

mobileOverlayEl.addEventListener("click", () => {
  closeMobileNav();
});
