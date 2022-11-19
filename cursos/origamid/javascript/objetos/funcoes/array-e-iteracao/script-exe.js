// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

// const caracteres = [...document.querySelectorAll("p")];

// const quantidade = caracteres.reduce((anterior, item) => {
//   const caracter = item.innerText.length;
//   console.log(caracter);
//   return caracter + anterior;
// }, 0);

// console.log(quantidade);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

// function criarElemento(item, tag, conteudo) {
//   const pai = document.body.querySelector(item);
//   const elemento = document.createElement(tag);
//   pai.appendChild(elemento);
//   const texto = document.createTextNode(conteudo);
//   return elemento.appendChild(texto);
// }
// criarElemento("section", "div", "oi");

// function addClasse(item, classe) {
//   const selecionarDiv = document.querySelector(item);
//   selecionarDiv.classList.add(classe);
// }
// addClasse("div", "ativo");

function elementoCria(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

console.log(elementoCria("div", "ativo", "olá otários"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
