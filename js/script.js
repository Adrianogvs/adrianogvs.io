document.addEventListener('DOMContentLoaded', () => {
  const toggle   = document.querySelector('.menu-toggle');
  const nav      = document.querySelector('nav');
  const menu     = document.querySelector('#menu');
  const logo     = document.querySelector('.logo');
  const themeBtn = document.querySelector('.theme-btn');

  function scrollToSection(hash) {
    const target = document.querySelector(hash);
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    const scrollPos = targetPos - headerHeight;
    window.scrollTo({ top: scrollPos, behavior: 'smooth' });

    // fechar menu se estiver aberto
    if (toggle.classList.contains('open')) {
      toggle.classList.remove('open');
      nav.classList.remove('open');
      menu.classList.remove('open');
    }
  }

  logo.addEventListener('click', () => scrollToSection('#inicio'));

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(a.getAttribute('href'));
    });
  });

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
});
