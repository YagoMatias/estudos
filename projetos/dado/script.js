const quadrado = document.querySelectorAll("p");
const botao = document.querySelectorAll("button");

function rodar() {
  const teste = parseInt(Math.random() * (7 - 1) + 1);
  console.log(teste);
  quadrado.forEach((item) => {
    item.innerText = teste;
  });
}

botao.forEach((item) => {
  item.addEventListener("click", rodar);
});
// botao.addEventListener("click", rodar);
// botao.addEventListener("dblclick", apagar);
