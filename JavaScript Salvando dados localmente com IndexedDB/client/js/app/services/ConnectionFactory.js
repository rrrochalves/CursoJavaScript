// padrão de projeto: Module Pattern
let ConnectionFactory = (function () {
    const stores = ["negociacoes"];
    const verion = 4;
    const dbName = "aluraframe";
    
    let connection = null;
    let close = null;

    return class ConnectionFactory{



        constructor(){
            throw new Error("Não pode instanciar essa classe");
        }

        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbName, verion);

                openRequest.onupgradeneeded = e => {
                    this._createStore(e.target.result);
                };

                openRequest.onsuccess = e => {
                    if(!connection) {
                        connection = e.target.result;
                        close = connection.close.bind(connection);
                        connection.close = function() {
                            throw new Error("Você não pode fechar diretamente a conexão");
                        };
                    }
                        
                
                    resolve(connection);
                };

                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                };
            });
        }

        static closeConnection() {
            if (connection) {
                close();
                connection = null;
            }
        }

        static _createStore(connection) {
            stores.forEach(store => {
                if (connection.objectStoreName.contains(store))
                    connection.deleteObjectStore(store);
                
                connection.createObjectStore(store, { autoIncrement : true});
            
            });
        }
    }
})();