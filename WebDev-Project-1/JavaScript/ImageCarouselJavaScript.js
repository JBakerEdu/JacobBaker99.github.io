// Image carousel for the hero section
let currentSlide = 0;
const slides = document.querySelectorAll("#hero .carousel img");

// Display the first slide initially
nextSlide();

// Automatically advance slides every 5 seconds
setInterval(nextSlide, 5000);

function nextSlide() {
    // Remove active class from the current slide
    slides[currentSlide].classList.remove("active");
    
    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to the next slide
    slides[currentSlide].classList.add("active");
}