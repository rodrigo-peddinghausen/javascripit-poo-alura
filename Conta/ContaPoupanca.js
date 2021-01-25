import { Conta } from "./Conta.js";

class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    saca(valor){
        const taxa = 1.02;
        return this._saca(valor, taxa);
    }
}

export {ContaPoupanca}