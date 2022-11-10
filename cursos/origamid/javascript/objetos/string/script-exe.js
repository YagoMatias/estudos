// // // Utilizando o foreach na array abaixo,
// // // some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxas = 0;

transacoes.forEach((item) => {
  const numero = +item.valor.slice(3);
  if (item.descricao.includes("Taxa")) taxas = taxas + numero;
});

let recebimento = 0;
transacoes.forEach((item) => {
  const numero = +item.valor.slice(3);
  if (item.descricao.includes("Rece")) recebimento = recebimento + numero;
});

console.log(recebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");

// Substitua todos os span's por a's

const html =
  "<ul><li><span>Sobre</span></li><li><span>Produtos</span></li><li><span>Contato</span></li></ul>";

const htmlArray = html.split("span");
const htmlLink = htmlArray.join("a");

console.log(htmlLink);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

transacoes1.forEach((item) => {
  console.log(item.toUpperCase().includes("TAXA"));
});
