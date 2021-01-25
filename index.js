import {Cliente} from './Cliente.js'
import {Gerente} from './Funcionario/Gerente.js'
import {Diretor} from './Funcionario/Diretor.js' 
import {SistemaDeAutenticacao} from './SistemaDeAutenticacao.js';

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastraSenha('123456');

const gerente = new Gerente('Olhha', 2000, 12312345677);
gerente.cadastraSenha('123')

const cliente = new Cliente('Loo', 1234543232, '332')

const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, '123');
const clienteEstaLogago = SistemaDeAutenticacao.login(cliente, '332');

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogago);