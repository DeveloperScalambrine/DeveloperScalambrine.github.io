// Seleciona elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.content-section');
const section = document.getElementById('sectionId');

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
        const sectionId = link.dataset.section;
         section.scrollIntoView({ behavior: 'smooth' });

       // const targetSection = document.querySelector(link.getAttribute('href')); // Usa o href diretamente
 //       sections.forEach(section => section.classList.remove('visible')); // Remove visibilidade de todas as seções
   //     if (targetSection) targetSection.classList.add('visible'); // Adiciona visibilidade à seção alvo
     //   fullscreenMenu.classList.remove('visible'); // Fecha o menu
    });
});
