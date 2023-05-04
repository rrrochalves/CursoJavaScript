let livros = [];

const api = `https://guilhermeonrails.github.io/casadocodigo/livros.json`;



getBuscarLivrosApi();

async function getBuscarLivrosApi() {
    const response = await fetch(api);
    
    livros = await response.json();

    livrosComDescontos = aplicarDescontos(livros);
    exibirLivros(livrosComDescontos);
}
