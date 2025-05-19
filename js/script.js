// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle   = document.querySelector('.menu-toggle');
  const nav      = document.querySelector('nav');
  const menu     = document.querySelector('#menu');
  const logo     = document.querySelector('.logo');

  // THEME SWITCHER
  const themeBtn  = document.getElementById('theme-toggle-button');
  const icon      = document.getElementById('theme-toggle-icon');
  const opts      = document.getElementById('theme-options');
  const choices   = document.querySelectorAll('.theme-option');

  const applyTheme = (theme) => {
    document.body.classList.remove('light');
    if (theme === 'light') {
      document.body.classList.add('light');
      icon.className = 'fas fa-sun';
    } else if (theme === 'dark') {
      icon.className = 'fas fa-moon';
    } else {
      // system
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.classList.toggle('light', !isDark);
      icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    }
    localStorage.setItem('theme', theme);
  };

  // Inicializa tema salvo
  let saved = localStorage.getItem('theme') || 'system';
  applyTheme(saved);

  // Abre/fecha menu mobile
  function scrollToSection(hash) {
    const section      = document.querySelector(hash);
    const headerHeight = document.querySelector('header').offsetHeight;
    const target       = section.querySelector('h2') || section;
    const topPos       = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
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

  // Toggle das opções de tema
  themeBtn.addEventListener('click', () => {
    const expanded = themeBtn.getAttribute('aria-expanded') === 'true';
    themeBtn.setAttribute('aria-expanded', String(!expanded));
    opts.classList.toggle('hidden');
  });
  choices.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
      opts.classList.add('hidden');
      themeBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Formulário de contato
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome    = document.getElementById("nome").value;
    const email   = document.getElementById("email").value;
    const mensagem= document.getElementById("mensagem").value;
    Email.send({
      Host:     "smtp.zoho.com",
      Username: "contato@adrianogvs.com.br",
      Password: "SUA_SENHA_AQUI", 
      To:       "contato@adrianogvs.com.br",
      From:     "contato@adrianogvs.com.br",
      Subject:  `Nova mensagem de ${nome}`,
      Body:     `Nome: ${nome}<br>Email: ${email}<br>Mensagem: ${mensagem}`
    }).then(() => alert("Mensagem enviada com sucesso!"))
      .catch(err => { alert("Erro ao enviar. Tente novamente."); console.error(err); });
  });
});
