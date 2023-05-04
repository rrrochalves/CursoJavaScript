const adicionar = document.querySelector("#buscar-paciente");

adicionar.addEventListener("click", function() {
    console.log("Buscando paciente");

    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            let resposta = xhr.responseText;

            let pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPaciente(paciente);
        });
        } else {
            console.log(`Code: ${xhr.status} Message: ${xhr.responseText}`);
            let erro = document.querySelector("#erro-ajax");
            erro.classList.remove("invisivel");
        }
        
        
    })
    xhr.send();
})