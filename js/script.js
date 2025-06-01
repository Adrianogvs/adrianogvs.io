// script.js

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  // ================================
  // SELEÇÃO DE ELEMENTOS DO DOM
  // ================================
  const toggle   = document.querySelector('.menu-toggle');
  const nav      = document.querySelector('nav');
  const menu     = document.querySelector('#menu');
  const logo     = document.querySelector('.logo');

  // THEME SWITCHER (SELETOR DE TEMA)
  const themeBtn  = document.getElementById('theme-toggle-button');
  const icon      = document.getElementById('theme-toggle-icon');
  const opts      = document.getElementById('theme-options');
  const choices   = document.querySelectorAll('.theme-option');

  // ================================
  // FUNÇÃO: APLICAR TEMA
  // ================================
  const applyTheme = (theme) => {
    // Remove classe 'light' antes de definir um novo tema
    document.body.classList.remove('light');

    if (theme === 'light') {
      // Tema claro
      document.body.classList.add('light');
      icon.className = 'fas fa-sun';
    } else if (theme === 'dark') {
      // Tema escuro (não adiciona 'light')
      icon.className = 'fas fa-moon';
    } else {
      // Tema 'system' (baseado na preferência do sistema)
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.classList.toggle('light', !isDark);
      icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Armazena tema escolhido no localStorage
    localStorage.setItem('theme', theme);
  };

  // ================================
  // INICIALIZAÇÃO DO TEMA SALVO
  // ================================
  let saved = localStorage.getItem('theme') || 'system';
  applyTheme(saved);

  // ================================
  // FUNÇÃO: SCROLL SUAVE PARA SEÇÃO
  // ================================
  function scrollToSection(hash) {
    const section      = document.querySelector(hash);
    const headerHeight = document.querySelector('header').offsetHeight;
    // Se existir um <h2> dentro da seção, rola até ele; senão, rola até a seção inteira
    const target       = section.querySelector('h2') || section;
    const topPos       = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({ top: topPos, behavior: 'smooth' });

    // Fecha menu mobile caso esteja aberto
    if (toggle.classList.contains('open')) {
      toggle.classList.remove('open');
      nav.classList.remove('open');
      menu.classList.remove('open');
    }
  }

  // ================================
  // EVENTO: CLIQUE NO LOGO (VOLTA AO INÍCIO)
  // ================================
  logo.addEventListener('click', () => scrollToSection('#inicio'));

  // ================================
  // EVENTO: ABRIR/FECHAR MENU MOBILE (HAMBURGER)
  // ================================
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // ================================
  // EVENTO: CLIQUE NOS ITENS DO MENU (ANCHOR SCROLL)
  // ================================
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(a.getAttribute('href'));
    });
  });

  // ================================
  // EVENTO: TOGGLE DAS OPÇÕES DE TEMA (ABRIR E FECHAR)
  // ================================
  themeBtn.addEventListener('click', () => {
    const expanded = themeBtn.getAttribute('aria-expanded') === 'true';
    themeBtn.setAttribute('aria-expanded', String(!expanded));
    opts.classList.toggle('hidden');
  });

  // ================================
  // EVENTO: ESCOLHA DE TEMA (CLIQUE NAS OPÇÕES)
  // ================================
  choices.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
      opts.classList.add('hidden');
      themeBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // ================================
  // EVENTO: SUBMISSÃO DO FORMULÁRIO DE CONTATO
  // ================================
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome     = document.getElementById("nome").value;
    const email    = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    Email.send({
      Host:     "smtp.zoho.com",
      Username: "contato@adrianogvs.com.br",
      Password: "SUA_SENHA_AQUI", 
      To:       "contato@adrianogvs.com.br",
      From:     "contato@adrianogvs.com.br",
      Subject:  `Nova mensagem de ${nome}`,
      Body:     `Nome: ${nome}<br>Email: ${email}<br>Mensagem: ${mensagem}`
    }).then(() => {
      alert("Mensagem enviada com sucesso!");
    }).catch(err => {
      alert("Erro ao enviar. Tente novamente.");
      console.error(err);
    });
  });
});
