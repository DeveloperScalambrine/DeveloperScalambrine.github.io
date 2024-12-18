// Seleção dos elementos
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');

// Abrir o menu
menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.remove('hidden');
});

// Fechar o menu
menuClose.addEventListener('click', () => {
    fullscreenMenu.classList.add('hidden');
});
