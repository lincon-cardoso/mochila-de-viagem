const form = document.getElementById("novoItem")
const lista = document.getElementById("lista");
const itens = [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // exportar variavel 
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade']
    

    // Puxar os dados enviados
    criaElemento(nome.value,quantidade.value)
    limpaCampo(nome,quantidade)

})

// chama função para criação do elmento 

function criaElemento(nome, quantidade) {
    // console.log(nome, quantidade)

    //cria elementos para serem atribuidos 
    const novoItem = document.createElement('li');
    const numeroItem = document.createElement('strong')
    novoItem.classList.add("item")


    numeroItem.innerHTML = quantidade;


    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;


    lista.appendChild(novoItem);

    //define como um envio 
    const itemAtual = {
        "nome": nome ,
        "quantidade": quantidade
    }

    // empura item para dentro do array 
    itens.push(itemAtual)
    // salvando no local storege como json
    localStorage.setItem("item",JSON.stringify(itens))
    
}   

function limpaCampo(nome,quantidade){
    nome.value = ""
    quantidade.value = ""
}



