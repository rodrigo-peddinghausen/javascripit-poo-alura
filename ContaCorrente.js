import { Cliente } from "./Cliente.js";

class ContaCorrente {
    
    static numeroDeContas = 0;

    agencia;
    _cliente;

    //Se não inicializar com 0, dá NaN :p
    _saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }
   
    get cliente(){
        return this._cliente;
    }

    //Interessante o uso do instanceof para controlar o tipo.
    set cliente(cliente){
        if(cliente instanceof Cliente) this._cliente = cliente;
    }

    get saldo(){
        return this._saldo;
    }

    saca(valor){
        if(this._saldo >= valor) this._saldo -= valor;
        return valor;
    }

    deposita(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transfere(valor, conta){
        const valorSacado = this.saca(valor);
        conta.deposita(valorSacado);
    }
}

export {ContaCorrente};