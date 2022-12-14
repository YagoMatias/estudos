// Adicione a classe ativo a todos os itens do menu
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

const menu = [...document.querySelectorAll(".menu a")];
console.log(menu);

menu.forEach((item) => {
  item.classList.add("ativo");
});


menu.forEach((item) => {
  item.classList.remove("ativo");
});

menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll("img");

console.log(img);

img.forEach((imgs) => {
  const imgAtributo = imgs.hasAttribute("alt");
  console.log(imgAtributo);
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="https"');
 link.setAttribute('href', 'google.com');

 console.log(link); 


 