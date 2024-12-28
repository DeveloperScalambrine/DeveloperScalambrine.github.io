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
        const sectionId = link.dataset.section;

        // Seleciona a seção correspondente dinamicamente
        const targetSection = document.getElementById(sectionId); 

        if (targetSection) {
            // Rolar suavemente até a seção
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Opcional: Ocultar outras seções e mostrar a seção alvo
          //  sections.forEach(section => section.classList.remove('visible'));
          //  targetSection.classList.add('visible'); 
        }

        // Fechar o menu após a navegação
        fullscreenMenu.classList.remove('visible'); 
    });
});
