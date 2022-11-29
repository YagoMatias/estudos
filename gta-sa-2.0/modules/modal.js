import maquina from "./typewriter.js";
export default function modal() {
  const modal = document.querySelector(".modal-conteiner");
  const botaoAbrir = document.querySelector(".modal-link");
  const botaoFechar = document.querySelector(".modal-bnt");

  function abrirModal(event) {
    event.preventDefault();
    modal.classList.toggle("ativo");
  }

  botaoAbrir.addEventListener("click", abrirModal);
  botaoAbrir.addEventListener("click", maquina);
  botaoFechar.addEventListener("click", abrirModal);
}
