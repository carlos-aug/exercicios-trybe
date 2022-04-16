// 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const sideA = 10;
const sideB = 80;
const sideC = 90;

let sumSide = sideA + sideB + sideC;
 
let allAnglesArePositives = sideA > 0 && sideB > 0 && sideC > 0;

if(allAnglesArePositives){
    if(sumSide === 180){
    console.log(true);
    } else {
    console.log(false);
    }
} else {
    console.log('erro: ângulo errado');
}