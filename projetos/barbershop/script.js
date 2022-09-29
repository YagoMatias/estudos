function clickLink() {
  const cttImg = document.querySelectorAll(".ctt-img img");
  const cttInfos = document.querySelectorAll(".ctt-infos a");

  function activeTab(index) {
    cttInfos.forEach((a) => {
      a.classList.remove("ativo");
    });
    cttInfos[index].classList.add("ativo");
  }

  cttImg.forEach((a, index) => {
    a.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
clickLink();

const menu = document.querySelectorAll('.js-menu a[href^="#"');

function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

menu.forEach((link) => {
  link.addEventListener("click", scrollSection);
});
