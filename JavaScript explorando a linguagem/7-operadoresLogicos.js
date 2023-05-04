console.log(`Trabalhando com Operadores Logicos`);


const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`,
);

const idadeComprador = 18;
const maiorDeIdade = idadeComprador >= 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(listaDeDestinos);

if (maiorDeIdade || estaAcompanhada) {
    console.log(`Realizada a Compra. Boa Viagem!`);
    listaDeDestinos.splice(1, 1); // removendo itens 
} else {
    console.log(`Comprador é menor de idade. Não é possivel realizar a venda!`);
}

console.log(`znEmbarque: \n`);
if (maiorDeIdade && temPassagemComprada) {
    console.log(`Boa viagem!`);
} else {
    console.log(`Você não pode embarcar!`);
}

console.log(listaDeDestinos);