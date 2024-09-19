// script.js

// Mobile Menu Toggle
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('nav::before'); // The hamburger icon

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});