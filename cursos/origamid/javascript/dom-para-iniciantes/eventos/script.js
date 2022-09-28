// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((links) => {
  links.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const allElements = document.querySelector("body");

// function callback(event) {
//   const target = event.target;
//   target.remove();
// }

// allElements.addEventListener("click", callback);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function textoMaior(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textoGrande");
  }
}
window.addEventListener("keydown", textoMaior);
  