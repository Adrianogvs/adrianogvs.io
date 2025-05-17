// mobile.js

(function() {
  // Define breakpoint para mobile/tablet
  const MOBILE_MAX_WIDTH = 768;

  // Debounce para não disparar resize a todo instante
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Aplica ou remove a classe 'mobile-layout' no <body>
  function applyMobileLayout() {
    const isMobile = window.innerWidth <= MOBILE_MAX_WIDTH;
    document.body.classList.toggle('mobile-layout', isMobile);
  }

  // Escuta evento de redimensionamento
  window.addEventListener('resize', debounce(applyMobileLayout, 200));
  // Aplica no carregamento inicial
  document.addEventListener('DOMContentLoaded', applyMobileLayout);
})();
