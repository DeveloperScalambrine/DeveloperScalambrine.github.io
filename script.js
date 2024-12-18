const menuToggle = document.getElementById('menu-toggle');
const fullscreenMenu = document.getElementById('fullscreen-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    fullscreenMenu.classList.toggle('hidden');
});
