import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  
   constructor(cliente, agencia) {
    super(0, cliente, agencia)
    ContaCorrente.numeroDeContas += 1;
   }

   //sobreescrevendo o metodo da classe mãe
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
