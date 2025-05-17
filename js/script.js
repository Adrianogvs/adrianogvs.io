document.addEventListener('DOMContentLoaded', () => {
  const toggle   = document.querySelector('.menu-toggle');
  const nav      = document.querySelector('nav');
  const menu     = document.querySelector('#menu');
  const logo     = document.querySelector('.logo');
  const themeBtn = document.querySelector('.theme-btn');

  function scrollToSection(hash) {
    const target = document.querySelector(hash);
    const offset = document.querySelector('header').offsetHeight;
    const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
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

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  Email.send({
    Host: "smtp.zoho.com",
    Username: "contato@adrianogvs.com.br",
    Password: "SUA_SENHA_AQUI", // Use uma senha de aplicativo do Zoho!
    To: "contato@adrianogvs.com.br",
    From: "contato@adrianogvs.com.br",
    Subject: `Nova mensagem de ${nome}`,
    Body: `Nome: ${nome}<br>Email: ${email}<br>Mensagem: ${mensagem}`
  }).then((message) => {
    alert("Mensagem enviada com sucesso!");
  }).catch((err) => {
    alert("Erro ao enviar. Tente novamente.");
    console.error(err);
  });
});
