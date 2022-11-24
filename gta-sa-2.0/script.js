function scrollNav() {
  const links = document.querySelectorAll('a[href^="#');
  console.log(links);

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
scrollNav();

function sectionScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const metadeWindow = window.innerHeight * 0.75;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - metadeWindow < 0;
      if (sectionVisible) {
        section.classList.add("ativo");
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
sectionScroll();

function Imagens(seletor) {
  this.element = function () {
    return document.querySelectorAll(seletor);
  };
  this.ativar = function (classe) {
    this.element().forEach((item) => {
      item.classList.add(classe);
    });
  };
}

const imgs = new Imagens("section div > img");
imgs.ativar("imagem");

const modal = document.querySelector(".modal-conteiner");
const botaoAbrir = document.querySelector(".modal-link");
const botaoFechar = document.querySelector(".modal-bnt");

function abrirModal(event) {
  event.preventDefault();
  modal.classList.toggle("ativo");
}

// function fecharModal(event) {
//   event.preventDefault();
//   modal.classList.remove("ativo");
// }

function maquina() {
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 200 * i);
    });
  }

  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }

  const titulo = document.querySelector(".p-modal");
  typeWriter(titulo);
}
botaoAbrir.addEventListener("click", abrirModal);
botaoAbrir.addEventListener("click", maquina);
botaoFechar.addEventListener("click", abrirModal);
