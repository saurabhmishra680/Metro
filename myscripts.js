let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide-item').length;

function showSlides(index) {
    slideIndex += index;
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Loop back to the first image
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Go to the last image
    }
    slides.style.transform = `translateX(${-slideIndex * 100}vw)`; // Move by 100% of viewport width per slide
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides(1);
});

if (window.innerWidth > 768) {
    setInterval(() => {
        showSlides(1);  // Move to the next slide every 5 seconds
    }, 5000);
}

