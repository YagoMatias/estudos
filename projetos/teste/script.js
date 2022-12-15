const dropdownMenus = document.querySelectorAll(".hamburger");
dropdownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  const menuMobile = document.querySelector(".menu-conteiner");
  event.preventDefault();
  menuMobile.classList.toggle("ativo");
  this.classList.toggle("is-active");
  outsideClick(this, () => {
    this.classList.remove("is-active");
    menuMobile.classList.remove("ativo");
  });
}

function outsideClick(element, callBack) {
  const html = document.documentElement;
  html.addEventListener("click", handleOutsideClick);
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      callBack();
    }
  }
}

var countms = 0;

var teste;

var counterms = function () {
  teste = setInterval(function () {
    countms = countms + 1;
    var id_label_ms = document.getElementById("count_label_ms");
    id_label_ms.innerHTML = countms / 100 + " s";
  }, 1);
};

function start() {
  counterms();
}

function stop() {
  clearInterval(teste);
}

function reset() {
  clearInterval(teste);

  var id_label_ms = document.getElementById("count_label_ms");
  id_label_ms.innerHTML = 0;
}
