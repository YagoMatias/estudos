const filmes = document.querySelectorAll(".ficcao  p");
const sinopse = document.querySelectorAll(".sinopse p");

function activeTab(filme) {
  filme.classList.add("ativo");
}

filmes.forEach((item) => {
  item.addEventListener("click", activeTab);
});

sinopse.forEach((item) => {
  console.log(item);
});
