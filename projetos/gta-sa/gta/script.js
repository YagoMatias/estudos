function scrollNav() {
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
}
scrollNav();

function activeAnimateScroll() {
  const animateScroll = document.querySelectorAll(".js-scroll");
  const tamanhoWindow = window.innerHeight * 0.6;

  function scroll() {
    animateScroll.forEach((section) => {
      const topo = section.getBoundingClientRect().top;
      const invisibleWindow = topo - tamanhoWindow < 0;
      if (invisibleWindow) {
        section.classList.add("ativo");
      } else {
        section.classList.add("remove");
      }
    });
  }
  scroll();
  window.addEventListener("scroll", scroll);
}
activeAnimateScroll();
