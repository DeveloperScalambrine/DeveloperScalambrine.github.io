// JavaScript para alternar a visibilidade do menu
const menuToggle = document.getElementById('menu-toggle');
const fullscreenMenu = document.getElementById('fullscreen-menu');

// Alterna a classe 'visible' para mostrar/ocultar o menu
menuToggle.addEventListener('click', function() {
    fullscreenMenu.classList.toggle('visible');
});
