// main.js
document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile menu
  const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
  const headerNav = document.querySelector('.header__nav');
  
  if (mobileMenuToggle && headerNav) {
    mobileMenuToggle.addEventListener('click', () => {
      headerNav.classList.toggle('active');
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${targetId}" not found`);
      }
    });
  });
});