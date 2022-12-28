const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
//Recebe dados do local storege e transforma em json parce para mostra na tela
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((element) => {
  criaElemento(element);
});

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  // exportarvariavel
  const nome = evento.target.elements['nome'];
  const quantidade = evento.target.elements['quantidade'];

  

 //define como um envio
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };


  //sequencia de execução 

  executa(itemAtual);
  criaElemento(itemAtual);
  limpaCampo(nome, quantidade);

});

// chama função para criação do elmento

function criaElemento(item) {
  // console.log(nome, quantidade)

  //cria elementos para serem atribuidos
  const novoItem = document.createElement('li');
  const numeroItem = document.createElement('strong');
  novoItem.classList.add('item');

  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);

}

function limpaCampo(nome, quantidade) {
  nome.value = '';
  quantidade.value = '';
}

function executa(itemAtual){
 

  // empura item para dentro do array
  itens.push(itemAtual);

  // salvando no local storege como json
  localStorage.setItem('itens', JSON.stringify(itens));
  
}
