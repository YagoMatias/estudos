// Retorne um número aleatório
// entre 1050 e 2000

Math.abs(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

const listaNumero = numeros.split(", ");

const max = Math.max(...listaNumero);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limpaPreco() {
  let soma = 0;
  listaPrecos.forEach((item) => {
    const minuscula = item.toLowerCase();
    const quebra = Math.round(minuscula.slice(3).trim().replace(/[,]+/g, "."));
    soma = soma + quebra;
    console.log(quebra);
  });
  console.log("o valor somado é", soma);
}
limpaPreco();
