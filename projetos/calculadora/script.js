const calculadora = document.querySelector(".calc");
const botoes = calculadora.querySelector(".calc__botoes");

botoes.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const botao = event.target;
    const action = botao.dataset.action;
    if (!action) {
      console.log("numero");
    } else if (
      action === "somar" ||
      action === "subtrair" ||
      action === "multiplicar" ||
      action === "dividir"
    ) {
      console.log("operador!");
    } else if (action === "decimal") {
      console.log("decimal");
    }
    Array.from(botao.parentNode.children).forEach((item) =>
      item.classList.remove("clicou")
    );
  }
});

const display = document.querySelector(".calc__display");
botoes.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const botao = event.target;
    const action = botao.dataset.action;
    const botaoContent = botao.textContent;
    const displayNumber = display.textContent;
    if (!action) {
      if (displayNumber === "0") {
        display.textContent = botaoContent;
      } else {
        display.textContent = displayNumber + botaoContent;
      }
    } else if (action === "decimal") {
      display.textContent = displayNumber + ".";
    } else if (
      action === "somar" ||
      action === "subtrair" ||
      action === "dividir" ||
      action === "multiplicar"
    ) {
      botao.classList.add("clicou");
    }
  }
});
