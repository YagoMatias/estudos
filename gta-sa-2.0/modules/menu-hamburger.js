export default function menuHamburger() {}

const botao = document.querySelector(".botao button");

function hamburger(event) {
  event.preventDefault();
  botao.classList.toggle("is-active");
}

botao.addEventListener("click", hamburger);
