import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100);
    }

    saca(valor){
        const taxa = 1.001;
        return this._saca(valor, taxa);
    }
}