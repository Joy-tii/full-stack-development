const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let slideNumber = 0;
const totalSlides = slides.length;
let autoSlideInterval;

// Function to update the slide
const updateSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 80}vw)`;
};

// Function to move to the next slide
const nextSlide = () => {
    slideNumber = (slideNumber + 1) % totalSlides; // Loop back to first slide
    updateSlide();
};

// Function to move to the previous slide
const prevSlide = () => {
    slideNumber = (slideNumber - 1 + totalSlides) % totalSlides; // Loop back to last slide
    updateSlide();
};

// Event Listeners for arrows
right.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

left.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

// Auto-play feature (slides every 3 seconds)
const startAutoplay = () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
};

// Reset autoplay on manual navigation
const resetAutoplay = () => {
    clearInterval(autoSlideInterval);
    startAutoplay();
};

// Start autoplay when the page loads
startAutoplay();
