/*
Duck Type - para linguagem fracamente tipada 

anda como pato? nada como pato? tem pena de pato? bico de pato? ... então...
*/

export class SistemaDeAutenticacao{
    static login(autenticavel, senha){
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autentica(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return 'autentica' in autenticavel && 
        autenticavel.autentica instanceof Function;
    }
}