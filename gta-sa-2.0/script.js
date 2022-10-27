const links = document.querySelectorAll('a[href^="#"');

function scroll(event) {
  console.log('click');
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView ({
    behavior: "smooth",
      block: "center",
  });
};


links.forEach(link => {
  link.addEventListener('click', scroll);
});