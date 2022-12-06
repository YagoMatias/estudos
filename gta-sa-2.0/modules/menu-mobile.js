export default function menuMobile() {}

const botao = document.querySelector(".botao");
const menu = document.querySelector(".menu-mobile");

function activeMenu() {
  botao.classList.toggle("ativo");
  menu.classList.toggle("ativo");
}

botao.addEventListener("click", activeMenu);
menu.addEventListener("click", activeMenu);
