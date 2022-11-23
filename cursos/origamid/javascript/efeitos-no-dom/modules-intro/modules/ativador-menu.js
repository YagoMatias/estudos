export default function ativadorMenu() {
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
// ativadorMenu();