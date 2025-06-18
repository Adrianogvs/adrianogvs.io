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

// ==================================================
// CURSOR GLOW (efeito luminoso que segue o mouse)
// ==================================================

(function() {
  const canvas = document.getElementById('cursor-glow');
  if (!canvas) return; // segurança!

  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  let mouse = { x: w/2, y: h/2, alpha: 0 };

  // Ajusta canvas sempre que redimensiona
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  window.addEventListener('resize', resize);
  resize();

  // Atualiza posição do mouse
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.alpha = 1; // aparece
  });

  // Para suavizar desaparecimento do glow
  function fadeGlow() {
    if (mouse.alpha > 0) mouse.alpha -= 0.015;
    if (mouse.alpha < 0) mouse.alpha = 0;
  }

  // Loop de animação
  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Desenha o glow dourado
    if (mouse.alpha > 0.01) {
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 90);
      gradient.addColorStop(0, "rgba(255, 215, 0, 0.55)");
      gradient.addColorStop(0.2, "rgba(255, 165, 0, 0.18)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = mouse.alpha;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 90, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    fadeGlow();
    requestAnimationFrame(draw);
  }
  draw();

  // Canvas fixo cobrindo tudo, sem atrapalhar cliques
  Object.assign(canvas.style, {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'lighter',
  });
})();
// ===== FIM DO SCRIPT =====
// FIM DO SCRIPT
