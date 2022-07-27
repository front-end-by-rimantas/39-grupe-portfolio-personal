
/*<div class="single-service col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="fa fa-pie-chart service-icon""></div>
        <a href="#">
          <h3>Web design</h3>
        </a>
        <p class="service-p">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
      </div>*/


class Services {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()
            || !this.findTargetElement()
            || !this.isValidData()) {
                return false
            }
            this.render() ;
    }

    isValidSelector() {
        if(typeof this.selector !== 'string'
            || this.selector === '') {
            return false ;
        } 
        return true ; 
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidData() {
        if(!Array.isArray(this.data)) {
            return false ;
        }
        return true ;
    }

    isTrueObject(obj, keysCount = 1) {
        if (typeof obj !== 'object'
            || obj === null
            || Array.isArray(obj)
            || Object.keys(obj).length !== keysCount) {
            return false;
        }
        return true;
    }

    isValidString(str, size = 20) {
        if (typeof str !== 'string'
            || str.trim() === ''
            || str.trim().length > size) {
            return false;
        }
        return true;
    }

    isValidServiceItem(item) {
        if (!this.isTrueObject(item, 3)
            || !this.isValidString(item.icon)
            || !this.isValidString(item.tittle)
            || !this.isValidString(item.desc, 150)
            ) {
            return false;
        }
        return true;
    }

    render() {

        let servicesHTML = '';
        for (const serviceItem of this.data) {

            if (!this.isValidServiceItem(serviceItem)) {
                continue;
            }

            servicesHTML += `<div class="single-service col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="fa fa-${serviceItem.icon} service-icon"></div>
            <a href="#">
              <h3>${serviceItem.tittle}</h3>
            </a>
            <p class="service-p">${serviceItem.desc}</p>
          </div>`;
        }
        this.DOM.innerHTML = servicesHTML; 
    }
}

export { Services }