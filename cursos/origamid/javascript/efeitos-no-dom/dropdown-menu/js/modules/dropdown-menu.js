export default function initDropdownMenu() {}
const dropdownMenus = document.querySelectorAll("[data-dropdown]");
dropdownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
  outsideClick(this, () => {
    console.log("ativou");
  });
}

function outsideClick(element, callBack) {
  const html = document.documentElement;
  html.addEventListener("click", handleOutsideClick);
  function handleOutsideClick(event) {
    console.log(element);
    callBack();
  }
}
