const titulo = document.querySelector("h1");
// console.log(titulo);

function addclass(event) {
  event.preventDefault();
  titulo.classList.toggle("ativo");
}

titulo.addEventListener("click", addclass);
