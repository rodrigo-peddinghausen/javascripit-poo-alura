import { Conta } from "./Conta.js";

class ContaCorrente extends Conta{
    
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    
    //Sobreescrita
    saca(valor){
        let taxa = 1.1;
        return this._saca(valor, taxa);
    }
   
}

export {ContaCorrente};