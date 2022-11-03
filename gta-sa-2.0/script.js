const links = document.querySelectorAll('a[href^="#');
console.log(links);

function scrollSuave(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
}

links.forEach((link)=> {
  link.addEventListener("click", scrollSuave);
})

// function sectionScroll() {
//   const sections = document.querySelectorAll(".js-scroll");
//   const metadeWindow = window.innerHeight * 0.75;

//   function animaScroll() {
//     sections.forEach((section) => {
//       const sectionTop = section.getBoundingClientRect().top;
//       const sectionVisible = sectionTop - metadeWindow < 0;
//       if (sectionVisible) {
//         section.classList.add("ativo");
//       }
//     });
//   }
//   animaScroll();
//   window.addEventListener("scroll", animaScroll);
// }
// sectionScroll();
