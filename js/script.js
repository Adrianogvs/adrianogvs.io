// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle  = document.querySelector('.menu-toggle');
  const nav     = document.querySelector('nav');
  const menu    = document.querySelector('#menu');
  const logo    = document.querySelector('.logo');
  const themeBtn= document.querySelector('.theme-btn');

  // Função de scroll suave + fechar menu
  function scrollToSection(hash) {
    document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    if (toggle.classList.contains('open')) {
      toggle.classList.remove('open');
      nav.classList.remove('open');
      menu.classList.remove('open');
    }
  }

  // Logo volta ao topo
  logo.addEventListener('click', () => scrollToSection('#inicio'));

  // Toggle menu + animação X
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Links do menu fazem scroll e fecham
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(a.getAttribute('href'));
    });
  });

  // Tema claro/escuro
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
});
