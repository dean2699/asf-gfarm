const heroSection = document.querySelector('.hero');
console.log('Hero section:', heroSection); // Check if the hero section is found

const heroImages = ['images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg']; // Add more images as needed
let currentIndex = 1; // Start with the second image

heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`; // Set initial background image

function changeHeroImage() {
  console.log('Changing hero image...'); // Log when the function is called
  
  // Fade out the current image
  heroSection.style.transition = 'opacity 0.5s';
  heroSection.style.opacity = 0;
  
  setTimeout(() => {
    console.log('Changing background image to:', heroImages[currentIndex]); // Log the new image URL
    
    // Change the background image
    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    
    // Fade in the new image
    heroSection.style.transition = 'opacity 0.5s';
    heroSection.style.opacity = 1;
    
    // Update the current index
    currentIndex = (currentIndex + 1) % heroImages.length;
  }, 500); // Wait for 0.5 seconds before changing the image
}

setInterval(changeHeroImage, 6000); // 6 seconds