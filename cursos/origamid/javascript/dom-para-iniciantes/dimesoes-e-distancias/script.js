// Verifique a distância da primeira imagem
// em relação ao topo da página

// const imgs = document.querySelector("img");

// imgs.offsetTop;

// console.log(imgs.offsetTop);

// Retorne a soma da largura de todas as imagens

const imgWidth = [...document.querySelectorAll("img")];
// console.log(imgWidth);

imgWidth.map((item) => {
  console.log(item.clientWidth);
});



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
