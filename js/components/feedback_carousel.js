let slidePosition=0
const slides = document.getElementsByClassName('card');
const totalSlides = slides.length;

document.
    getElementById('carousel_next')
    .addEventListener("click", function() {
        moveToNextSlide();
        
    })

    document.
    getElementById('carousel_prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
        
    })

    function updateSlidePosition() {
        for (let slide of slides) {
            //slide.classList.remove('card-1');
            slide.classList.add('card-2');
        }
        slides[slidePosition].classList.add('card-1');
    }

    function moveToNextSlide() {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        if (slidePosition === 0 ) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    }