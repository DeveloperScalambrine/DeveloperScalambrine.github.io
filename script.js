// Seleciona elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.content-section');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const carouselInner = document.querySelector('.carousel-inner');
const dropdownButton = document.getElementById('dropdownMenuButton');
// https://docs.google.com/spreadsheets/d/1y3c59dxH-wa5HELci-bmUDgTjNeteIM2FdDuu8AjdKY/edit?gid=1203955528#gid=1203955528

window.onload = function () {
    alert("Portfólio em atualização");
   };

const projects = {
    "data-analysis": [
        { 

            image: "Horas Estudadas por Matéria.png",
            description: Um estudo detalhado sobre o desempenho de horas estudadas.,
            url: "https://docs.google.com/spreadsheets/d/1y3c59dxH-wa5HELci-bmUDgTjNeteIM2FdDuu8AjdKY/edit?gid=1203955528#gid=1203955528"
        },
        { 

             image: "Analise das métricas.png", 
             description: Um estudo detalhado sobre o desempenho do atingimento de métricas.
        }
    ],
    "ai": [
        {
            image: "bot.png",
            description: chatbot integrado com a AI do google.,
            url: "https://huggingface.co/scalambrine"
        }
    ],
    "ml-ai": [
        { title: "Predição de Vendas", image: "sales-prediction.jpg" },
        { title: "Classificação de Imagens", image: "image-classification.jpg" }
        ]
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
            targetSection.classList.add('visible'); 
        }

        // Fechar o menu após a navegação
        fullscreenMenu.classList.remove('visible'); 
    });
});

dropdownItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const category = item.dataset.category;

        dropdownButton.textContent = item.textContent;

        // Limpa o carrossel atual
        carouselInner.innerHTML = '';

        // Adiciona os projetos da categoria selecionada
        if (projects[category]) {
            projects[category].forEach(project => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                carouselItem.innerHTML = `
                    <img src="${project.image}" class="d-block w-100" alt="${project.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <p>"${project.description}"</p>
                        <a href="${project.url}" class="btn btn-primary btn-sm" target="_blank">Ver Projeto</a>
                    </div>
                `;
                carouselInner.appendChild(carouselItem);
            });

            // Define o primeiro item como ativo
            const firstItem = carouselInner.querySelector('.carousel-item');
            if (firstItem) firstItem.classList.add('active');
        }
    });
});
