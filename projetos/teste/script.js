const menu = document.querySelector(".menu");
const menuConteiner = document.querySelector(".menu-conteiner");
const botao = document.querySelector('button')
console.log(botao);

function classNav(event) {
  event.preventDefault();
  menu.classList.toggle("ativo");
}
function classHamburguer(event) {
  event.preventDefault();
  console.log('oi');
  botao.classList.toggle('is-active');
}

function classConteiner(event) {
  event.preventDefault();
  console.log('oi');
  menuConteiner.classList.toggle('ativo');
}


botao.addEventListener('click', classNav);
botao.addEventListener('click', classHamburguer);
botao.addEventListener('click', classConteiner);