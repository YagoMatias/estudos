// // Crie um objeto com os seus dados pessoais
// // Deve possui pelo menos duas propriedades nome e sobrenome

// var dadosPessoais = {
//   nome: "Yago",
//   sobrenome: "Matias",
//   idade: 24,
//   altura: 1.8,
//   nomeCompleto: function () {
//     return `${this.nome} ${this.sobrenome}`;
//   },
// };

// // Crie um método no objeto anterior, que mostre o seu nome completo

// // Modifique o valor da propriedade preco para 3000
// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: "Audi",
// };

// carro.preco = 3000;

// // Crie um objeto de um cachorro que represente um labrador,
// // preto com 10 anos, que late ao ver um 'homem'

// var cachorro = {
//   raca: "labrador",
//   cor: "preto",
//   latir(pessoa) {
//     if (pessoa === "homem") {
//       return "latir";
//     } else {
//       return "não faz nada";
//     }
//   },
// };

// ------------------------------------------------------------------------

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Yago',
  sobrenome: 'Matias',
  idade: 24,
  altura: 1.80,
  cidade: 'Natal'  
};


// Crie um método no objeto anterior, que mostre o seu nome completo

nomeCompleto = `${dados.nome} ${dados.sobrenome}`;
console.log(nomeCompleto);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 4000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  function(pessoa){
    if(pessoa === 'Homem'.toLocaleLowerCase()){
      return 'Cachorro late';
    }else if(pessoa === 'Mulher'.toLocaleLowerCase()){
      return 'Cachorro não late é uma mulher'
    }else {
      return 'Cachorro não late'
    }
  }
};





