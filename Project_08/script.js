// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function () {
  // Create hamburger
  const navbar = document.querySelector('.navbar');
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.createElement('div');
  hamburger.className = 'menu-toggle';
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  
  // Insert hamburger before nav-menu in navbar
  navbar.insertBefore(hamburger, navMenu);

  // Toggle nav
  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close nav menu on link click (mobile)
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });

  // Highlight active link (on click)
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Optional: Button hover/active feedback
  const btns = document.querySelectorAll('.btn, .btn-secondary');
  btns.forEach(function(btn) {
    btn.addEventListener('mousedown', function() {
      btn.classList.add('active');
    });
    btn.addEventListener('mouseup', function() {
      btn.classList.remove('active');
    });
    btn.addEventListener('mouseleave', function() {
      btn.classList.remove('active');
    });
  });
});
