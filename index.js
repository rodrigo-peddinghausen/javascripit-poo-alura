class Cliente {
    nome;
    cpf;
   
}

class ContaCorrente {
    agencia;
    _saldo;

    saca(valor){
        if(this._saldo >= valor) this._saldo -= valor;
    }

    deposita(valor){
        valor > 0 ? this._saldo += valor : 'Valor incorreto'
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Rick";
cliente1.cpf = 11122233309;

cliente2.nome = "Joana";
cliente2.cpf = 11122233322;

const contaCorrenteRick = new ContaCorrente();
contaCorrenteRick.saldo = 100;
contaCorrenteRick.agencia = 1001;
contaCorrenteRick.saca(20)
contaCorrenteRick.deposita(120)
console.log(contaCorrenteRick)

console.log(cliente1, cliente2);


