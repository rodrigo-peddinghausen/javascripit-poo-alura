export class Conta {

    //Aqui tá usando os setters para atribuir os valores
    constructor(saldoInicial,cliente, agencia){
        //Aqui se faz a classe abstrata
        if(this.constructor == Conta){
            throw new Error("Instanciar objecto do tipo Conta não é permitido")
        }
        
        //Se não inicializar, dá NaN :p
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
   
    get cliente(){
        return this._cliente;
    }

    //Interessante o uso do instanceof para controlar o tipo.
    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        } 
    }

    get saldo(){
        return this._saldo;
    }

    //metodo abstrato!!!
    saca(valor){
        throw new Error("O metodo saca é abstrato")
    }

    _saca(valor, taxa) {
        const valorSacado = valor * taxa;
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valorSacado;
        }  
        return 0;
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