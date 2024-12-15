// Seleciona elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.content-section');

// Abre o menu
menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('visible');
});

// Fecha o menu
menuClose.addEventListener('click', () => {
    fullscreenMenu.classList.remove('visible');
});

// Mostra a seção correspondente ao link clicado
menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Esconde todas as seções
        sections.forEach(section => section.classList.remove('visible'));

        // Mostra a seção clicada
        const targetSection = document.getElementById(link.dataset.section);
        if (targetSection) {
            targetSection.classList.add('visible');
        }

        // Fecha o menu
        fullscreenMenu.classList.remove('visible');
    });
});
