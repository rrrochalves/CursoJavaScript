const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    let tdpeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let tdImc = paciente.querySelector(".info-imc");

    let peso = tdpeso.textContent;
    let altura = tdAltura.textContent;

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        const imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc =  peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    return peso >= 0 && peso <= 1000;
}
function validaAltura(altura){
    return altura >= 0 && altura <= 3.00;
}