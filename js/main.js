let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slides');

// Function to show the current slide
function showSlide(slideIndex) {
    // Handle wrapping around the slides
    if (slideIndex >= totalSlides) {
        currentSlide = 0;  // Go back to the first slide
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide if we go too far back
    } else {
        currentSlide = slideIndex;
    }

    // Move the slide container accordingly
    const translateXValue = -currentSlide * 100; // Move slides 100% for each slide
    slideContainer.style.transform = `translateX(${translateXValue}%)`;
}

// Auto-slide function
const autoSlide = setInterval(() => {
    showSlide(currentSlide + 1); // Automatically go to the next slide
}, 8000); // 8 seconds interval

// Event listeners for the next and prev buttons
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
    clearInterval(autoSlide); // Optionally stop auto-slide after manual interaction
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
    clearInterval(autoSlide); // Optionally stop auto-slide after manual interaction
});