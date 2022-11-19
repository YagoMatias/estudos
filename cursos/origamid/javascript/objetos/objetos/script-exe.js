// Crie uma função que verifique
// corretamente o tipo de dado

function tipoDado(dado) {
  const dados = Object.prototype.toString.call(dado);
  return dados;
}
const frutas = ["Banana", "Uva", "Pêra"];

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  },
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

const listaString = Object.getOwnPropertyNames(String.prototype);
const listaArray = Object.getOwnPropertyNames(Array.prototype);

console.log(listaString);
console.log(listaArray);
