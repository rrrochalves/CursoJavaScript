console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos Possiveis: ${salvador} ${saoPaulo} ${rioDeJaneiro}`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`,
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Floripa`); // Adicionar itens na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // removendo itens 
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // imprimindo elemento especifico da lista