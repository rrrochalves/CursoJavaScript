const criaController = (jogo) => {
    
    const $entrada = $(".entrada");
    const $lacunas = $(".lacunas");

     // consulta jogo.getLacunas() e exibe para o usuário cada lacuna 
     const exibeLacunas = () => {
        $lacunas.empty();
        jogo.getLacunas().forEach((lacuna) => {
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    };

    // muda o texto do placeHolder do campo de entrada    
    const mudaPlaceHolder = (texto) => $entrada.attr('placeholder', texto);
    

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
    const guardaPalavraSecreta = () => {
        try{
            jogo.setPalavraSecreta($entrada.val().trim());
            $entrada.val('');
            mudaPlaceHolder('chute');
            exibeLacunas();
        } catch(err){
            alert(err.message);
        }
        
    };

    const reinicia = () => {
        jogo.reinicia();
        $lacunas.empty();
        mudaPlaceHolder('palavra secreta');
    }

    const lerChute = () => {
        try {
            jogo.processaChute($entrada.val().trim().substr(0,1));
        $entrada.val('');
        exibeLacunas();

        if(jogo.ganhouOuPerdeu()){
            setTimeout(function() {
                if(jogo.ganhou()){
                    alert("Parabens, você ganhou!");
                } else if (jogo.perdeu()){
                    alert("Você perdeu!");
                }
    
                reinicia();
            },200);
            
        }
        } catch(err) {
            alert(err.message);
        }
        
    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    const inicia = () => {
        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        lerChute();
                        break;
                }
            }
        });
    };

    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
    return { inicia };
};