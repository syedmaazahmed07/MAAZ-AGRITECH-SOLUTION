const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active'); // Add/remove 'active' class to toggle visibility
});