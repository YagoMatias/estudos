// const carros = ["Ford", "Fiat", "VW"];

// // carros.forEach((item, index, array) => {
// //   console.log((array[index] = "Carro " + item));
// // });

// const numeros = [2, 3, 4, 5, 6];
// const numerosX2 = numeros.map((n) => n * 2);
// console.log(numerosX2);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const numeros = [10, 20, 30];

// const soma = numeros.reduce((acumulador, item) => {
//   return acumulador + item;
// }, 0);

// console.log(soma);

// const maiorNumeroIf = numeros.reduce((anterior, atual) => {
//   if (anterior > atual) return anterior;
//   else return atual;
// });

// const maiorNumero = numeros.reduce(
//   (anterior, atual) => (anterior > atual ? anterior : atual),
//   0
// );

// console.log(maiorNumeroIf);

const frutas = ["Maçã", "Banana", "Uva"];
const indexFruta = frutas.findIndex((item) => item === "Uva");
console.log(indexFruta);
