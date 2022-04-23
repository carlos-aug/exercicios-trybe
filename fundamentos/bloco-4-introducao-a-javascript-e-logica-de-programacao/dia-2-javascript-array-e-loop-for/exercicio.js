// // Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for(let index of numbers){
//     console.log(index)
// }

// // Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for(let index = 0; index < numbers.length; index +=1){
//     sum += numbers[index]
// }
// console.log(sum)

// // Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for(let index = 0; index < numbers.length; index += 1){
//     sum += numbers[index]
// }

// let media = sum / numbers.length
// console.log(media);

// // Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for(let index = 0; index < numbers.length; index += 1){
//     sum += numbers[index]
// }

// let media = sum / numbers.length
// console.log(media);

// if(media > 20){
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigNumber = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > bigNumber){
        bigNumber = numbers[index]
    }
}
console.log(bigNumber)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [0, 2, 4, 8];

let oddNumber = 0;

for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 !== 0){
        oddNumber += 1;
    }
}
if(oddNumber === 0){
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(oddNumber);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }
}
console.log(menorNumero)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers2 = [];

for(let index = 1; index <= 25; index += 1){
    numbers2.push(index);
}
console.log(numbers2)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for(let i = 0; i < numbers2.length; i += 1){
    console.log(numbers2[i] / 2);
}
