// Operadores lógicos - &&

//1. Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

// let currentHour = 13.59;

// //2. Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

// let message = "";

// //3. Implemente condicionais para que:

// // Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
// // Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
// // Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
// // Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
// // Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

// if(currentHour >= 22){
//     console.log(message = "Não deveríamos comer nada, é hora de dormir");
// } else if(currentHour >= 18 && currentHour < 22){
//     console.log(message = "Rango da noite, vamos jantar :D");
// } else if(currentHour >= 14 && currentHour < 18){
//     console.log(message = "Vamos fazer um bolo pro café da tarde?");
// } else if(currentHour > 11 && currentHour < 14){
//     console.log(message = "Hora do almoço!!!");
// } else {
//     console.log(message = "Hmmm, cheiro de café recém passado");
// }

// console.log(message);

// Operadores logicos ||

// 1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

// let weekDay = "terça-feira"

// if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay ==="sexta-feira"){
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else {
//     console.log("FINALMENTE, descanso merecido UwU");
// }


// Switch e case

// let luzDoSemaforo = "vermelho";

// switch(luzDoSemaforo){
//     case "vermelho":
//         console.log("pare!");
//         break;
//     case "amarelo":
//         console.log("atenção!");
//         break;
//     case "verde":
//         console.log("siga!");
//         break;
//     default:
//         console.log("sinalização não identificada");
// }