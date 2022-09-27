function initTabNav() {
  const filmes = document.querySelectorAll(".ficcao a");
  const sinopses = document.querySelectorAll(".fsinopse p");
  if (sinopses.length && filmes.length) {
    sinopses[0].classList.add("ativo");
    function activeTab(index) {
      sinopses.forEach((sinopse) => {
        sinopse.classList.remove("ativo");
      });
      sinopses[index].classList.add("ativo");
    }
    filmes.forEach((filme, index) => {
      filme.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
