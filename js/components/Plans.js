class Plans {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.DOM = null;

    this.init();
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

  isValidPlansItem(item) {
    if (
      !this.isTrueObject(item, 6) ||
      !this.isValidString(item.planName, 20) ||
      !this.isValidString(item.planTarget, 20) ||
      !this.isValidString(item.first_Benefit, 40) ||
      !this.isValidString(item.sec_Benefit, 40) ||
      !this.isValidString(item.third_Benefit, 40)
    ) {
      return false;
    }
    return true;
  }

  render() {
    let HTML = "";

    for (let i = 0; i < this.data.length; i++) {
      if (!this.isValidPlansItem(this.data[i])) {
        continue;
      }
      HTML += `<div class="col-lg-3 pricing-box">
          <div class="plan-number">${i < 9 ? "0" + (i + 1) : i + 1}</div>
          <h3 class="plan-name">${this.data[i].planName}</h3>
          <p class="plan-target-client">${this.data[i].planTarget}</p>
          <div class="benefits-box">
            <p class="benefit">${this.data[i].first_Benefit}</p>
            <p class="benefit">${this.data[i].sec_Benefit_Benefit}</p>
            <p class="benefit">${this.data[i].third_Benefit}</p>
          </div>
          <h2 class="price">${this.data[i].price}</h2>
          <a href="#" class="btn cta-plan">Buy now</a>
        </div>`;
    }
    this.DOM.innerHTML = HTML;
  }
}

export { Plans };
