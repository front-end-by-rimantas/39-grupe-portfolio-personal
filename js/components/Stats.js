class Stats {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.DOM = null;

    this.init();

    this.animationOnScroll();
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
    if (!Array.isArray(this.data) || this.data.length < 1) {
      return false;
    }
    return true;
  }

  isValidString(str) {
    if (typeof str.number !== "string" || str.number === "") {
      return false;
    }
    return true;
  }

  isValidStatsItem(item) {
    if (
      typeof item !== "object" ||
      item === null ||
      Array.isArray(item) ||
      Object.keys(item).length !== 2 ||
      this.isValidString(item.number) ||
      this.isValidString(item.countertext, 20)
    ) {
      return false;
    }
    return true;
  }

  render() {
    let HTML = "";

    for (const statsItem of this.data) {
      if (!this.isValidStatsItem(statsItem)) {
        continue;
      }

      HTML += `<div class="stats-content col-12 col-md-6 col-lg-3">
            <h2 class="number" data-val="${statsItem.number}">${statsItem.number}</h2>
            <p>${statsItem.countertext}</p>
          </div>`;
    }
    this.DOM.innerHTML = HTML;
  }

  animationOnScroll() {
    let CounterObserver = new IntersectionObserver(
      (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;
        if (entry.intersectionRatio > 0.3) {
          observer.unobserve(entry.target);
        }

        const counters = document.querySelectorAll(".number");

        counters.forEach((counter) => {
          counter.innerText = "0";

          const updateCounter = () => {
            const target = +counter.getAttribute("data-val");
            const c = +counter.innerText;
            const increment = target / 150;

            if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              setTimeout(updateCounter, 1);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    CounterObserver.observe(stats_block);
  }
}

export { Stats };
