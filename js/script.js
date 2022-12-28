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

  // consulta array

  const existe = itens.find(elemento => elemento.nome === nome.value)


  //item atual
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  //condicional  para verificar se id existe

  if (existe) {

    atualizaLocalStoreg(itemAtual,existe)
    Elemento__ID(itemAtual);

    // console.log(itemAtual)
    limpaCampo(nome, quantidade);

  } else {
    //verificação de id
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

    executa(itemAtual);
    criaElemento(itemAtual);
    limpaCampo(nome, quantidade);

  }



});

// chama função para criação do elmento

function criaElemento(item) {
  // console.log(nome, quantidade)

  //cria elementos para serem atribuidos
  const novoItem = document.createElement('li');
  const numeroItem = document.createElement('strong');
  novoItem.classList.add('item');

  numeroItem.innerHTML = item.quantidade;
  numeroItem.dataset.id = item.id
  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;
//botao elemento sendo apssando como paramentro para indentificar qual deletar
  novoItem.append(botaoDeleta(item.id))

  lista.appendChild(novoItem);

}

function limpaCampo(nome, quantidade) {
  nome.value = '';
  quantidade.value = '';
}

function executa(itemAtual) {


  // empura item para dentro do array
  itens.push(itemAtual);

  // salvando no local storege como json
  localStorage.setItem('itens', JSON.stringify(itens));

}


function Elemento__ID(item) {
  console.log(document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade)
}

function atualizaLocalStoreg(itemAtual,existe){

    itemAtual.id = existe.id;

    //Sobre escrevendo local storege
    itens[itens.findIndex(element=> element.id === existe.id)] = itemAtual;
    localStorage.setItem('itens', JSON.stringify(itens));
}

function botaoDeleta(id) {
  const elementoBotao = document.createElement("button");
  elementoBotao.innerHTML="Detelar";
  elementoBotao.addEventListener("click",function(){
    //pega o target do elemento e cria função para remoção atravez do pai
    deletaElemento(this.parentNode,id);
  })
  return elementoBotao;
}
//remoção de elemento 

function deletaElemento(tag,id) {
  tag.remove();
  //procur ao itens pelo id
  itens.splice(itens.findIndex(element=>element.id === id),1)

  //escrever o atualizado no local storege 
  localStorage.setItem('itens', JSON.stringify(itens));
}