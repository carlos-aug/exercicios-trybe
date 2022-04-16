// let movie = "Avengers"; //String literal
// let score = 10; //Number literal
// let isValid = true; //Boolean
// let name; //Undefined
// let color = null; //Redefinição


// let salary = 3500;
// // console.log(salary + salary);
// // console.log(salary - salary);
// // console.log(salary * salary);
// // console.log(salary / salary);
// // console.log(3**3);

// ++ // incremento 
// -- // decremento

//  if = se
// else = senão

// Condições if/else

// let trybe = 19.44 

// if(trybe >= 14 && trybe < 14.40){
//     console.log("Esquenta");
// }
// else if(trybe >= 16.30 && trybe < 17.50){
//     console.log("Aula ao vivo");
// }
// else if(trybe >= 19.40 && trybe < 20){
//     console.log("Fechamento");
// }
// else { 
//     console.log("Fora do momento síncrono")
//


// Exercicios [Primeiros passos]

// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// let a = 10;
// let b = 5;

// let adicao = a + b;
//     console.log(adicao);

// let subtracao = a - b;
//     console.log(subtracao);

// let multiplicacao = a * b;
//     console.log(multiplicacao);

// let divisao = a / b;
//     console.log(divisao);

// let modulo = a % b;
//     console.log(modulo);


// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// let x = 3;
// let y = 5;

// if(x >= y){
//     console.log("x é maior que y");
// } else {
//     console.log("y é maior que x");
// }

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const predioA = 10;
// const predioB = 50;
// const predioC = 35;

// if(predioA > predioB && predioA > predioC){
//     console.log("prédio A é o maior");
// } else if(predioB > predioA && predioB > predioC){
//     console.log("prédio B é o maior");
// } else {
//     console.log("prédio C é o maior");
// }
    
// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const positivoOuNegativo = 0; 

// if(positivoOuNegativo > 0){
//     console.log("positive");
// } else if(positivoOuNegativo < 0){
//     console.log("negative");
// } else {
//     console.log("zero")
// }

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// const ladoA = 30;
// const ladoB = -60;
// const ladoC = 90;

// if(ladoA + ladoB + ladoC === 180){
//     console.log(true);
// } else if (ladoA + ladoB + ladoC > 180){
//     console.log(false);
// } else {
//     console.log("esse não é um triângulo");
// }

// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)



// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 93;

if (nota < 0 || nota > 100){
    console.log('Está nota não existe')
} else if (nota >= 90){
    console.log("A");
} else if (nota >= 80){
    console.log("B");
} else if (nota >= 70){
    console.log("C");
} else if (nota >= 60){
    console.log("D");
} else if (nota >= 50){
    console.log("E");
} else {
    console.log("F")
}