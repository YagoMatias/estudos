function scrollNav() {
  const menu = document.querySelectorAll('.js-menu a[href^="#"');

  function scrollLink(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  menu.forEach((link) => {
    link.addEventListener("click", scrollLink);
  });
}
scrollNav();

const arrow = document.querySelectorAll('a[href^="#"');

function scrollLink(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

arrow.forEach((link) => {
  link.addEventListener("click", scrollLink);
});
