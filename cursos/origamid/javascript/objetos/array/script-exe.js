const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const pizza = comidas.shift();
const macarrao = comidas.pop();
comidas.unshift('Arroz');
comidas.push('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();
const joana = estudantes.includes('Joana');
const juliana = estudantes.includes('Juliana');

// Substitua section por ul e div com li,
// utilizando split e join

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

const carrosOriginal = carros.slice();
const honda = carrosOriginal.pop();