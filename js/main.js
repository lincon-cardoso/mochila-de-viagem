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
    if (Verifca.test(nome)) {
        itemSalvoPagina(nome, quantidade);
        adicionaItem(nome, quantidade);
        SalvaItemTela()
        limpaInputs()
    } else {

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

function limpaInputs() {
    this.nome.value = '';
    this.quantidade.value = '';
}




// function itemSalvoPagina(nome,quantidade) {

//     var itensArray = [];
//     var item = {
//         nome: nome,
//         quantidade: quantidade
//     }

//     itensArray.push(item);


//     let itensArrayString = JSON.stringify(itensArray)
//     localStorage.setItem('itensArray',itensArrayString);
//     let colorString = JSON.parse(localStorage.getItem("itensArray"));

//     console.log(colorString)
// }


function itemSalvoPagina(nome, quantidade) {
    // recupera o array armazenado no localStorage
    let itensArray = JSON.parse(localStorage.getItem("itensArray"));
    // se o array ainda não foi criado, cria um novo
    if (!itensArray) {
        itensArray = [];
    }
    // cria o novo item
    var item = {
        nome: nome,
        quantidade: quantidade
    }
    // adiciona o item ao array
    itensArray.push(item);
    // armazena o array atualizado no localStorage
    let itensArrayString = JSON.stringify(itensArray);
    localStorage.setItem('itensArray', itensArrayString);
}


function SalvaItemTela() {
    let itensArray = JSON.parse(localStorage.getItem("itensArray"));
    // Percorre o array de itens
    for (let i = 0; i < itensArray.length; i++) {
        // Recupera o item atual
        let item = itensArray[i];

        var li = document.createElement('li');
        var strong = document.createElement('strong');
        var lista = document.querySelector('ul');
        li.classList.add('item')
        
        strong.textContent = item.quantidade;
        li.textContent = item.nome;

        li.insertBefore(strong, li.firstChild);
        //definindo li nome
        lista.appendChild(li);
    
    
    }
    
}



// // Cria a div para o item
// let div = document.createElement('div');

// // Adiciona o nome e a quantidade do item à div
// div.innerHTML = '<p>Nome: ' + item.nome + '</p><p>Quantidade: ' + item.quantidade + '</p>';

// // Adiciona a div ao documento
// document.body.appendChild(div);