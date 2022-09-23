// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;

35;

// Crie duas expressões que retornem NaN

var idade = "vinte quatro";
var tempo = "anos";
var notAnumber = idade * tempo;

// Somar a string '200' com o número 50 e retornar 250

var duzentos = +"200";
var cinquenta = 50;

var duzentosEcinquenta = duzentos + cinquenta;

console.log(duzentosEcinquenta);

// Incremente o número 5 e retorne o seu valor incrementado

var cinco = 5;
var incremento = ++cinco;
console.log(incremento);

// Como dividir o peso por 2?
var numero = +"80";
var unidade = !"kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(pesoPorDois);
