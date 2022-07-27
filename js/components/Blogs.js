
/*
<div class="blog-post col-12 col-sm-12 col-md-4">
        <div class="img-box">
          <img class="blog-img" src="./img/xb1.jpg.pagespeed.ic.kt2tbOEfuO.webp" alt="City">
        </div>
        <div class="about-blog">
          <div class="about-blog-author">
            <img class="blog-author-img" src="./img/xuser.png.pagespeed.ic.3Cyb7EkxkK.webp" alt="Author">
            <a href="#">
              <span class="blog-author-name">Mark Wiens</span>
            </a>
          </div>
          <div class="blog-info">
            <span class="blog-post-date">13th Dec</span>
            <span class="blog-likes">
              <span class="fa fa-heart-o"></span>
              15</span>
            <span class="blog-comments">
              <span class="fa fa-comment-o"></span>
              04</span>
          </div>
        </div>
        <a href="#">
          <h3 class="blog-post-tittle">BREAK THROUGH SELF DOUBT AND FEAR </h3>
        </a>
        <p class="blog-post-description">Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.</p>
      </div>
*/

class Blogs {
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

    isValidString(str, size = 200) {
        if (typeof str !== 'string'
            || str.trim() === ''
            || str.trim().length > size) {
            return false;
        }
        return true;
    }

    isValidBlogItem(item) {
        if (this.isTrueObject(item, 9)
            || this.isValidString(item.img)
            || this.isValidString(item.imgAlt)
            || this.isValidString(item.authorImg)
            || this.isValidString(item.authorName)
            || this.isValidString(item.postDate)
            || this.isValidString(item.likesCount)
            || this.isValidString(item.commentsCount)
            || this.isValidString(item.tittle)
            || this.isValidString(item.desc))
             {
            return true;
        }
        return false;
    }

    render() {

        let blogsHTML = '';
        for (const blogItem of this.data) {

            if (!this.isValidBlogItem(blogItem)) {
                continue;
            }

            blogsHTML += `<div class="blog-post col-12 col-sm-12 col-md-4">
            <div class="img-box">
              <img class="blog-img" src="./img/${blogItem.img}" alt="${blogItem.imgAlt}">
            </div>
            <div class="about-blog">
              <div class="about-blog-author">
                <img class="blog-author-img" src="./img/${blogItem.authorImg}" alt="Author">
                <a href="#">
                  <span class="blog-author-name">${blogItem.authorName}</span>
                </a>
              </div>
              <div class="blog-info">
                <span class="blog-post-date">${blogItem.postDate}</span>
                <span class="blog-likes">
                  <span class="fa fa-heart-o"></span>
                  ${blogItem.likesCount}</span>
                <span class="blog-comments">
                  <span class="fa fa-comment-o"></span>
                  ${blogItem.commentsCount}</span>
              </div>
            </div>
            <a href="#">
              <h3 class="blog-post-tittle">${blogItem.tittle}</h3>
            </a>
            <p class="blog-post-description">${blogItem.desc}</p>
          </div>`;
        }
        this.DOM.innerHTML = blogsHTML; 
    }
}

export { Blogs }
