function initTabNav() {
  const filmes = document.querySelectorAll(".ficcao a");
  const sinopses = document.querySelectorAll(".sinopse-ficcao p");

  if (filmes.length && sinopses.length) {
    sinopses[0].classList.add("ativo");
    function activeTab(index) {
      sinopses.forEach((p) => {
        p.classList.remove("ativo");
      });
      sinopses[index].classList.add("ativo");
    }

    filmes.forEach((a, index) => {
      a.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

const filmes = document.querySelectorAll(".boxAcao dt");

function activeAccordion() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

filmes.forEach((item) => {
  item.addEventListener("click", activeAccordion);
});
