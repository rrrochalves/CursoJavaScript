console.log(`Trabalhando com Condicionais`);


const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`,
);

const idadeComprador = 17;
const maiorDeIdade = idadeComprador >= 18;
const estaAcompanhada = true;

console.log(listaDeDestinos);

if (maiorDeIdade) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1, 1); // removendo itens 
} else if (estaAcompanhada) {
    // A Pessoa é menor de idade
    console.log(`Comprador está acompanhado!`);
    listaDeDestinos.splice(1, 1); // removendo itens 
} else {
    console.log(`Comprador é menor de idade. Não é possivel realizar a venda!`);
}


console.log(listaDeDestinos);