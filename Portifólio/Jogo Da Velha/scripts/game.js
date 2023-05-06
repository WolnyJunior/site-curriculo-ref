// iniciar as variáveis

let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

function handleMove(position){

    if(gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime];
    
        gameOver = vencedor();

        if(gameOver == false){
            
            //método ternario do if abaixo, com 5 linhas
            playerTime = (playerTime == 0) ? 1 : 0;
            
            // if(playerTime == 0){
            //     playerTime = 1;
            // } else {
            //     playerTime = 0;
            // }
        }
    }    

    return gameOver;
}


function vencedor(){

    let estadosVitoria = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < estadosVitoria.length; i++){
        let sequencia = estadosVitoria[i];

        let posicao1 = sequencia[0];
        let posicao2 = sequencia[1];
        let posicao3 = sequencia[2];

        if(board[posicao1] == board[posicao2] &&
            board[posicao1] == board[posicao3] &&
            board[posicao1] != ''){
                return true;
            }
    }

    return false;
}

