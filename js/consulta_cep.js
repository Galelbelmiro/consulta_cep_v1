// SELECIONANDO ELEMENTOS 
let rua = document.querySelector('#rua');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#estado');
let btnCep = document.querySelector('#btnBuscarCep');
let listaCep = document.querySelector('#listaCep');


// ADICIONANDO A ESCUTA DE UM EVENTO DE CLICK
btnCep.addEventListener('click', (evento) => {

    //EVITANDO QUE DADOS SEJAM SUBMETIDOS
    evento.preventDefault()

    // MONTANDO A ESTRUTURA DE EXIBIÇÃO
    let urlBase = 'https://viacep.com.br/ws/'
    let parametros = uf.value + '/' + cidade.value + '/' + rua.value + '/' + 'json';
    let callback = '?callback=nao_sei_meu_cep';

    // CRIANDO A TAG SCRIPT 
    let script = document.createElement('script');

    // ADICIONADO O PARAMETRO SRC E MONTANDO A ESTRUTURA DE EXIBIÇÃO
    script.src = urlBase + parametros + callback;

    // ADICIONANDO O SCRIPT DENTRO DA TAG BODY DO HTML.
    document.body.appendChild(script)
})

    function nao_sei_meu_cep(resposta){

        // VERIFICA SE NÃO É UM ARRAY
        if(!Array.isArray(resposta)){
            alert('O retorno não é uma lista de CEPs');
            return;
        }

        // PARA CADA POSSIVEL CEP ELE VAI FAZER O RETORNO ABAIXO
        resposta.forEach(function(i){
            // CRIANDO UMA TAG <li> </li>
            let li = document.createElement('li');

            // EXIBINDO OS LOCAIS QUE SE ENQUADRAM NO ENDEREÇO INFORMADO
            let endereco = i.logradouro + ' | ' + i.bairro + ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep;
            li.innerHTML = endereco;

            // IMPORTANTE QUE SEJA UTILIZADO O REPLACE() PARA IMPEDIR QUE O PROGRAMA TENTE EFETUAR UMA SUBTRAÇÃO
            li.setAttribute('onclick', 'exibirCep(' + i.cep.replace('-','') + ')')

            // AQUI JOGAMOS DENTRO DE LI AS INFORMAÇÕES ACIMA
            listaCep.appendChild(li)
        });
    }

    // EXIBI O CEP NO ALERT
    function exibirCep(cep){
        alert(cep)
    }