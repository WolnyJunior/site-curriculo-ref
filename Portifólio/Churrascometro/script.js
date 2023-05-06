// carne - 250g por pessoa(homem) + de 2 horas - 400g
// carne - 125g por pessoa(mulher) + de 2 horas - 200g
// galeto - 2 pedaços por pessoa(homem) + de 2 horas 4 pedaços(coxa e sobrecoxa)
// galeto - 1.5 pedaços por pessoa(mulher) + de 2 horas 3 pedaços(coxa e sobrecoxa)
// galeto - 10 pedaços por pessoa(homem) + de 2 horas 15 pedaços(tulipa/coxinha)
// galeto - 5 pedaços por pessoa(mulher) + de 2 horas 8 pedaços(tulipa/coxinha) 
// cerveja - 1500ml por pessoa(homem) + de 2 horas - 2500ml
// cerveja - 1000ml por pessoa(mulher) + de 2 horas - 1500ml

// refrigerante/agua - 1000ml por pessoa + de 2 horas - 1500ml

// criancas valem 0,5 da mulher

// let inputAdultos = document.getElementById("adultos");
let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeCarne = carneDuracao(duracao) * homens + carneDuracao(duracao)/2 * mulheres + (carneDuracao(duracao)/4 * criancas);
    let quantidadeFrango = frangoDuracao(duracao) * homens + frangoDuracao(duracao)/2 * mulheres + (frangoDuracao(duracao)/4 * criancas);
    let quantidadeCoxinha = coxinhaDuracao(duracao) * homens + coxinhaDuracao(duracao)/2 * mulheres + (coxinhaDuracao(duracao)/4 * criancas);
    let quantidadeCerveja = cervejaDuracao(duracao) * homens + cervejaDuracao(duracao) * mulheres;
    let quantidadeBebidas = bebidasDuracao(duracao) * homens + (bebidasDuracao(duracao)/2 * mulheres)+ (bebidasDuracao(duracao)/4 * criancas);

    resultado.innerHTML = `<p>Carne: ${Math.round(quantidadeCarne)} Kg</p>`
    resultado.innerHTML += `<p>Coxa/Sobrecoxa: ${Math.ceil(quantidadeFrango)} Pedaços</p>`
    resultado.innerHTML += `<p>Coxinha/Tulipa: ${Math.ceil(quantidadeCoxinha)} Pedaços</p>`
    resultado.innerHTML += `<p>Cerveja: ${Math.ceil(quantidadeCerveja / 355)} Latas 355ml</p>`
    resultado.innerHTML += `<p>Refri: ${Math.ceil(quantidadeBebidas / 2000)} Litro(s)</p>`

}

function carneDuracao(duracao){
    let carne = 0.4;
    if(duracao>= 6){
        return 0.65;
    }else{
        return 0.4;
    }
}

function coxinhaDuracao(duracao){
    // let coxinha = 10;
    if(duracao >= 3){
        return 15;
    }else{
        return 10;
    }
}

function frangoDuracao(duracao){
    // let frango = 2;
    if(duracao >= 6){
        return 4;
    }else{
        return 2;
    }
}

function cervejaDuracao(duracao){
    if(duracao>= 6){
        return 6500;
    }else{
        return 2500;
    }
}

function bebidasDuracao(duracao){
    if(duracao>= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function onOver(elemento){
    elemento.style.backgroundImage = " linear-gradient(to bottom right, black, gray)";
    elemento.style.color = "#ffffffbb";
}
function onOut(elemento){
    elemento.style.backgroundImage = " linear-gradient(to bottom right, red, yellow)";
    elemento.style.color = "black";
}
function emCima(elemento){
    elemento.style.color = "red";
}
function fora(elemento){
    elemento.style.color = "white";
}

