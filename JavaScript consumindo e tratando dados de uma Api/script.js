async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCEPJson = await consultaCEP.json();

    if(consultaCEPJson.erro){
        throw Error('CEP não existente');
    }

    let cidade = document.getElementById('cidade');
    let logradouro = document.getElementById('endereco');
    let estado = document.getElementById('estado');
    let complemento = document.getElementById('complemento');
    let bairro = document.getElementById('bairro');

    cidade.value = consultaCEPJson.localidade;
    logradouro.value = consultaCEPJson.logradouro;
    estado.value = consultaCEPJson.uf;
    complemento.value = consultaCEPJson.complemento;
    bairro.value = consultaCEPJson.bairro;

    console.log(consultaCEPJson);
    return consultaCEPJson;
    } catch(erro) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente Novamente! </>`
        console.log(erro);
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

/*
let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));


let consultaCEP = fetch(`https://viacep.com.br/ws/01001000/json/`)
                        .then(resposta => resposta.json())
                        .then(r => {
                            if(r.erro){
                                throw Error('Esse CEP não existe');
                            } else {
                                console.log(r);
                            }
                                
                        })
                        .catch(erro => console.log(erro))
                        .finally(() => console.log('Processamento concluído!'));*/