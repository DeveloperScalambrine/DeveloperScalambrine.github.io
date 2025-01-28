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

            image: "Horas Estudadas por Matéria.png",
            description: "Um estudo detalhado sobre o desempenho de horas estudadas.",
            url: "https://docs.google.com/spreadsheets/d/1y3c59dxH-wa5HELci-bmUDgTjNeteIM2FdDuu8AjdKY/edit?gid=1203955528#gid=1203955528"
        },
        { 

             image: "Analise das métricas.png", 
             description: "Um estudo detalhado sobre o desempenho do atingimento de métricas."
        }
    ],
    "ai": [
        {
            image: "bot-at1.png",
            description: "ChatBot integrado com a AI do google.",
            url: "https://huggingface.co/scalambrine"
        },
        {
             image: "bot-at.png", 
             description: "ChatBot analisador de sentimentos",
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

  document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // Mostrar a seção "Home" imediatamente
  const homeSection = document.getElementById("home");
  homeSection.hidden = false;
  homeSection.classList.add("visible");
  menuToggle.hidden = false;
  menuToggle.classList.add("visible");

  const revealSection = () => {
    sections.forEach((section) => {
      if (section.id === "home") return; // Ignorar "Home", já está visível

      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 1.2) {
        section.hidden = false;
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Chamar ao carregar para verificar outras seções
});

const desafios = [
    "Estou constantemente me desafiando com novos projetos de análise de dados.",
    "Busco resolver problemas complexos com soluções eficientes e escaláveis.",
    "Aprendendo novas ferramentas para aprimorar minhas habilidades em BI.",
    "Explorando machine learning para análises mais avançadas.",
    "Criando dashboards interativos para transformar dados em insights."
];

let index = 0;

function atualizarDesafio() {
    document.getElementById("desafio-texto").textContent = desafios[index];
    index = (index + 1) % desafios.length; // Loop no array
}

// Atualiza o primeiro desafio imediatamente
atualizarDesafio();

// Alterna o desafio a cada 10 segundos
setInterval(atualizarDesafio, 10000);

