// Controle do menu
const menuToggle = document.getElementById('menu-toggle');
const fullscreenMenu = document.getElementById('fullscreen-menu');

menuToggle.addEventListener('click', function() {
    fullscreenMenu.classList.toggle('visible');
});
