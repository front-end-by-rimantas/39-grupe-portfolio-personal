
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

    render() {

        let servicesHTML = '';
        for (const serviceItem of this.data) {
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