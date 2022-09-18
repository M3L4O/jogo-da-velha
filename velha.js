var vez = false;
var matriz = [['', '', ''],
              ['', '', ''], 
              ['', '', '']];

function blink(){
    vez = !vez;
}
function ganhou(id, jogador){
    let a = parseInt(id[0]);
    let b = parseInt(id[1]);
    console.log(jogador)
    let winCondition = jogador + jogador + jogador
    matriz[a][b] = jogador;

    let col = '';
    let row = '';
    let diaP = '';
    let diaS = '';

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(i === a){
                col += matriz[i][j];
            }
            if(j === b){
                row += matriz[i][j];
            }
            if(i == j){
                diaP += matriz[i][j];
            }
            if(i + j == 2){
                diaS += matriz[i][j];
            }
        }
    }

    return ((col == winCondition) ||
            (row == winCondition) ||
            (diaP == winCondition)||
            (diaS == winCondition))
    
}
function selecionar(obj){
    if(vez){
        let opcao = document.getElementById(obj.id).innerText;
        if( opcao == 'O' || opcao == 'X') return;
        else opcao = "X";
        if(ganhou(obj.id, 'X')){
            alert('O jogador 2 ganhou.');
            limpar();
        }
        blink();
    }else{
        let opcao = document.getElementById(obj.id).innerText;
        if( opcao == 'O' || opcao == "X") return;
        else opcao = 'O';
        if(ganhou(obj.id, 'O')){
            alert('O jogador 1 ganhou.');
            limpar();
        }
        blink();
    }
}

function limpar(){
    console.log('Limpando')
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            matriz[i][j] = '';
            document.getElementById(i.toString() + j.toString()).innerText ='';
        }
    }
    vez = false;
    
}
