class ProxyFactory {

    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver){
                if(props.includes(prop) && 
                    ProxyFactory._ehFuncao(target[prop])){
                        return function() {
                            // console.log(`interceptando ${prop}`);
                            Reflect.apply(target[prop], target, arguments);
                            return acao(target);
                        }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver){
                if(props.includes(prop) ){
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _ehFuncao(func){
        return typeof(func) == typeof(Function);
    }

    /*
    exemplo de Proxy

    let self = this;
    new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver){
                if(["adiciona", "esvazia"].includes(prop) && 
                    typeof(target[prop]) == typeof(Function)){
                        return function() {
                            // console.log(`interceptando ${prop}`);
                            Reflect.apply(target[prop], target, arguments);
                            self._negociacoesView.update(target);
                        }
                }
                return Reflect.get(target, prop, receiver);
            }
        });
    */
}