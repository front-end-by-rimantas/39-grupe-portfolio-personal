
/*<div class="single-service col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="fa fa-pie-chart service-icon""></div>
        <a href="#">
          <h3>Web design</h3>
        </a>
        <p class="service-p">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
      </div>*/


class Services {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
        //this.data = data;

        this.init();
    }

    init() {
        if (!this.isValidSelector()
            || !this.findTargetElement()
            /*|| !this.validData()*/) {
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



    render() {

        let servicesHTML = '';
        for (let i= 0; i < 6; i++) {
            servicesHTML += `<div class="single-service col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="fa fa-pie-chart service-icon""></div>
            <a href="#">
              <h3>Web design</h3>
            </a>
            <p class="service-p">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
          </div>`;
        }

        //const DOM = document.getElementById(this.selector);
        this.DOM.innerHTML = servicesHTML; 

    }




}

export { Services }