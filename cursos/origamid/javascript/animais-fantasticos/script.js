// Retorne no console todas as imagens do site

const imgSite = document.querySelectorAll('img');
console.log(imgSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagemSite = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagemSite);

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);


// Selecione o primeiro h2 dentro de .animais-descricao

const animaisDescricao = document.querySelector('.animais-descricao');
console.log(animaisDescricao);

const primeiroH2 = animaisDescricao.querySelector('h2');
console.log(primeiroH2);


// Selecione o último p do site

const todosP = document.querySelectorAll('p'); /* 1 forma*/
console.log(todosP[24]);

const ultimoP = document.getElementsByTagName('p'); /* 2 forma*/
console.log(ultimoP[24]);

const todosP2 = document.querySelectorAll('p'); /* 3 forma mais completa*/
console.log(todosP2[--todosP2.length]);


