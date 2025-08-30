// Mensagem de interação ao clicar nos cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Em breve: Conteúdo detalhado deste curso/projeto!");
  });
});

// Funcionalidade para os filtros
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remover classe active de todos os botões
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Adicionar classe active ao botão clicado
    button.classList.add('active');
    
    // Obter o filtro selecionado
    const filter = button.getAttribute('data-filter');
    
    // Filtrar os cards
    document.querySelectorAll('.category-card').forEach(card => {
      if (filter === 'todos') {
        card.style.display = 'block';
      } else {
        const manufacturers = card.getAttribute('data-manufacturer').split(' ');
        if (manufacturers.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

// Suavizar rolagem para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Adicionar botão "Voltar ao topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.width = '50px';
backToTopButton.style.height = '50px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = 'var(--azul)';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.fontSize = '24px';
backToTopButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.body.appendChild(backToTopButton);

// Mostrar/ocultar o botão baseado na posição de rolagem
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Adicionar ano atual no footer
document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Asas do Conhecimento.`;
// Menu mobile (hamburguer)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Alternar a visibilidade do menu
  nav.classList.toggle('nav-active');
  
  // Animar os links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
  
  // Animação do botão hamburguer
  burger.classList.toggle('toggle');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    navLinks.forEach(link => {
      link.style.animation = '';
    });
  });
});