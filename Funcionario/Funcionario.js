export class Funcionario {
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    autentica(senha){
        return this._senha == senha;
    }

    cadastraSenha(senha){
        this._senha = senha;
    }
}