/**
 * Ser autenticavel significa ter a propriedade "senha";
 * Duck type padrão de desenvolvimento comum em linguagem 
 * que são fracamente tipadas
 */

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel 
                && autenticavel.autenticar instanceof Function;
    }
}