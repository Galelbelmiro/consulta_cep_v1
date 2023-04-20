// SELECIONANDO ELEMENTOS 
let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')


// QUANDO O CAPO PERDER O FOCO A FUNÇÃO SERÁ CHAMADA 
cep.addEventListener('blur', function(e){
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=preencherCampos';
    document.body.appendChild(script);
})

function preencherCampos(resposta){

    // VERIFICA SE EXISTE ALGUM ERRO NO CEP INFORMADO
    if("erro" in resposta){
        alert('Cep não encontrado');
        return;
    }

    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;

}