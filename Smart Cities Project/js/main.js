// função de abrir e fechar o meno ao clicar nos icones
/*abre e fecha menu quando clicar no icone: hamburguer e x*/
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/*quando clicar num item do menu, esconder todo o menu*/
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/*****APLICAR SOMBRA DO HEADER QUANDO SCROLLAMOS A PAG******/
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add("scroll");
  } else {
    //scroll menor que a altura do header
    header.classList.remove("scroll");
  }
});

/********SLIDE CAROUSEL- IMPACTOS SOCIAIS ******/
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: false,
  keyboard: true,
});

/******SCROLLREVEAL: MOSTRA ELEMENTOS CONFORME SCROLLAMOS A PAG */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 600,
  reset: true,
});

scrollReveal.reveal(
  `#home .parallax, #home .text,
  #about .image, #about .text,
  #socialimpacts header, #socialimpacts .card,
  #technologicalimpacts header, #technologicalimpacts .technologicalimpacts swiper,
  #conclusion, #ourteam,
  footer .brand, footer
  `,
  { interval: 100 }
);

/******BOTAO BACK TO TOP ******/
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

/**************PARALLAX*********/
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let buildings = document.getElementById("buildings");
let road = document.getElementById("road");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.5 + "px";
  moon.style.left = -value * 0.5 + "px";
  buildings.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
});
