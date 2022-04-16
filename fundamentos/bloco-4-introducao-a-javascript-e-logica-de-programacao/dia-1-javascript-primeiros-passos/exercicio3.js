// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numA = 20;
const numB = 70;
const numC = 30;

if(numA > numB && numA > numC){
    console.log('O maior número é: ' + numA + ' (a)');
} else if (numB > numA && numB > numC){
    console.log('O maior número é: ' + numB + ' (a)');
} else {
    console.log('O maior número é: ' + numC + ' (a)');
}