// function Carro(marcaAtribuida, precoAtribuido) {
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuido;
// }

// const honda = new Carro();
// honda.marca = "honda";
// honda.preco = 2000;

// // Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: "Nome pessoa",
//   idade: 0,
//   andar() {
//     console.log(this.nome + " andou");
//   },
// };

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function () {
//     console.log(nome + "andou");
//   };
// }

// // Crie 3 pessoas, João - 20 anos,
// // Maria - 25 anos, Bruno - 15 anos

// const joao = new Pessoa("João", 20);
// console.log(joao);
// const maria = new Pessoa("Maria", 25);
// console.log(maria);
// const bruno = new Pessoa("Bruno", 15);
// console.log(bruno);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementos = document.querySelectorAll(seletor);
  console.log(elementos);
  this.ativo = function element() {
    elementos.forEach((item, classe) => {
      item.classList.add(classe);
    });
  };
}

const li = new Dom("li");
li.ativo("ativo");

// const lista = new Dom("ul");
// lista.ativo("ativo");

// const lastLi = new Dom("li:last-child");
// lastLi.ativo("ativo");
