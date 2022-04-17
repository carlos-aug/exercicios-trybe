// let statusCarro = 'desligado';
// let aceleracao = 0;
// let rotacaoDoVolante = 0;

// function ligarDesligar(){  
//     if(statusCarro === 'desligado'){
//         statusCarro = 'ligado';
//     } else {
//         statusCarro = 'desligado'
//     }
//     return statusCarro
// }

// function acelerar(incremento){
//     aceleracao = aceleracao + incremento;
    
//     return 'Acelerando a' + aceleracao + 'm/s²';
// }

// function frear(decremento){
//     aceleracao = aceleracao - decremento;

//     return 'Desacelerando para ' + aceleracao + 'm/s²';
// }

// function girarVolante(anguloDaRotacao){
//     rotacaoDoVolante = anguloDaRotacao

//     return rotacaoDoVolante + 'º';
// }

// function maiorNumero(num1, num2){
//     if(num1 > num2) {
//     return num1 + ' é maior que: ' + num2;
//     } else if (num1 < num2){
//     return num2 + ' é maior que: ' + num1;
//     } else {
//     return num1 + ' é igual: ' + num2;
//     }
// }


// function soma(a, b){
//     return a + b;
// }

// function subtracao(a, b){
//     return a - b;
// }

// function multiplicacao(multA, multB){
//     return multA * multB;
// }

// function divisao(div1, div2){
//     return div1 / div2 
// }

// function modulo(num1, num2){
//     return num1 % num2;
// }

// function retornaMaior(num1, num2){
//     if(num1 > num2){
//         return num1 + ' é maior que: ' + num2;
//     } else {
//         return num2 + ' é maior que: ' + num1;
//     }
// }

// function maiorEntreTres(a, b, c){
//     if(a > b && a > c){
//         return a + ' é o maior número ';
//     } else if(b > a && b > c){
//         return b + ' é o maior número ';
//     } else {
//         return c + ' é o maior número';
//     }
// }

// function positiveOrNegative(param){
//     if(param > 0){
//         return 'positive';
//     } else if (param < 0){
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }

// let sumSide = 180;

// function ladosInternosDoTriangulo(sideA, sideB, sideC){
//     if(sideA + sideB + sideC == sumSide){
//         return true;
//     } if (sideA < 0 || sideB < 0 || sideC < 0) {
//         return 'erro: um triângulo não pode ter lado negativo'
//     } if(sideA + sideB + sideC !=  sumSide ){
//         return false;
//     }
// }

// let pecaDoXadrez = 'TORRE';

// switch(pecaDoXadrez.toLowerCase()){
//     case 'rei': console.log('-> move-se em qualquer direção, uma casa por vez');
//     break;
    
//     case 'rainha': console.log('-> move-se em qualquer direção: vertical, horizontal e diagonal, porém quantas casas quiser desde que livres');
//     break;

//     case 'torre': console.log('-> move-se em linha reta, tanto na vertical ou horizontal, quantas casas quiser');
//     break;

//     case 'bispo': console.log('-> move-se na diagonal, quantas casas quiser');
//     break;

//     case 'cavalo': console.log('-> é a única peça que pode saltar sobre as outras peças do tabuleiro');
//     break;

//     case 'peão': console.log('-> Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');

//     default:
//         console.log('-> erro: essa peça não existe no jogo')

// };

function funcaoDaPecaXadrez(pecaDoXadrez){
   
    switch(pecaDoXadrez.toLowerCase()){
        case 'rei': console.log('-> move-se em qualquer direção, uma casa por vez');
        break;
        
        case 'rainha': console.log('-> move-se em qualquer direção: vertical, horizontal e diagonal, porém quantas casas quiser desde que livres');
        break;
    
        case 'torre': console.log('-> move-se em linha reta, tanto na vertical ou horizontal, quantas casas quiser');
        break;
    
        case 'bispo': console.log('-> move-se na diagonal, quantas casas quiser');
        break;
    
        case 'cavalo': console.log('-> é a única peça que pode saltar sobre as outras peças do tabuleiro');
        break;
    
        case 'peão': console.log('-> Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
    
        default:
            console.log('-> erro: essa peça não existe no jogo')

}
}