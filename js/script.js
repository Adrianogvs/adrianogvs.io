// Menu toggle (mobile)
function toggleMenu() {
    document.getElementById('menu').classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('menu').classList.remove('open');
  }
  
  // Smooth scroll
  function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }
  
  // Theme toggle is handled inline via body.classList.toggle('light')
  