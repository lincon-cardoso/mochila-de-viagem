var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {

    event.preventDefault();
    // Puxa valores 
    var nome = form.elements.nome.value;
    var quantidade = form.elements.quantidade.value;
    // função que puxa os dados e cria as dependencias
    funcaoSeguraca(nome, quantidade);

}


function funcaoSeguraca(nome, quantidade) {

   
    var Verifca = /^[^0-9].*[^0-9]$/;
    if(Verifca.test(nome)){
        adicionaItem(nome, quantidade);
        limpaInputs()
    }else {
              
        limpaInputs()
    }

  
}

function adicionaItem(nome, quantidade) {

    // Cria um elemento li
    var li = document.createElement('li');
    var strong = document.createElement('strong');
    var lista = document.querySelector('ul');

    li.classList.add('item');

    // Define o conteúdo do elemento li como o valor do campo "nome e quantidade"
    strong.textContent = quantidade;
    li.textContent = nome;

    // atribuir a uma li

    li.insertBefore(strong, li.firstChild);
    //definindo li nome
    lista.appendChild(li);
   

}

function limpaInputs(){
    this.nome.value = '';
    this.quantidade.value = '';
}

