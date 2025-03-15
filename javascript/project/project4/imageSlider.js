const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNumber = 0;
const totalSlides = images.length;

const updateSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
};

right.addEventListener('click', () => {
    if (slideNumber < totalSlides - 1) {
        slideNumber++;
    } else {
        slideNumber = 0; // Reset to first slide
    }
    updateSlide();
});

left.addEventListener('click', () => {
    if (slideNumber > 0) {
        slideNumber--;
    } else {
        slideNumber = totalSlides - 1; // Go to last slide
    }
    updateSlide();
});
