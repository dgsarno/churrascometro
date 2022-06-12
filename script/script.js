// Carne - 400g por pessoa se for + de 6h de evento - 650g
// Cerveja - 1200ml por pessoa se for + de 6h de evento - 2000ml
// Refri/Agua - 1000ml por pessoa se for + de 6h de evento - 1500ml

// Crianças valem por 1/2

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    
    resultado.innerHTML += `<p>${qtdTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cervejas</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas/1000} Litros de Bebidas</p>`

}
function carnePP(){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}