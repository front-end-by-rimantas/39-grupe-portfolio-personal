class Stats {
    constructor(selector, data) {
        this.selector=selector;
        this.data=data;
        this.DOM=null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()
        || !this.findTargetElement()
        || !this.isValidData()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string'
        || this.selector === '') {
            return false;
        }
        return true;

    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
        //ARBA
        /*return this.DOM ? true : false;*/
        //ARBA
        /*if (this.DOM) {
            return true;
        } else {
            return false
        }*/
    }

    isValidData() {
        if (!Array.isArray(this.data)
            || this.data.length<1) {
            return false;
        }
        return true;
    }

    /*isTrueObject(obj, keysCount = 1) {
        if (typeof obj !== 'object'
        || obj === null
        || Array.isArray(obj)
        || Object.keys(obj).length !== keysCount) {
            return false
        }
        return true
    }*/

    isValidString (str) {
        if (typeof str.number !== 'string'
            || str.number === '') {
                return false;
            }
            return true;
    }

    isValidStatsItem(item) {
        if (//this.isTrueObject(item, 2)
            //ARBA
            typeof item !== 'object'
            || item === null
            || Array.isArray(item)
            //|| Object.keys(item).length < 2
            //|| Object.keys(item).length < 2
            //ARBA
            || Object.keys(item).length !== 2
            || this.isValidString(item.number)
            || this.isValidString(item.countertext, 20)) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';

        /*for (let i=0; i<this.data.length; i++ ) {
            const statsItem = this.data[i];
            HTML += `<div class="stats-content col-12 col-md-6 col-lg-3">
            <h2>${statsItem.number}</h2>
            <p>${statsItem.countertext}</p>
          </div>`;
        }*/

        for (const statsItem of this.data ) {
            if (!this.isValidStatsItem(statsItem)) {
                continue;
            }

        HTML += `<div class="stats-content col-12 col-md-6 col-lg-3">
            <h2>${statsItem.number}</h2>
            <p>${statsItem.countertext}</p>
          </div>`;
        }

        //const DOM = document.getElementById('stats_block');
        this.DOM.innerHTML = HTML;

    }



}

export { Stats }