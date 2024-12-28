// Seleciona elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.content-section');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const carouselInner = document.querySelector('.carousel-inner');
const dropdownButton = document.getElementById('dropdownMenuButton');


window.onload = function () {
    alert("Portfólio em atualização");
   };
 
const projects = {
    "data-analysis": [
        { 
            title: "Horas estudadas", 
            image: "Horas Estudadas por Matéria.png",
            description: "Um estudo detalhado sobre o desempenho de horas estudadas.",
            url: "https://app.asana.com/0/1203244564929723/1209053995931847"
        },
        { 
             title: "Analise Metricas", 
             image: "Analise das métricas.png", 
             description: "Um estudo detalhado sobre o desempenho do atingimento de métricas."
        }
    ],
    "web-dev": [
        { title: "Portfólio Web", image: "web-portfolio.jpg" },
        { title: "Loja Online", image: "ecommerce.jpg" }
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
                        <h5>${project.title}</h5>
                        <p>${project.description}</p>
                        <a href="${project.url}" class="btn btn-primary" target="_blank">Ver Projeto</a>
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


