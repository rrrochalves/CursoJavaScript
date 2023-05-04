import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome="Ricardo";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente("Roni", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const contaCorrenteRoni = new ContaCorrente(1002, cliente2);
contaCorrenteRicardo.transferir(200, contaCorrenteRoni);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteRoni);
console.log(ContaCorrente.numeroDeContas);








/*
  *  const cliente1Nome = "Ricardo";
  *  const cliente1Cpf = 11122233309;
  *  const cliente1Agencia = 1001;
  *  const cliente1Saldo = 0;

  *  const cliente2Nome = "Roni";
  *  const cliente2Cpf = 88822233309;
  *  const cliente2Agencia = 1001;
  *  const cliente2Saldo = 0; 


  *  const cliente3Nome = "Alice";
  *  const cliente3Cpf = 99922233309;
  *  const cliente3Agencia = 1001;
  *  const cliente3Saldo = 0;
*/