// // Verifique se a sua idade é maior do que a de algum parente
// // Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
// // ======================================
// // Qual valor é retornado na seguinte expressão? 3

// var expressao = 5 - 2 && 5 - " " && 5 - 2;

// console.log(expressao);

// // Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = "Andre";
// var idade = 28;
// var possuiDoutorado = false;
// var empregoFuturo;
// var dinheiroNaConta = 0;

// if (nome) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

// if (idade) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

// if (possuiDoutorado) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

// if (empregoFuturo) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

// if (dinheiroNaConta) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

// // Compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
// var china = 1340;

// var comparaçao = brasil < china;
// console.log(comparaçao);

// // O que irá aparecer no console?
// if ("Gato" === "gato" && 5 > 2) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

// // O que irá aparecer no console?
// if ("Gato" === "gato" || 5 > 2) {
//   console.log("Gato" && "Cão");
// } else {
//   console.log("Falso");
// }

// ------------------------------------------------------------------------------------------

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idade = 24;
var iParente = 25;
if (idade > iParente) {
  console.log("É maior");
} else if (idade === iParente) {
  console.log("É igual");
} else if (idade < iParente) {
  console.log("É menor");
} else {
}

// // Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
3;

// // Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = !!"Andre";
var idade = !!28;
var possuiDoutorado = !!false;
var empregoFuturo;
var dinheiroNaConta = !!0;

// // Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

var paises = brasil < china;
console.log(paises);

// // O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// // O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
