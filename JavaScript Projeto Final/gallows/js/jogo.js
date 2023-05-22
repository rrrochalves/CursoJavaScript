const criaJogo = (sprite) => {
    let palavraSecreta = "";
    let lacunas = [];
    let etapa = 1;

    const _criaLacunas = () => lacunas = Array(palavraSecreta.length).fill('');
 

    const _proximaEtapa = () => etapa = 2;
    

    const setPalavraSecreta = (palavra) => {
        if(!palavra.trim()) throw Error('Palavra Secreta invalida!');
        palavraSecreta = palavra;
        _criaLacunas();
        _proximaEtapa();
    };

    const getLacunas = () => {
        return lacunas;
    };

    const getEtapa = () => {
        return etapa;
    };

    const processaChute = (chute) => {
        if(!chute.trim()) throw Error('Chute invalido!');
        const exp = new RegExp(chute, 'gi');
        let resultado, acertou = false;
        
        while(resultado = exp.exec(palavraSecreta)){
            acertou = lacunas[resultado.index] = chute;
        }

        if(!acertou) sprite.nextFrame();
        
    };

    const ganhou = () => {
        return lacunas.length ? !lacunas.some(function(lacuna) {
            return lacuna == '';
        }): false;
    };

    const perdeu = () => sprite.isFinished();


    const ganhouOuPerdeu = () => ganhou() || perdeu();


    const reinicia = () => {
        etapa = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    };

    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    };
}