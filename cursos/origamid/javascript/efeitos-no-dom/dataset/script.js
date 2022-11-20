// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

function ativadorMenu() {
  const li = document.querySelectorAll(".js-tabmenu li");
  const secao = document.querySelectorAll(".animais-descricao > section");
  secao[0].classList.add(secao[0].dataset.anime);

  function ativarTab(index) {
    secao.forEach((item, index) => {
      item.classList.remove(secao[index].dataset.anime);
    });
    secao[index].classList.add(secao[index].dataset.anime);
    console.log(index);
  }

  li.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      ativarTab(index);
    });
  });
}
ativadorMenu();

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita.
