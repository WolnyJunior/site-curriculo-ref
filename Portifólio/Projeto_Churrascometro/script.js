// carne - 250g por pessoa(homem) + de 2 horas - 400g
// carne - 150g por pessoa(mulher) + de 2 horas - 250g
// galeto - 2 pedaços por pessoa(homem) + de 2 horas 4 pedaços(coxa e sobrecoxa)
// galeto - 1.5 pedaços por pessoa(mulher) + de 2 horas 3 pedaços(coxa e sobrecoxa)
// galeto - 10 pedaços por pessoa(homem) + de 2 horas 15 pedaços(tulipa/coxinha)
// galeto - 5 pedaços por pessoa(mulher) + de 2 horas 8 pedaços(tulipa/coxinha) 
// cerveja - 1500ml por pessoa(homem) + de 2 horas - 2500ml
// cerveja - 1000ml por pessoa(mulher) + de 2 horas - 1500ml

// refrigerante/agua - 1000ml por pessoa + de 2 horas - 1500ml

// criancas valem 0,5 da mulher

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeCarne = carneDuracao(duracao) * adultos + (carneDuracao(duracao)/2 * criancas);
    let quantidadeCerveja = cervejaDuracao(duracao) * adultos;
    let quantidadeBebidas = bebidasDuracao(duracao) * adultos + (bebidasDuracao(duracao)/2 * criancas);

    resultado.innerHTML = `<p>Carne: ${Math.round(quantidadeCarne)} Kg</p>`
    // resultado.innerHTML += `<p>${quantidadeCerveja} L de Cerveja</p>`
    // resultado.innerHTML += `<p>${quantidadeBebidas} L de Bebidas</p>`
    resultado.innerHTML += `<p>Cerveja: ${Math.ceil(quantidadeCerveja / 355)} Latas</p>`
    resultado.innerHTML += `<p>Refri: ${Math.ceil(quantidadeBebidas / 2000)} Litrão</p>`
}

function carneDuracao(duracao){
    let carne = 0.4;
    if(duracao>= 6){
        return 0.65;
    }else{
        return 0.4;
    }
}
function cervejaDuracao(duracao){
    if(duracao>= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidasDuracao(duracao){
    if(duracao>= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function zerar(){

  document.getElementById("container").reset();

}





