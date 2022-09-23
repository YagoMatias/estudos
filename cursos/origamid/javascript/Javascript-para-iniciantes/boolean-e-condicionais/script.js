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
