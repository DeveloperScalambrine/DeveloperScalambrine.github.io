// Seleciona elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');

// Abre o menu
menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('visible');
});

// Fecha o menu
menuClose.addEventListener('click', () => {
    fullscreenMenu.classList.remove('visible');
});

