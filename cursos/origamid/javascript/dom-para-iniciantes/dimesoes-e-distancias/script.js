// Verifique a distância da primeira imagem
// em relação ao topo da página

const imgs = document.querySelector("img");

imgs.offsetTop;

console.log(imgs.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgWidth = [...document.querySelectorAll("img")];
  let soma = 0;
  imgWidth.forEach((item) => {
    soma = soma + item.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  let largura = link.clientWidth;
  let altura = link.clientHeight;
  console.log(largura, altura);
  if (largura > 48 && altura > 48) {
    console.log("Tem uma boa acessibilidade");
  } else {
    console.log("não tem uma boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

if (window.innerWidth < 720) {
  let menu = document.querySelector("nav.menu");
  menu.classList.add("menu-mobile");
}
