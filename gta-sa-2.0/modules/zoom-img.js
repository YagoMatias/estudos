export default function zoomImg() {
  function Imagens(seletor) {
    this.element = function () {
      return document.querySelectorAll(seletor);
    };
    this.ativar = function (classe) {
      this.element().forEach((item) => {
        item.classList.add(classe);
      });
    };
  }
  const imgs = new Imagens("section div > img");
  imgs.ativar("imagem");
}
