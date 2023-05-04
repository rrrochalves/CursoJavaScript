import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    /**
     * Declaração de atributos privados:
     * #saldo (ainda está sendo implementado)
     * Utilizar a convenção:
     * _saldo (por exemplo);
     * Declaração de atributos publicos:
     * saldo (exemplo);
     */
    static numeroDeContas = 0;
    _cliente;
    agencia;
    _saldo = 0;
    

    set cliente(cliente) {
      if (cliente instanceof Cliente)
        this._cliente = cliente;
    }

    get cliente() {
      return this._cliente;
    }

    get saldo() {
      return this._saldo;
    }

    constructor(agencia, cliente) {
      this.agencia = agencia;
      this.cliente = cliente;
      ContaCorrente.numeroDeContas++;
    }

    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        return valor;
      }
    }

    depositar(valor) {
      if(valor <= 0) return;
      this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


}
