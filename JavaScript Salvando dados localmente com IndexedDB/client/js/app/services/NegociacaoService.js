class NegociacaoService {
    
    constructor() {
        
        this._http = new HttpService();
    }
    
    obterNegociacoesDaSemana() {
       
       return new Promise((resolve, reject) => {
        
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                });  
       });        
    }
    
    obterNegociacoesDaSemanaAnterior() {
       
       return new Promise((resolve, reject) => {
        
            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                });  
       }); 
       
        
    }
    
    obterNegociacoesDaSemanaRetrasada() {
       
       return new Promise((resolve, reject) => {
        
            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                });  
       }); 
    }    
    
    
    obterNegociacoes() {

        return new Promise((resolve, reject) => {

            Promise.all([
                this.obterNegociacoesDaSemana(),
                this.obterNegociacoesDaSemanaAnterior(),
                this.obterNegociacoesDaSemanaRetrasada()
            ]).then(periodos => {

                let negociacoes = periodos
                    .reduce((dados, periodo) => dados.concat(periodo), [])
                    .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));

                resolve(negociacoes);

            }).catch(erro => reject(erro));
        });
    } 
    
    cadastra(negociacao){
        return ConnectionFactory.getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => "Negociação adicionada com sucesso!")
        .catch(() => {throw new Error("Erro ao adicionar negociação!")});
    }

    lista(){
        return ConnectionFactory.getConnection()
                .then(connection => new NegociacaoDao(connection))
                .then(dao => dao.listarTodos())
            .catch(() => {throw new Error("Erro ao listar negociação!")});
    }

    apaga() {
        return ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDao(connection))
                .then(dao => dao.apagarTodos())
                .then(() => "Negociações apagadas com Sucesso")
            .catch((erro) => this._mensagem.texto = erro);
    }

    importar(listaAtual){
        return this.obterNegociacoes()
            .then(negociacoes => 
                negociacoes.filter(negociacao => 
                !listaAtual.some(negociacaoExistente => 
                    JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente))))
                    .catch((erro) => {
                        console.log(erro);
                        throw new Error("Não foi possivel buscar as negociações!");
                    });
    }
}

