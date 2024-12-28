// Seleciona elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.content-section');

window.onload = function () {
    alert("Portfólio em atualização");
};

// Abre o menu
menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('visible');
});

// Fecha o menu
menuClose.addEventListener('click', () => {
    fullscreenMenu.classList.remove('visible');
});

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mostra a seção correspondente ao link clicado
// menuLinks.forEach(link => {
  //  link.addEventListener('click', event => {
    //    event.preventDefault(); // Impede o comportamento padrão do link

        // Esconde todas as seções
      //  sections.forEach(section => section.classList.remove('visible'));

        // Mostra a seção clicada
      //  const targetSection = document.getElementById(link.dataset.section);
      //  if (targetSection) {
        //    targetSection.classList.add('visible');
      //  }

        // Fecha o menu
      //  fullscreenMenu.classList.remove('visible');
    });
});
