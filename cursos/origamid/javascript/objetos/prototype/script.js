function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const yago = new Pessoa("Yago", 24);

console.log(Pessoa.prototype);
console.log(yago.prototype);
