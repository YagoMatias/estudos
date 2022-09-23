// nomeie 3 propriedades ou métodos de strings

var nome = 'Yago';
nome.length;
nome.toLowerCase();
nome.charAt(0);


// nomeie 5 propriedades ou métodos de elementos do DOM

var bnt = document.querySelector('.bnt');
bnt.getElementsByTagName('a');
bnt.classList;
bnt.addEventListener('click', function(){
  alert('clicou')
});

202008150851



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function copiarTexto() {
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}