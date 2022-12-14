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
