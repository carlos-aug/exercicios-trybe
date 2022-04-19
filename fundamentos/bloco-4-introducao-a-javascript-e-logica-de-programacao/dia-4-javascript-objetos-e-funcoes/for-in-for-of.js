// // let cars = ['Fiat', 'Volks', 'Pegeout', 'Chevrolet', 'Honda'];

// // for (let index in cars){
// //     console.log(cars[index]);
// // }

// // let car = {
// //     model: 'UP!',
// //     age: 2016,
// //     color: 'White',
// //     type: 'Volkswagen'
// // }

// // for(let index in car){
// //     console.log(index, car[index]);
// // }


// // for of acessa os valores e não os índices.

// let notebooks = ['Asus', 'Dell', 'Samsung', 'Apple'];

// for(let position of notebooks){
//     console.log(position);
// };

// // for in acessa a posição do índice.

// for(let index in notebooks){
//     console.log(index);
// };

// Para fixar;

// 1. Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'Carlos',
//     person2: 'Amanda',
//     person3: 'Guilherme',
// };

// for(let index in names){
//     console.log(names + 'Olá, ' + names[index] + '!');
// };

// let car = {
//     type: 'Chevrolet',
//     model: 'Corsa',
//     year: 2010,
// };

// for(let index2 in car){
//     console.log(index2, car[index2]);
// };

function bomDiaTryber(nome){
    console.log('Bom dia, ' + nome + '!');
}

bomDiaTryber(true);
