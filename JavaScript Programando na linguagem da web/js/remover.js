let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500)
    
});

/*
let paciente = document.querySelectorAll(".paciente");
paciente.forEach(paciente => {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    })
});
*/