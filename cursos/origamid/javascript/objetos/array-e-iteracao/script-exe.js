// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

// const aulas = [...document.querySelectorAll(".curso")];

// const itemAulas = aulas.map((item) => {
//   return item.innerHTML;
// });

// console.log(itemAulas);

// Retorne uma lista com os
// números maiores que 100
// const numeros = [3, 44, 333, 23, 122, 322, 33];

// const maioresNumeros = numeros.filter((item) => {
//   return item > 100;
// });

// console.log(maioresNumeros);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
// const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

// const temBaixo = instrumentos.some((item) => {
//   return item === "Baixo";
// });

// console.log(temBaixo);

// Retorne o valor total das compras
// const compras = [
//   {
//     item: "Banana",
//     preco: "R$ 4,99",
//   },
//   {
//     item: "Ovo",
//     preco: "R$ 2,99",
//   },
//   {
//     item: "Carne",
//     preco: "R$ 25,49",
//   },
//   {
//     item: "Refrigerante",
//     preco: "R$ 5,35",
//   },
//   {
//     item: "Quejo",
//     preco: "R$ 10,60",
//   },
// ];

// const preco = compras.map((item) => {
//   const precos = item.preco;
//   const precosLimpo = precos.slice(3).replace(/[,]+/g, ".");
//   return +precosLimpo;
// });

// const somaPreco = preco.reduce((anterior, item) => {
//   return anterior + item;
// }, 0);

// console.log(somaPreco);
