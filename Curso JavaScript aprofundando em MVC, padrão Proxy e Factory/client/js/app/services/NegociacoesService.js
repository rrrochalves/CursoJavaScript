class NegociacaoService {
    constructor() {
        this._http = new HttpService();
    }
    obterNegociacaoSemanal(){
        return new Promise((resolve, reject) => {
            this._http.get("negociacoes/semana")
            .then((negociacoes) => {
                resolve(negociacoes.map(objeto => 
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            }).catch(erro => {
                console.log(erro);
                reject("Não foi possivel obter as negociações da semana!");
            });
        });

        
    }

    obterNegociacaoSemanaAnterior(){
        return new Promise((resolve, reject) => {
            this._http.get("negociacoes/anterior")
            .then((negociacoes) => {
                resolve(negociacoes.map(objeto => 
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            }).catch(erro => {
                console.log(erro);
                reject("Não foi possivel obter as negociações da semana!");
            });
        });
    }

    obterNegociacaoSemanalRetrasada(){
        return new Promise((resolve, reject) => {
            this._http.get("negociacoes/retrasada")
            .then((negociacoes) => {
                resolve(negociacoes.map(objeto => 
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            }).catch(erro => {
                console.log(erro);
                reject("Não foi possivel obter as negociações da semana!");
            });
        });
    }

}