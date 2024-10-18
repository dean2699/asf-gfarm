const heroSection = document.querySelector('.hero');
const logo = document.querySelector('.hero-logo');
const heading = document.querySelector('.hero-content h1');
const paragraph = document.querySelector('.hero-content p');
console.log('Hero section:', heroSection); // Check if the hero section is found

const heroImages = ['images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg']; // Add more images as needed
let currentIndex = 0; // Start with the second image

heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`; // Set initial background image
animateLogo();
  animateHeading();
    animateParagraph();

function animateLogo() {
  logo.style.opacity = 0; // Initial opacity
  setTimeout(() => {
    logo.style.transition = 'opacity 0.5s';
    logo.style.opacity = 1; // Fade in
  }, 500); // Wait for 0.5 seconds before fading in

  setTimeout(() => {
    logo.style.transition = 'opacity 0.5s';
    logo.style.opacity = 0; // Fade out
  }, 6000); // Wait for 3 seconds before fading out
}

function animateHeading() {
  heading.style.opacity = 0; // Initial opacity
  setTimeout(() => {
    heading.style.transition = 'opacity 1.5s';
    heading.style.opacity = 1; // Fade in
  }, 1500); // Wait for 0.5 seconds before fading in

  setTimeout(() => {
    heading.style.transition = 'opacity 0.5s';
    heading.style.opacity = 0; // Fade out
  }, 6000); // Wait for 3 seconds before fading out
}

function animateParagraph() {
  paragraph.style.opacity = 0; // Initial opacity
  setTimeout(() => {
    paragraph.style.transition = 'opacity 2.5s';
    paragraph.style.opacity = 1; // Fade in
  }, 2500); // Wait for 0.5 seconds before fading in

  setTimeout(() => {
    paragraph.style.transition = 'opacity 0.5s';
    paragraph.style.opacity = 0; // Fade out
  }, 6000); // Wait for 3 seconds before fading out
}

function animateNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.style.top = '0'; /* Final position */
}

function animateCardSection(){
  // Add the slide-up class to the card section
  const cardSection = document.querySelector('.card-section');
  cardSection.classList.add('slide-up');
}

// Call the animateNavbar function after the logo and hero image have finished animating
setTimeout(() => {
  animateNavbar();
}, 6000); /* Wait for 6 seconds */

function changeHeroImage() {
  console.log('Changing hero image...'); // Log when the function is called
  
  // Fade out the current image
  heroSection.style.transition = 'opacity 0.5s';
  heroSection.style.opacity = 0;
  
  setTimeout(() => {
    console.log('Changing background image to:', heroImages[currentIndex]); // Log the new image URL
    
    // Update the current index
    currentIndex = (currentIndex + 1) % heroImages.length;
    
    // Change the background image
    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    
    // Fade in the new image
    heroSection.style.transition = 'opacity 0.5s';
    heroSection.style.opacity = 1;
    animateNavbar();
    animateCardSection();
  }, 500); // Wait for 0.5 seconds before changing the image
}

setInterval(changeHeroImage, 6000); // 6 seconds