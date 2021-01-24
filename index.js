import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente("Rick", 11122233309);
const cliente2 = new Cliente("Joana", 11122233322);

const contaCorrenteRick = new ContaCorrente(1001, cliente1);
contaCorrenteRick.deposita(500);

const conta2 = new ContaCorrente(1001, cliente2);


contaCorrenteRick.transfere(200,conta2);

console.log(ContaCorrente.numeroDeContas);




