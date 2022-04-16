// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numA = 50;
const numB = 70;
const numC = 30;

if(numA > numB && numA > numC){
    console.log('número A é o maior');
} else if (numB > numA && numB > numC){
    console.log('número B é o maior');
} else {
    console.log('número C é o maior');
}