// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// setInterval(
//   () => {
//     const body = document.querySelector("body");
//     body.classList.toggle("azul");
//   },
//   2000,
//   ""
// );

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

// function halloWord() {
//   return "oi";
// }

// var $wrapper = document.querySelector("div"),
//   // Pega a string do conteúdo atual
//   HTMLTemporario = $wrapper.innerHTML,
//   // Novo HTML que será inserido
//   HTMLNovo = halloWord();

// // Concatena as strings colocando o novoHTML antes do HTMLTemporario
// HTMLTemporario = HTMLNovo + HTMLTemporario;

// // Coloca a nova string(que é o HTML) no DOM
// $wrapper.innerHTML = HTMLTemporario;

// function play() {
//   pauseButton.classList.remove("ativo");
//   const inicio = setInterval(callBack, 1000);
//   let i = 0;
//   function callBack() {
//     console.log(i++);
//     function stop() {
//       clearInterval(inicio);
//     }
//     pauseButton.addEventListener("click", stop);
//   }
// }

// playButton.addEventListener("click", play);

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const tempo = document.getElementById("teste");

let i = 0;
iniciar = 0;
const cronometro = function () {
  iniciar = setInterval(() => {
    merda.innerText = i++;
  }, 100);
};

function start() {
  cronometro();
}

function stop() {
  clearInterval(iniciar);
}

function reset() {
  tempo.innerText = 0;
}

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", stop);
pauseButton.addEventListener("dblclick", reset);
