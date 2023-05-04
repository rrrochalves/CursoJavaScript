console.log(`Trabalhando com Operadores Logicos`);


const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadeComprador = 18;
const maiorDeIdade = idadeComprador >= 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Floripa";
const podeComprar = maiorDeIdade || estaAcompanhada;

console.log("Destinos Possiveis: ");
console.log(listaDeDestinos);


let cont = 0;
let destinoExiste = false;
while (cont <= listaDeDestinos.length-- ) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        break;
    }
        
    cont++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste ) {
    console.log("Boa Viagem");
} else {
    console.log('Desculpe ocorreu um erro!');
}